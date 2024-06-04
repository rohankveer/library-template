import { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)", "../stories/**/*.mdx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.join(__dirname, "tsconfig.storybook.json"),
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  core: {
    disableWhatsNewNotifications: true,
  },
  viteFinal: async (config, options) => {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      root: "stories/", // set root not to be the project root, otherwise chokidar/vite doesn't watch the yarn virtuals
      resolve: {
        conditions: ["dev"],
      },
      plugins: [react()],
    });
  },
};

export default config;
