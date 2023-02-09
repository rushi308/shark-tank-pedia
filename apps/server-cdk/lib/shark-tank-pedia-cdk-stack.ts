import {
  aws_appsync,
  aws_s3,
  CfnOutput,
  RemovalPolicy,
  Stack,
  StackProps,
} from "aws-cdk-lib";
import { GraphqlApi } from "aws-cdk-lib/aws-appsync";
import { Construct } from "constructs";
import { NodejsServiceFunction } from "./constructs/nodejs-service-function";
import * as path from "path";
import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface SharkTanPediaStackProps extends StackProps {
  environmentName: string;
}

export class SharkTankPediaStack extends Stack {
  constructor(scope: Construct, id: string, props: SharkTanPediaStackProps) {
    super(scope, id, props);

    const { environmentName } = props;

    const productsDynamoDBTable = new Table(this, "ProductsTable", {
      tableName: `${environmentName}-products`,
      partitionKey: { name: "id", type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
      pointInTimeRecovery: environmentName === "Production" ? true : false,
    });

    const s3Bucket = new aws_s3.Bucket(this, "ImageUploadBucket", {
      bucketName: "sharktank-pedia-image-upload-bucket",
    });

    // Sample lambda for monitoring datadog
    const apiLambda = new NodejsServiceFunction(
      this,
      "SharkTankPediaAPILambda",
      {
        functionName: `${environmentName}-SharkTankPediaAPILambda`,
        packageName: "api",
        environment: {
          PRODUCTS_TABLE_NAME: productsDynamoDBTable.tableName,
          IMAGE_UPLOAD_BUCKET_NAME: s3Bucket.bucketName,
        },
      }
    );

    productsDynamoDBTable.grantReadWriteData(apiLambda);
    s3Bucket.grantReadWrite(apiLambda);

    const graphqlAPI = new GraphqlApi(this, "SharkTankPediaAPI", {
      name: `${environmentName}-SharkTankPediaAPI`,
      schema: aws_appsync.SchemaFile.fromAsset(
        path.resolve(
          path.resolve(__dirname, "../../../"),
          "packages/schema/api/schema.graphql"
        )
      ),
    });

    const apiLambdaDataSource = graphqlAPI.addLambdaDataSource(
      "APILambdaDS",
      apiLambda,
      {
        name: "APILambdaDS",
        description: "Lambda to handle product API requests",
      }
    );

    apiLambdaDataSource.createResolver("ProductQuery", {
      typeName: "Query",
      fieldName: "product",
    });

    apiLambdaDataSource.createResolver("ProductsQuery", {
      typeName: "Query",
      fieldName: "products",
    });

    apiLambdaDataSource.createResolver("ProductMutation", {
      typeName: "Mutation",
      fieldName: "product",
    });

    apiLambdaDataSource.createResolver("ImageUploadMutation", {
      typeName: "Mutation",
      fieldName: "imageUpload",
    });

    new CfnOutput(this, "Graphqlurl", {
      value: graphqlAPI.graphqlUrl,
    });
  }
}
