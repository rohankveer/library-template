/* eslint-env node */

const coverage = process.argv.includes("--coverage");
const ci = process.argv.includes("--ci");

export default {
  transform: {
    "^.+\\.m?(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.(svg|css)$": "identity-obj-proxy",
  },
  testEnvironmentOptions: {
    customExportConditions: ci && !coverage ? [] : ["dev"],
  },
  setupFilesAfterEnv: [
    "<rootDir>/tests/__setup__/axe.ts",
    "<rootDir>/tests/__setup__/fail-on-console.ts",
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/(?!react-merge-refs)"],
  testEnvironment: "jsdom",
  collectCoverageFrom: [".yarn/__virtual__/**/*", "src/**/*"],
  reporters: ci
    ? [["github-actions", { silent: false }], "summary"]
    : ["default"],
  coverageReporters: ["lcov", "text", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
    },
  },
};
