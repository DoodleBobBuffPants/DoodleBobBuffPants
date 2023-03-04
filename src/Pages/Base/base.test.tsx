import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Base } from "./index";

it("Renders the title", () => {
  render(<Base children={<div />} />, { wrapper: BrowserRouter });
  expect(screen.getByText("DoodleBobBuffPants")).toBeDefined();
});

it("Renders children", () => {
  render(<Base children={<div title="test" />} />, { wrapper: BrowserRouter });
  expect(screen.getByTitle("test")).toBeDefined();
});

it("Renders the theme", () => {
  render(<Base children={<div />} />, { wrapper: BrowserRouter });
  expect(screen.getByAltText("")).toBeDefined();
});
