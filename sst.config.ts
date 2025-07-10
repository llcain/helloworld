/// <reference path="./.sst/platform/config.d.ts" />



export default $config({
  app(input) {
    return {
      name: "helloworld",
      removal: input.stage === "production" ? "retain" : "remove",
      protect: input.stage === "production",
      home: "aws",
    };
  },

  async  run({app}) {
    // 1. DynamoDB Table
    const table = new sst.aws.Dynamo("MyCustomersTable", {
      fields: {
        customerId: "string",
        customerName: "string",
        phoneNumber: "string", // string is best for phone numbers
      },
      primaryIndex: { hashKey: "customerId" },
      globalIndexes: {
        byCustomerName: { hashKey: "customerName" },
        byPhoneNumber: { hashKey: "phoneNumber" },
      },
    });

    // 2. Lambda API
    const api = new sst.aws.ApiGatewayV2("MyApi");

    api.route("GET /items", "./api/lambda.handler");
    api.route("GET /items/{customer_id}", "./api/lambda.handler");
    api.route("PUT /items", "./api/lambda.handler");
    api.route("DELETE /items/{customer_id}", "./api/lambda.handler");

    // 3. Cognito User Pool
    const userPool = new sst.aws.CognitoUserPool("UserPool");

    const userPoolClient = new sst.aws.CognitoUserPool("UserPoolClient");
    
    

    // 4. Static Vue Frontend (using Amplify UI)
    const site = new sst.aws.StaticSite("MyWeb", {
      path: "./helloworld", // Adjust this to match your actual Vue project folder
      build: {
        command: "npm run build",
        output: "dist",
      },
      environment: {
        VITE_REGION: app.region,
        VITE_USER_POOL_ID: userPool.id,
        VITE_USER_POOL_CLIENT_ID: userPoolClient.id,
        VITE_API_URL: api.url,
      },
    });

    // 5. Return Outputs
    return {
      apiUrl: api.url,
      siteUrl: site.url,
      userPoolId: userPool.id,
      userPoolClientId: userPoolClient.id,
    };
  },
});
