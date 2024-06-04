import React from "react";

import { HelloComponentInterface } from "./types";

const HelloComponent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<HelloComponentInterface>
>(({ colorScheme, appearance, background, border, children }, ref) => {
  return (
    <h4>Hello Component</h4>
  );
});

HelloComponent.displayName = "HelloComponent";

export default HelloComponent;
