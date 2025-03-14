/// <reference path="./.sst/platform/config.d.ts" />

import { Dynamo } from "./.sst/platform/src/components/aws";

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

    // new sst.aws.StaticSite("MyWeb", {
    //   build: {
    //     command: "npm run build",
    //     output: "dist"
    //   }
    // });
    // new sst.aws.Vuejs("MyVueApp", {
    //   link: [table],
    //   link: [api],
    // })

    
    const table = new sst.aws.Dynamo("MyTable", {
      fields: {
        customerId: "string",
        customerName: "string",
        phoneNumber: "number"
      },
      primaryIndex: { hashKey: "customerId"}
    })

   const api = new sst.aws.ApiGatewayV1("MyApi");

   api.route("GET /", "src/get.handler");

   api.deploy();
    
  },
});
