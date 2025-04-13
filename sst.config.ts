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
    });

    // Lambda-backed API
    const api = new sst.aws.ApiGatewayV1("MyApi");

    api.route("GET /items", "./api/lambda.js");
    api.route("GET /items/{customer_id}", "./api/lambda.js");
    api.route("PUT /items", "./api/lambda.js");
    api.route("DELETE /items/{customer_id}", "./api/lambda.js");

    api.deploy();

    // Static Vue site
    new sst.aws.StaticSite("MyWeb", {
      build: {
        command: "npm run build",
        output: "dist",
      },
      link: [table, api], // Correct way to link both
    });
  },
});