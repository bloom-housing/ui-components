/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testRegex: ["/*.test.tsx$", "/*.test.ts$"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css|less)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["node_modules", "node_modules/?!(nanoid)/"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
};