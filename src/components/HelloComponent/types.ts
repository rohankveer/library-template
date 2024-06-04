import React from "react";

import type HelloComponent from "./HelloComponent";

export interface HelloComponentInterface {
  appearance?: string
}

export type HelloComponentProps = React.ComponentProps<typeof HelloComponent>;
