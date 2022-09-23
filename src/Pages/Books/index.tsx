import React from "react";
import { Base } from "Pages/Base";
import { books } from "./books";
import "./index.scss";

const Books = () => {
  return <Base>
    <div>
      <h2 className="book-title">Books I have read</h2>
      <div className="books">
        {
          books.map(book =>
            <a href={`https://openlibrary.org/books/${book.edition}`} target="_blank" key={book.edition}>
              <img src={`https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`} width="200" height="300" alt={book.title} />
              {book.title}
            </a>
          )
        }
      </div>
    </div>
  </Base>
}

export { Books };
