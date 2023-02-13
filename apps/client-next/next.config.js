/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    awsAppsyncAPIKey: process.env.APPSYNC_API_KEY,
    awsAppsyncURL: process.env.APPSYNC_URL,
    awsAppsyncRegion: process.env.AWS_REGION
  },
}

module.exports = nextConfig
