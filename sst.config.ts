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

    
    const table = new sst.aws.Dynamo("MyTable", {
      fields: {
        customerId: "string",
        customerName: "string",
        phoneNumber: "number"
      },
      primaryIndex: { hashKey: "customerId"}
    })
    
  },
});
