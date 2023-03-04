import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Home, getPostNames } from "./index";
import { projects } from "./projects";

it("Renders projects", () => {
  render(<Home />, { wrapper: BrowserRouter });

  projects.forEach(project => {
    const link = screen.getByText(project.name);
    expect(link).toBeDefined();
    expect(link.nodeName).toBe("A");
  });
});

it("Renders posts", () => {
  render(<Home />, { wrapper: BrowserRouter });

  getPostNames().forEach(post => {
    const match = post.match("(\\d+)-(\\d+)-(\\d+)-(.+).md")!;
    const link = screen.getByText(match[4].replaceAll("-", " ").replaceAll("_", " - "));
    expect(link).toBeDefined();
  });
});

it("Renders socials", () => {
  render(<Home />, { wrapper: BrowserRouter });
  expect(screen.getByTitle("linkedin")).toBeDefined();
});
