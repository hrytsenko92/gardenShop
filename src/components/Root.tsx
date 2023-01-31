import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import background from "../../assets/sushobhan-badhai-LrPKL7jOldI-unsplash.jpg"

const Container = styled.div`
  background-color: cadetblue;
  //height: 100vh;
`
const Header = styled("header")`
  height: 300px;
  background-color: bisque;
  background-image: url(${background});
  background-size: cover;
  width: 100%;
`
const Menu = styled("menu")`
  background-color: aquamarine;
  display: grid;
  grid-template-columns: 3fr 3fr 4fr;
  grid-template-rows: 1fr;
  align-items: center;
`
const Logo = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
`
const Nav = styled("nav")`
  grid-column: 3/4;
  grid-row: 1/2;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
`
const Main = styled("main")`
  height: 100%;
`
const Root = () => {
    return (
          <Container>
            <Header>
              <Menu>
                <Logo>Logo</Logo>
                <Nav>
                  <NavLink to="/" >Головна</NavLink>
                  <NavLink to="/contacts" >Контакти</NavLink>
                  <NavLink to="/other" >Додатково</NavLink>
                  <NavLink to="/shoppingCart" >Корзина</NavLink>
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