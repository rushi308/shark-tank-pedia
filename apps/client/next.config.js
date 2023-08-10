/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  env:{
    awsAppsyncAPIKey: process.env.APPSYNC_API_KEY,
    awsAppsyncURL: process.env.APPSYNC_URL,
    awsAppsyncRegion: process.env.APPSYNC_AWS_REGION,
    cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
    cognitoUserPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  output: 'standalone',
  transpilePackages:['sharktankpedia-schema']
}

module.exports = nextConfig
