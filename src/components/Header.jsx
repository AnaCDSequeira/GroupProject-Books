import styled from "styled-components";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Roboto", sans-serif;
    height: 230px;
    background: rgb(253, 246, 233);
    background: linear-gradient(
        0deg,
        rgba(253, 246, 233, 1) 11%,
        rgba(53, 134, 255, 1) 100%
    );
    color: #1e1b1b;
    width: 100%;
`;

const DivMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    margin-right: 30px;
    margin-top: -50px;
`;
const DivTitle = styled.div`
    margin-left: 30px;
    margin-top: -50px;
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: white;
    border-radius: 25px;
    padding: 10px;
    &:hover {
        transform: scale(1.1);
        background-color: #3586ff;
    }
`;

const Header = (props) => {
    const { loggedIn } = props;
    const isLogged = loggedIn.isLoggedIn;
    const location = useLocation();

    return (
        <header>
            <NavBar>
                <DivTitle>
                    <img src={Logo} alt="" />
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
                    {isLogged ? (
                        <img
                            src={localStorage.profile_picture}
                            alt="No Image Avaiable"
                            width="50px"
                            style={{ borderRadius: "45px" }}
                        />
                    ) : null}
                </DivMenu>
            </NavBar>
        </header>
    );
};

export { Header };
