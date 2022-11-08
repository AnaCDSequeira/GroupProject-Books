import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

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
    justify-content: flex-end;
    gap: 40px;
    margin-right: 30px;
`;
const DivTitle = styled.div`
    margin-left: 30px;
`;

const Header = (props) => {

    const { loggedIn } = props;
    const isLogged = loggedIn.isLoggedIn;

    return (
        <header>
            <NavBar>
                <DivTitle>
                    <h1>BookStore</h1>
                </DivTitle>
                <DivMenu>
                    <Link to={isLogged ? "profile" : "login"}>
                        {isLogged ? "Profile" : "Login"}
                    </Link>
                    <Link to={isLogged ? "logout" : "register"}>
                        {isLogged ? "Log Out" : "Register"}
                    </Link>
                </DivMenu>
            </NavBar>
        </header>
    );
};

export { Header };
