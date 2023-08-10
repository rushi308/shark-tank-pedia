import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/App.css";
import "@/styles/style.css";
import "@/styles/style_1.css";
import "@/styles/paper-dashboard.css";
import { Amplify } from "aws-amplify";
import { Router } from "next/router";
import { loaderRef } from "@/components/Spinner";

Amplify.configure({
  Auth: {
    region: process.env.awsAppsyncRegion,
    userPoolId: process.env.cognitoUserPoolId,
    userPoolWebClientId: process.env.cognitoUserPoolClientId,
  },
  region: process.env.awsAppsyncRegion,
  userPoolId: process.env.cognitoUserPoolId,
  userPoolWebClientId: process.env.cognitoUserPoolClientId,
  aws_project_region: process.env.awsAppsyncRegion,
  aws_cognito_region: process.env.awsAppsyncRegion,
  API: {
    aws_appsync_graphqlEndpoint: process.env.awsAppsyncURL,
    aws_appsync_apiKey: process.env.awsAppsyncAPIKey,
    aws_appsync_region: process.env.awsAppsyncRegion,
    aws_appsync_authenticationType: "API_KEY",
  },
  ssr: true,
});

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Router.events.on("routeChangeStart", (_url: string) => {
    loaderRef?.current?.show();
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Router.events.on("routeChangeComplete", (_url: string) => {
    // loaderRef?.current?.hide();
  });
  return (
    <>
      <div className="App">
        <div className="site-wrap">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
