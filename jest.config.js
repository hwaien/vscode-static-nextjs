// What is this file? https://jestjs.io/docs/configuration

const jestConfig = {
  testEnvironment: "jsdom",
};

// ts-jest config created by command "yarn ts-jest config:init"
// https://kulshekhar.github.io/ts-jest/docs/getting-started/installation
const tsJestConfig = {
  preset: "ts-jest",
};

// Next.js configurations
// https://nextjs.org/docs/testing
const nextJest = require("next/jest");
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
const nextJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (remove when automatic configuration is supported)
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
};

module.exports = createJestConfig({
  ...jestConfig,
  ...tsJestConfig,
  ...nextJestConfig,
});
