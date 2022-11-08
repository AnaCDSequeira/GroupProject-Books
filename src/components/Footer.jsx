import React from "react";
import styled from "styled-components";

const DivFooter = styled.div`
  font-family: "Roboto", sans-serif;
  margin-top: 30px;
  bottom: 0;
  width: 100%;
`;

const FooterContainer = styled.footer`
  font-size: 12px;
  height: 150px;
  background-color: #89ace4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 60px;
  color: white;
`;

const ListIcon = styled.li`
  font-size: 30px;
  list-style: none;
  a {
    color: white;
  }
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 20px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const P = styled.p`
  color: white;
`;

const Footer = () => {
  return (
    <DivFooter>
      <FooterContainer>
        <ListContainer className="social-icon">
          <ListIcon className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </ListIcon>
          <ListIcon className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </ListIcon>
          <ListIcon className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </ListIcon>
          <ListIcon className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </ListIcon>
        </ListContainer>
        <ListContainer className="menu">
          <ListItem className="menu__item">
            <a className="menu__link" href="#">
              Home
            </a>
          </ListItem>
          <ListItem className="menu__item">
            <a className="menu__link" href="#">
              About
            </a>
          </ListItem>
          <ListItem className="menu__item">
            <a className="menu__link" href="#">
              Services
            </a>
          </ListItem>
          <ListItem className="menu__item">
            <a className="menu__link" href="#">
              Team
            </a>
          </ListItem>
          <ListItem className="menu__item">
            <a className="menu__link" href="#">
              Contact
            </a>
          </ListItem>
        </ListContainer>
        <P>&copy; | All Rights Reserved</P>
      </FooterContainer>
    </DivFooter>
  );
};

export { Footer };
