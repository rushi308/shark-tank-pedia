/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  env:{
    awsAppsyncAPIKey: process.env.APPSYNC_API_KEY,
    awsAppsyncURL: process.env.APPSYNC_URL,
    awsAppsyncRegion: process.env.APPSYNC_AWS_REGION
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
}

module.exports = nextConfig
