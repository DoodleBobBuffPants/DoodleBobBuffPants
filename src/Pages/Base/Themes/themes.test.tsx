import React from "react";
import { render, screen } from '@testing-library/react';
import { Theme } from './index';

it('Renders the theme', () => {
  render(<Theme />);
  expect(screen.getByAltText("")).toBeDefined();
});
