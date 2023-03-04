import React from "react";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import { getPostNames } from "Pages/Home";
import { Post } from "./index";

it("Renders posts", () => {
  vi.spyOn(global, "fetch");
  console.error = vi.fn();
  getPostNames().forEach(async post => {
    const match = post.match("(\\d+)-(\\d+)-(\\d+)-(.+).md")!;
    render(
      <MemoryRouter initialEntries={[`/${match[1]}/${match[2]}/${match[3]}/${match[4]}`]}>
        <Routes>
          <Route path="/:year/:month/:day/:title" element={<Post />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(`/Pages/Post/Posts/${post}`));
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
