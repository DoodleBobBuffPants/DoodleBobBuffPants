import React from "react";
import { render } from '@testing-library/react';
import { LinkedIn } from './index';

it('Renders the LinkedIn icon', () => {
  const result = render(<LinkedIn className="test" link="test" />);

  const element = result.getByTitle("linkedin");

  expect(element).toBeDefined();
  expect(element.childNodes.length).toBe(1);
  expect(element.childNodes[0].nodeName).toBe("svg");
});
