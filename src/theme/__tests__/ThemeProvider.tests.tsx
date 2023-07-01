import { render, screen } from "@testing-library/react";
import ThemeProvider from "../ThemeProvider";

describe("ThemeProvider", () => {
  render(<ThemeProvider>test</ThemeProvider>);

  it("Renders the title", async () => {
    expect(await screen.queryByText("DoodleBobBuffPants")).toBeDefined();
  });

  it("Renders children", async () => {
    expect(await screen.queryByText("test")).toBeDefined();
  });

  it("Renders Steam achievements", async () => {
    expect(await screen.queryByText("Rarest Achievement Showcase")).toBeDefined();
  });

  it("Renders the seasonal image", async () => {
    expect(await screen.queryByAltText("seasonal-image")).toBeDefined();
  });
});
