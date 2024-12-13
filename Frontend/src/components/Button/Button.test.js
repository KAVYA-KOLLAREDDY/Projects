import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { it } from "@jest/globals";

const { getByText } = render(
  <Button className="danger large">Click Me!</Button>
);

it("shows the button with the right text", () => {
  getByText("Click Me!");
});
