import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";

import { HelloComponent } from "@rv/web-library-template";

describe("HelloComponent", () => {
  it("passes accessibility", async () => {
    const { container } = render(<HelloComponent>Test Button</HelloComponent>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
