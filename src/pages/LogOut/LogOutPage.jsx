import { useNavigate } from "react-router-dom";

function LogOutPage(props) {
  const { loggedIn, setLoggedIn } = props;
  setLoggedIn(false);
  console.log(loggedIn);

  const navigate = useNavigate();
  function handleClickLogin() {
    const direct = () => navigate("/login");
    direct();
  }

  function handleClickHomePage() {
    const direct = () => navigate("/");
    direct();
  }

  return (
    <>
      <h3>Came back any time soon! Have a nice day ❤️</h3>
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleClickHomePage}>HomePage</button>
    </>
  );
}

export { LogOutPage };
