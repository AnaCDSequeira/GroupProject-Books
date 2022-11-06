import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: bisque;
  color: Brown;
  margin-bottom: 30px;
  width: 100%;
`;
const DivMenu = styled.div`
  display: flex;
  justify-contente: flex-end;
  gap: 40px;
  margin-right: 30px;
`;
const DivTitle = styled.div`
  margin-left: 30px;
`;

const Header = (props) => {
  const { loggedIn } = props;

  const isLogged = loggedIn.isLoggedIn;

  const navigate = useNavigate();
  function handleClick(path) {
    const direct = () => navigate(path);
    direct();
  }

  return (
    <header>
      <NavBar>
        <DivTitle>
          <h1>BookStore</h1>
        </DivTitle>
        <DivMenu>
          <a
            href="#"
            onClick={() => handleClick(isLogged ? "Profile" : "Login")}
          >
            {isLogged ? "Profile" : "Login"}
          </a>
          <a
            href="#"
            onClick={() => handleClick(isLogged ? "LogOut" : "Register")}
          >
            {isLogged ? "Log Out" : "Register"}
          </a>
        </DivMenu>
      </NavBar>
    </header>
  );
};

export { Header };
