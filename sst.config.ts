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
    
  },
});
