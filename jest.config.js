// What is this file? https://jestjs.io/docs/configuration

// Next.js configurations
// https://nextjs.org/docs/testing
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

module.exports = createJestConfig({
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Handle module aliases (remove when automatic configuration is supported)
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
});
