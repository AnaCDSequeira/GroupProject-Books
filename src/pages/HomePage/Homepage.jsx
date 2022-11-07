import { Header } from "./MainPage/Header.jsx";
import { Main } from "./MainPage/MainPage.jsx";

const HomePage = (props) => {
  const { loggedIn, books, setBooks } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main books={books} setBooks={setBooks} />
    </>
  );
};

export { HomePage };
