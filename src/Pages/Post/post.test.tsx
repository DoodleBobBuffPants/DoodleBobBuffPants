import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Post } from './index';

it('Renders a route', () => {
  const result = render(<MemoryRouter initialEntries={['/test/test/test/test']}><Post /></MemoryRouter>);
  expect(result.container).toBeDefined()
});
