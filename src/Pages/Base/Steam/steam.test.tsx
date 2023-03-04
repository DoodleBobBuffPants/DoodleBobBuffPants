import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { Steam } from './index';

it('Renders achievements', async () => {
  render(<Steam />);
  const achievements = waitFor(() => screen.findByText("Rarest Achievement Showcase"));
  expect(achievements).toBeDefined();
});
