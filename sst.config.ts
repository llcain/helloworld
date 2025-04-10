import { StackContext, StaticSite, Table, Api } from "@serverless-stack/resources"; // Correct import

export default function MyStack({ stack }: StackContext) {
  // DynamoDB Table
  const table = new Table(stack, "MyCustomersTable", {
    fields: {
      customerId: "string",
      customerName: "string",
      phoneNumber: "string",
    },
    primaryIndex: { partitionKey: "customerId" },
  });

  // API Gateway (with Lambda)
  const api = new Api(stack, "MyApi", {
    routes: {
      "GET /items": "packages/functions/src/lambda.handler",
      "GET /items/{customer_id}": "packages/functions/src/lambda.handler",
      "PUT /items": "packages/functions/src/lambda.handler",
      "DELETE /items/{customer_id}": "packages/functions/src/lambda.handler",
    },
    defaults: {
      function: {
        bind: [table],
      },
    },
  });

  // Static Site (Vue app)
  const site = new StaticSite(stack, "VueSite", {
    path: "packages/frontend",  // Path to your Vue app
    buildCommand: "npm run build",  // Command to build the Vue app
    buildOutput: "dist",  // Output folder after build
    environment: {
      VITE_API_URL: api.url,  // API URL passed to the Vue app as an environment variable
      TABLE_NAME: table.tableName,  // Table name passed to the Vue app as an environment variable
    },
  });

  stack.addOutputs({
    SiteURL: site.url,  // Output the URL of the deployed Vue app
    ApiEndpoint: api.url,  // Output the URL of the API
  });
}
