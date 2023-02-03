import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../assets/device';
import background from '../../../assets/s1.jpg';
import Logo from './logo/Logo';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background-color: cadetblue;
  //height: 100vh;
  //height: auto;
  height: 100%;
`;
const Header = styled('header')`
  position: relative;
  //height: 100%; // ???
  height: 50vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const Menu = styled('menu')`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 110;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  @media screen and ${device.mobileS} {
    height: 100px;
  }
  @media screen and ${device.tabletS} {
    height: 75px;
  }
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const Logotype = styled.div`
  @media ${device.mobileS} {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
  @media ${device.tabletS} {
    grid-column: 1/4;
    grid-row: 1/3;
  }
  @media ${device.tabletM} {
    grid-column: 1/3;
    grid-row: 1/3;
  }
`;
const Nav = styled('nav')`
  @media ${device.mobileS} {
    grid-column: 1/-1;
    grid-row: 2/3;
  }
  @media ${device.mobileM} {
    grid-column: 2/-2;
    grid-row: 2/3;
  }
  @media ${device.tabletS} {
    grid-column: 6/9;
    grid-row: 1/3;
  }
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Title = styled('h1')`
  color: white;
  text-align: center;
  font-size: 30px;
  margin: 0px 25px 25px;
`;
const SubTitle = styled('h4')`
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  margin: 0px 25px;
`;
const Main = styled('main')`
  //height: 1000px;
`;

const Root = () => {
  return (
    <Container>
      <Header>
        <Menu>
          <Logotype>
            <Logo />
          </Logotype>
          <Nav>
            <Link to="/">Головна</Link>
            <Link to="/contacts">Контакти</Link>
            <Link to="/shoppingCart">Корзина</Link>
          </Nav>
        </Menu>
        <Title>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptate.</Title>
        <SubTitle>Lorem ipsum dolor sit amet, consectetur.</SubTitle>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <h4>Footer</h4>
    </Container>
  );
};
export default Root;
