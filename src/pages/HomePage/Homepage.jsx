import { Header } from "./MainPage/Header.jsx";
import { Main } from "./MainPage/MainPage.jsx";

const HomePage = (props) => {
  const { loggedIn, setLoggedIn } = props;

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Main />
    </>
  );
};

export { HomePage };
