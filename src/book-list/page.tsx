import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import books from "./books";

const Books = () => (
  <>
    <h2 className="text-center text-2xl mb-8">Books I have read</h2>
    <ImageList variant="masonry" cols={3} gap={8}>
      {books.map(book => (
        <a href={`https://openlibrary.org/books/${book.edition}`} target="_blank" className="text-center inline-block mr-12" key={book.edition}>
          <ImageListItem>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`} width="200" height="300" alt={book.title} className="mb-5" />
          </ImageListItem>
        </a>
      ))}
    </ImageList>
  </>
);

export default Books;
