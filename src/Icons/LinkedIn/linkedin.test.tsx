import React from "react";
import { render, screen } from "@testing-library/react";
import { LinkedIn } from "./index";

it("Renders the LinkedIn icon", () => {
  render(<LinkedIn className="test" link="test" />);

  const element = screen.getByTitle("linkedin");

  expect(element).toBeDefined();
  expect(element.childNodes.length).toBe(1);
  expect(element.childNodes[0].nodeName).toBe("svg");
});
