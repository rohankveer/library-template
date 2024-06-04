import { Meta, StoryObj } from "@storybook/react";

import {
  HelloComponent,
  HelloComponentProps,
} from "@rv/web-library-template";

const meta: Meta<HelloComponentProps> = {
  title: "Components/HelloComponent",
  component: HelloComponent,
  args: {
    children: "Hello",
    colorScheme: "default",
    appearance: "primary",
    border: "outlined",
    background: "filled",
  },
};

export default meta;

export const Default: StoryObj<HelloComponentProps> = {};
