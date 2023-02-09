import * as lambda from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
  SourceMapMode,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from "path";

interface NodejsServiceFunctionProps extends NodejsFunctionProps {
  packageName: string;
}

export class NodejsServiceFunction extends NodejsFunction {
  constructor(scope: Construct, id: string, props: NodejsServiceFunctionProps) {
    const runtime = props.runtime ?? lambda.Runtime.NODEJS_16_X;

    // const logRetention = logs.RetentionDays.THREE_MONTHS;
    // const tracing = lambda.Tracing.ACTIVE;
    const rootDirectory = path.resolve(__dirname, "../../../../");
    const packageDirectory = path.resolve(
      rootDirectory,
      "apps",
      props.packageName
    );

    const entry = path.resolve(packageDirectory, "src/index.ts");
    const tsconfig = path.resolve(packageDirectory, "tsconfig.json");

    const bundling = {
      preCompilation: true,
      forceDockerBundling: false,
      sourceMap: true,
      tsconfig,
      sourceMapMode: SourceMapMode.INLINE,
      sourcesContent: false,
      externalModules: ["aws-sdk", "winston"],
      nodeModules: ["winston"],
    };

    super(scope, id, {
      ...props,
      runtime,
      bundling,
      entry,
    });
    this.addEnvironment("LOG_LEVEL", "40");
  }
}
