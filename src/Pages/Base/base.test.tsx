import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Base } from './index';

it('Renders the title', () => {
  const result = render(<Base children={<></>} />, { wrapper: BrowserRouter });
  expect(result.getByText("DoodleBobBuffPants")).toBeDefined();
});

it('Renders children', () => {
  const result = render(<Base children={<div title="test"></div>} />, { wrapper: BrowserRouter });
  expect(result.getByTitle("test")).toBeDefined();
});
