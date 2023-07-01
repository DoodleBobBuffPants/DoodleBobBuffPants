import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SteamAchievements from "../SteamAchievements";

it("Renders Steam achievements", async () => {
  render(<SteamAchievements />);
  expect(await screen.queryByText("Rarest Achievement Showcase")).toBeDefined();
});
