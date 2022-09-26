import React from "react";
import { render } from '@testing-library/react';
import { Theme } from './index';

it('Renders the theme', () => {
  const result = render(<Theme />);
  expect(result.queryByAltText("")).toBeDefined();
});
