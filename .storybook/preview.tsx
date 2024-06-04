import React from "react";
import { withActions } from "@storybook/addon-actions/decorator";
import { themes } from "@storybook/theming";
import { Preview, ReactRenderer } from "@storybook/react";
import { DocsContainer, DocsContainerProps } from "@storybook/blocks";
import { DecoratorFunction } from "@storybook/types";

const dark = !!window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

const themeProvider: DecoratorFunction<ReactRenderer> = (Story, context) => {
  return (
    <div dir={context.globals.direction} style={{ display: "inline-flex" }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    docs: {
      theme: dark ? themes.dark : themes.light,
      container: (props: DocsContainerProps) => {
        return (
          <DocsContainer {...props}></DocsContainer>
        );
      },
    },
    backgrounds: { disable: true },
    controls: {
      expanded: true,
    },
    options: {
      storySort: {
        order: ["Welcome", "Components"],
      },
    },
  },
  decorators: [withActions<ReactRenderer>, themeProvider],
  tags: ["autodocs"],
};

export default preview;
