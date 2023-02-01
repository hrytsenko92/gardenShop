import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../assets/device";
import background from "../../../assets/s1.jpg"
import Logo from "./logo/Logo"

const Container = styled.div`
  background-color: cadetblue;
  height: 100vh;
`
const Header = styled("header")`
  position: relative;
  max-height: 500px;
  min-height: 300px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const Menu = styled("menu")`
  position: absolute;
  top: 50px;
  left: 0px;
  margin: 0px 5%;
  width: 90%;
  z-index: 110;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  
  @media screen and ${device.mobileS} {
    height: 100px;
  }
  
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
const Logotype = styled.div`
  @media ${device.mobileS} {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
`
const Nav = styled("nav")`
  @media ${device.mobileS} {
    grid-column: 1/-1;
    grid-row: 2/3;
  }
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
`
const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover,
  &:focus{
    text-decoration: underline;
  }
  &:active{
    //color: red;
  };
`
  // &:hover, &:visited, &:focus, &:active
const Main = styled("main")`
  height: 100%;
`
const Root = () => {
    return (
          <Container>
            <Header>
              {/*<MenuBackground/>*/}
              <Menu>
                <Logotype>
                  <Logo/>
                </Logotype>
                <Nav>
                  <Link to="/" >Головна</Link>
                  <Link to="/contacts" >Контакти</Link>
                  <Link to="/shoppingCart" >Корзина</Link>
                </Nav>
              </Menu>
            </Header>
            <main>
                <Outlet/>
            </main>
          </Container>
    )
}
export default Root