import React from "react";
import { render, waitFor } from '@testing-library/react';
import { Steam } from './index';

it('Renders nothing due to mocked fetch', async () => {
  expect(render(<Steam />)).toBeDefined();
  await waitFor(() => expect(console.error).toHaveBeenCalledTimes(1));
});
