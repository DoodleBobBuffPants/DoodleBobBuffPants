import { render, screen } from "@testing-library/react";
import Books from "../page";
import books from "../books";

it("Renders all books", () => {
  render(<Books />);

  books.forEach(async book => {
    expect(await screen.queryByAltText(book.title)).toBeDefined();
  });
});
