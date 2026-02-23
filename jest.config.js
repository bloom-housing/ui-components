/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testRegex: ["/*.test.tsx$", "/*.test.ts$"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css|less)$": "identity-obj-proxy",
    "\\.mdx$": "<rootDir>/.jest/mock.js",
    "^@dnd-kit/dom$": "@dnd-kit/dom/index.cjs",
    "^@dnd-kit/dom/utilities$": "@dnd-kit/dom/utilities.cjs",
    "^@dnd-kit/dom/sortable$": "@dnd-kit/dom/sortable.cjs",
    "^@dnd-kit/react$": "@dnd-kit/react/index.cjs",
    "^@dnd-kit/react/hooks$": "@dnd-kit/react/hooks.cjs",
    "^@dnd-kit/react/utilities$": "@dnd-kit/react/utilities.cjs",
    "^@dnd-kit/react/sortable$": "@dnd-kit/react/sortable.cjs",
  },
  // transformIgnorePatterns: ["node_modules", "node_modules/?!(nanoid)/"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
}
