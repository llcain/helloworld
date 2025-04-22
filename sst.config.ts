/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "helloworld",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },

  async run() {
    // DynamoDB table
    const table = new sst.aws.Dynamo("MyCustomersTable", {
      fields: {
        customerId: "string",
        customerName: "string",
        phoneNumber: "number",
      },
      primaryIndex: { hashKey: "customerId" },
      globalIndexes: {
        byCustomerName: { hashKey: "customerName" },
        byPhoneNumber: { hashKey: "phoneNumber" },
      },
    });

    // Lambda-backed API
    const api = new sst.aws.ApiGatewayV2("MyApi");

    api.route("GET /items", "./api/lambda.js");
    api.route("GET /items/{customer_id}", "./api/lambda.js");
    api.route("PUT /items", "./api/lambda.js");
    api.route("DELETE /items/{customer_id}", "./api/lambda.js");

    // Static Vue site
    new sst.aws.StaticSite("MyWeb", {
      path: ".",
      build: {
        command: "npm run build",
        output: "dist",
      }      
    });
  },
});
