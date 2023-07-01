import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";
import projects from "../projects";
import { getPosts } from "../posts";

describe("Home", () => {
  render(<Home />);

  it("Renders the avatar", async () => {
    expect(await screen.queryByAltText("avatar")).toBeDefined();
  });

  it("Renders projects", () => {
    projects.forEach(async project => {
      expect(await screen.queryByText(project.name)).toBeDefined();
    });
  });

  it("Renders posts", () => {
    getPosts().forEach(async post => {
      expect(await screen.queryByText(post.title)).toBeDefined();
    });
  });

  it("Renders socials", async () => {
    expect(await screen.queryByRole("button", { name: "linkedin" })).toBeDefined();
  });
});
