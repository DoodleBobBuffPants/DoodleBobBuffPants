import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Base } from './index';

it('Renders the title', () => {
  const result = render(<Base children={<div />} />, { wrapper: BrowserRouter });
  expect(result.getByText("DoodleBobBuffPants")).toBeDefined();
});

it('Renders children', () => {
  const result = render(<Base children={<div title="test" />} />, { wrapper: BrowserRouter });
  expect(result.getByTitle("test")).toBeDefined();
});

it('Renders the theme', () => {
  const result = render(<Base children={<div />} />, { wrapper: BrowserRouter });
  expect(result.queryByAltText("")).toBeDefined();
});
