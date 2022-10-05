import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Home, getPostNames } from './index';
import { projects } from "./projects";

it('Renders projects', () => {
  const result = render(<Home />, { wrapper: BrowserRouter });

  projects.forEach(project => {
    const link = result.getByText(project.name);
    expect(link).toBeDefined();
    expect(link.nodeName).toBe("A");
  });
});

it('Renders posts', () => {
  const result = render(<Home />, { wrapper: BrowserRouter });

  getPostNames().forEach(post => {
    const match = post.match("posts/(\\d+)-(\\d+)-(\\d+)-(.+).md")!;
    const link = result.getByText(match[4].replaceAll("-", " ").replaceAll("_", " - "));
    expect(link).toBeDefined();
  });
});

it('Renders socials', () => {
  const result = render(<Home />, { wrapper: BrowserRouter });
  expect(result.getByTitle("linkedin")).toBeDefined();
});
