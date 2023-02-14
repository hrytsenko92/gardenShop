import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../assets/device';
import background from '../../../assets/s1.jpg';
import Logo from './logo/Logo';
import { colors } from '../../../assets/colors';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
`;
const Header = styled('header')`
  height: 500px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: ${colors.baseWhite};
`;
const Menu = styled('menu')`
  padding: 0px 25px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 110;
  overflow: hidden;
  @media screen and ${device.mobileS} {
    height: 130px;
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
    grid-column: 5/9;
    grid-row: 1/3;
  }
  @media ${device.tabletM} {
    grid-column: 6/9;
    grid-row: 1/3;
  }
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
`;
const Link = styled(NavLink)`
  width: 100px;
  height: 35px;
  border-radius: 3px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${colors.lightGreen};
  color: ${colors.baseWhite};
  &.active {
    color: ${colors.textGreen};
  }
`;
const Title = styled('h1')`
  text-align: center;
  font-size: 30px;
  margin: 0px 25px 25px;
`;
const SubTitle = styled('h4')`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  margin: 0px 25px;
`;
const Main = styled('main')``;

const Root = () => {
  const [scrollStyle, setScrollStyle] = useState({
    bg: {
      background: 'rgba(255, 255, 255, 0.28)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(6.5px)',
      WebkitBackdropFilter: 'blur(6.5px)',
      transition: 'all 0.3s ease-in 0s',
    },
  });
  useEffect(() => {
    window.onscroll = function () {
      window.scrollY >= 425
        ? setScrollStyle({
            bg: {
              background: 'rgba(255, 255, 255, 0.867)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(6.5px)',
              WebkitBackdropFilter: 'blur(6.5px)',
              transition: 'all 0.4s ease-in 0s',
            },
          })
        : setScrollStyle({
            bg: {
              background: 'rgba(255, 255, 255, 0.28)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(6.5px)',
              WebkitBackdropFilter: 'blur(6.5px)',
              transition: 'all 0.3s ease-in 0s',
            },
          });
    };
  }, [window.scrollY]);
  return (
    <Container>
      <Menu style={scrollStyle.bg}>
        <Logotype>
          <Logo />
        </Logotype>
        <Nav>
          <Link to="/">Головна</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/shoppingCart">Корзина</Link>
        </Nav>
      </Menu>
      <Header>
        <Title>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptate.
        </Title>
        <SubTitle>Lorem ipsum dolor sit amet, consectetur.</SubTitle>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
export default Root;
