import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80");
  color: white;
  width: 100%;
  box-shadow: 0 .3rem 1rem rgba(0,0,0,.1);
  box-sizing: border-box;
  border-bottom: 1px solid #fff;
`;
const DivMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  margin-right: 50px;
  font-size: 15px;
`;

const Buttons = styled.a`
  text-decoration: none;
  color:white;
  height: 25px;
  width: 80px;
  text-align: center;
  padding-top: 4px;

  &:hover {
    color:white;
    border:1px solid #fff;
    border-radius: 6px;
  }
`;

const DivTitle = styled.div`
  margin-left: 30px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Banner = styled.div`
background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80");
/* opacity: 0.9; */
width: 100%;
height: 300px;
background-size: cover;
background-position: center;
margin-bottom: 100px;
`;

const BannerSlogan = styled.div`
color:white;
font-size: 25px;
padding-top: 80px;
text-align: center;
border-bottom: 2px solid white;
margin: auto;
width: 50%;
height:100px ;
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
          <h1>Book|Store</h1>
        </DivTitle>
        <DivMenu>
          <Buttons
            href="#"
            onClick={() => handleClick(isLogged ? "Profile" : "Login")}
          >
            {isLogged ? "Profile" : "Login"}
          </Buttons>
          <Buttons
            href="#"
            onClick={() => handleClick(isLogged ? "LogOut" : "Register")}
          >
            {isLogged ? "Log Out" : "Register"}
          </Buttons>
        </DivMenu>
      </NavBar>
      <Banner>
        <BannerSlogan>
          <h2>Invest in your s(h)elf for yourself</h2>
        </BannerSlogan>
      </Banner>
    </header>
  );
};

export { Header };
