import { getJestConfig } from "@storybook/test-runner";

const ci = !!process.env.GITHUB_ACTION;

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  ...getJestConfig(),
  testTimeout: 30000,
  reporters: ci
    ? [["github-actions", { silent: false }], "summary"]
    : ["default"],
};

export default config;
