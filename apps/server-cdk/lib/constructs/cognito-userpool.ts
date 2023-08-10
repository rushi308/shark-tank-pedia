import {
  AccountRecovery,
  UserPool,
  UserPoolClient,
  UserPoolProps,
} from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

interface CognitoUserPoolProps extends UserPoolProps {
  environmentName: string;
}

export class CognitoUserPool extends Construct {
  readonly userPoolId: string;
  readonly userPoolClientId: string;
  readonly userPool;

  constructor(scope: Construct, id: string, props: CognitoUserPoolProps) {
    super(scope, id);

    const { environmentName } = props;

    const userPool = new UserPool(
      scope,
      `${environmentName}-SharkTankPediaAdminUserPool`,
      {
        selfSignUpEnabled: true,
        accountRecovery: AccountRecovery.PHONE_AND_EMAIL,
        autoVerify: {
          email: true,
        },
        standardAttributes: {
          email: {
            required: true,
            mutable: true,
          },
          givenName: {
            required: true,
          },
          familyName: {
            required: true,
          },
        },
      }
    );

    const userPoolClient = new UserPoolClient(
      scope,
      `${environmentName}-SharkTankPediAdminClient`,
      {
        userPoolClientName: `${environmentName}SharkTankPediAdminClient`,
        userPool,
      }
    );

    this.userPoolId = userPool.userPoolId;
    this.userPoolClientId = userPoolClient.userPoolClientId;
    this.userPool = userPool;
  }
}
