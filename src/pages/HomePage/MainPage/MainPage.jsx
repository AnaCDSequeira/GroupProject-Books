import styled from "styled-components";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const BooksContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
`;

const Main = (props) => {
    const { books, setBooks } = props;

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
        <Book
            key={element.id}
            title={element.title}
            image={element.book_cover}
            id={element.id}
        />
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
    const navigate = useNavigate();
    return (
        <>
            <div key={props.title}>
                <BookImage onClick={() => navigate(`book/${props.id}`)} src={props.image} alt={props.title} />
                <div>{props.title}</div>
            </div>
        </>
    );
}

export { Main };
