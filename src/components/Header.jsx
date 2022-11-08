import styled from "styled-components";
import { useNavigate, Link, useLocation } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  height: 150px;
  background-color: #89ace4;
  color: white;
  margin-bottom: 30px;
  width: 100%;
`;
const DivMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  margin-right: 30px;
`;
const DivTitle = styled.div`
  margin-left: 30px;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = (props) => {
  const { loggedIn } = props;
  const isLogged = loggedIn.isLoggedIn;

  const location = useLocation();
  console.log(location.pathname);

  return (
    <header>
      <NavBar>
        <DivTitle>
          <h1>BookStore</h1>
        </DivTitle>
        <DivMenu>
          {location.pathname !== "/" ? (
            <HeaderLink to="/">Home Page</HeaderLink>
          ) : null}

          {location.pathname === "/profile" ||
          location.pathname === "/login" ? null : (
            <HeaderLink to={isLogged ? "profile" : "login"}>
              {isLogged ? "Profile" : "Login"}
            </HeaderLink>
          )}

          {location.pathname === "/register" ? null : (
            <HeaderLink to={isLogged ? "logout" : "register"}>
              {isLogged ? "Log Out" : "Register"}
            </HeaderLink>
          )}
        </DivMenu>
      </NavBar>
    </header>
  );
};

export { Header };
