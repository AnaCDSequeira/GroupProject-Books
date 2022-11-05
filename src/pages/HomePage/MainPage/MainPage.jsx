import styled from "styled-components";
import { useState, useEffect } from "react";

const BooksContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const Main = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        "https://ancient-temple-61124.herokuapp.com/api/book/"
      );
      const json = await response.json();
      const data = json.data;
      setBooks(data);
    }
    fetchBooks();
  }, []);

  const book = books.map((element) => (
    <Book title={element.title} image={element.book_cover} />
  ));

  return (
    <>
      <BooksContainer>{book}</BooksContainer>
    </>
  );
};

const BookImage = styled.img`
  width: 300px;
  height: 450px;
`;

function Book(props) {
  return (
    <>
      <div>
        <BookImage src={props.image} alt={props.title} />
        <div>{props.title}</div>
      </div>
    </>
  );
}

export { Main };
