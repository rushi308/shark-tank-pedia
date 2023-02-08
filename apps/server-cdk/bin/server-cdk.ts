#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SharkTankPediaStack } from "../lib/shark-tank-pedia-cdk-stack";

const app = new cdk.App();

const { ENVIRONMENT_NAME } = process.env;
if (!ENVIRONMENT_NAME) {
  throw new Error("Missing environment variable: ENVIRONMENT_NAME");
}

new SharkTankPediaStack(app, `${ENVIRONMENT_NAME}-SharkTankPediaStack`, {
  env: {
    region: "us-east-1",
    account: "438422980939",
  },
  environmentName: ENVIRONMENT_NAME,
});
