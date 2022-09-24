import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Books } from './index';
import { books } from "./books";

it('Renders all books', () => {
  const result = render(<Books />, { wrapper: BrowserRouter });

  books.forEach(book => {
    const link = result.getByText(book.title);
    const image = result.getByAltText(book.title);
    expect(link).toBeDefined();
    expect(image).toBeDefined();
    expect(link.nodeName).toBe("A");
    expect(image.nodeName).toBe("IMG");
  });
});
