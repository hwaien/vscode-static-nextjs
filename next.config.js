// What is this file? https://nextjs.org/docs/api-reference/next.config.js/introduction

/* eslint-disable node/no-unpublished-require */ // It is OK to ignore unpublished require because this file itself is also unpublished (only run at dev-time)

// Adding support for bundle treemap visualization.
// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
});
