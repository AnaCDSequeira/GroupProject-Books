import { Header } from "./MainPage/Header.jsx";
import { Main } from "./MainPage/Mainpage.jsx";

const HomePage = (props) => {
  const { loggedIn } = props;

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main />
    </>
  );
};

export { HomePage };
