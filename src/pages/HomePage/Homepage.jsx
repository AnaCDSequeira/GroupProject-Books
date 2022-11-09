import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const BooksContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 70px;
  padding-top: 100px;
  margin-left: 150px;
  margin-right: 150px;
  align-items: center;
  cursor: pointer;
`;

const HomePage = (props) => {
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
      auhtor={element.description}
      id={element.id}
    />
  ));

  return (
    <>
      <BookShelf book={books} />
      <BooksContainer>{book}</BooksContainer>
    </>
  );
};

const BookShelfContainer = styled.div`
  width: 100px;
  margin: 2rem auto;
  margin-top: 160px;
  text-align: center;
  position: relative;
`;

const BookGrid = styled.div`
  z-index: 2;
  position: relative;
  transform: translateY(-15px);
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const Li = styled.li`
  justify-self: center;
`;

const Image = styled.img`
  display: block;
  box-shadow: 0px -5px 20px 2px rgba(black, 0.3);
  width: 200px;
  height: 200px;
  object-fit: cover;
  background-color: aquamarine;
`;

const Shelf = styled.div`
  position: relative;
  width: 90%;
  border-bottom: 13px solid #eabc91;
  text-align: center;
  padding: 0 27px;
  margin: 20px auto;
  background: transparent;

  &:after {
    position: absolute;
    bottom: -13px;
    left: 34px;
    height: 10px;
    background: transparent;
    content: "";
    -webkit-transform: perspective(150) rotateX(-25deg);
    -moz-transform: perspective(150) rotateX(-25deg);
    -ms-transform: perspective(150) rotateX(-25deg);
    transform: perspective(150) rotateX(-25deg);
    right: 34px;
    box-shadow: 0 0 17px 5px rgba(36, 33, 33, 0.7);
    z-index: -1;
  }
`;

const TitlesDiv = styled.div`
  margin-right: 40px;
`;

const Title1 = styled.h1`
  font-size: 45px;
  text-transform: uppercase;
  border-bottom: 2px solid;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: #0b0a28;
  letter-spacing: 4.5px;
`;

const Title2 = styled.h3`
  color: #0a0853;
  font-size: 20px;
  letter-spacing: 2px;
`;

const ImageBanner = styled.img`
  width: 350px;
  height: 500px;
`;

function BookShelf(props) {
  const { book } = props;
  console.log(book);

  let bookMap = book.map((element) => element.book_cover);
  console.log(bookMap.length);

  return (
    <>
      <BookShelfContainer>
        <BookGrid>
          <Ul>
            <Li>
              <TitlesDiv>
                <Title1>Come out of the shadow(ing)</Title1>
                <Title2>Explore the interview world</Title2>
              </TitlesDiv>
            </Li>
            <Li>
              <ImageBanner src={bookMap[11]} alt="" />
            </Li>
            <Li>
              <ImageBanner src={bookMap[18]} alt="" />
            </Li>
            <Li>
              <ImageBanner src={bookMap[19]} alt="" />
            </Li>
          </Ul>
        </BookGrid>
      </BookShelfContainer>
      <Shelf />
    </>
  );
}

const BookImage = styled.img`
  width: 350px;
  height: 500px;
  box-shadow: 0 0 20px 5px rgba(169, 154, 138, 0.7);
`;

const BookDiv = styled.div`
  width: 300px;
  padding: 10px;
  gap: 20px;
`;

const BookTitle = styled.div`
  color: #383737;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const BookAuthor = styled.div`
  color: #595555;
  font-size: 12px;
`;

function Book(props) {
  const navigate = useNavigate();
  return (
    <>
      <BookDiv key={props.title}>
        <BookImage
          onClick={() => navigate(`book/${props.id}`)}
          src={props.image}
          alt={props.title}
        />
        <BookTitle>{props.title}</BookTitle>
        <BookAuthor>{props.auhtor}</BookAuthor>
      </BookDiv>
    </>
  );
}

export { HomePage };
