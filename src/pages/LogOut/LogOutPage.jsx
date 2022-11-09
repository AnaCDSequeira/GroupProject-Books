import End from "../../assets/TheEnd.png";
import Book from "../../assets/Book.png";
import styled from "styled-components";

const BookContainer = styled.div`
  display: inline-block;
  justify-content: center;
  width: 100%;
`;

const ImageTheEnd = styled.img`
  position: absolute;
  top: 330px;
  right: 680px;
  width: 20%;
`;

const ImageBook = styled.img`
  width: 30%;
  margin-left: 650px;
`;

const LogOutTitle = styled.h3`
  position: absolute;
  left: 740px;
  bottom: 540px;
  text-align: center;
`;

function LogOutPage(props) {
  const { setLoggedIn } = props;

  setLoggedIn(false);
  localStorage.clear();
  localStorage.clear();

  return (
    <>
      <BookContainer>
        <ImageTheEnd src={End} alt="TheEnd" />
        <ImageBook src={Book} alt="Book" />
        <LogOutTitle>
          Came back any <br />
          time soon! ❤️
        </LogOutTitle>
      </BookContainer>
    </>
  );
}

export { LogOutPage };
