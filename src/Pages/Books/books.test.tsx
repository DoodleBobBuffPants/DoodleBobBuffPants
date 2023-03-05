import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Books } from "./index";
import { books } from "./books";

it("Renders all books", () => {
  render(<Books />, { wrapper: BrowserRouter });

  books.forEach(book => {
    const link = screen.getByText(book.title);
    const image = screen.getByAltText(book.title);
    expect(link).toBeDefined();
    expect(image).toBeDefined();
    expect(link.nodeName).toBe("A");
    expect(image.nodeName).toBe("IMG");
  });
});
