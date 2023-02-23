import React, { useEffect, useState, createRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../store/hook';
import styled from 'styled-components';
import { device } from '../../../assets/device';
import background from '../../../assets/s1.jpg';
import Logo from './logo/Logo';
import { colorsPalette } from '../../../assets/colors';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
  background-color: ${colorsPalette.color7};
`;
const Header = styled('header')`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 25px;
  grid-template-columns: 1fr;
  @media screen and ${device.mobileS} {
    grid-template-rows: 120px 100px 75px;
  }
  @media screen and ${device.mobileM} {
    grid-template-rows: 120px 100px 100px;
  }
  color: ${colorsPalette.baseWhite};
`;

const Menu = styled('menu')`
  padding: 0px 15px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 110;
  overflow: hidden;
  @media screen and ${device.mobileS} {
    height: 120px;
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
  width: 120px;
  height: 35px;
  border-radius: 3px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  color: ${colorsPalette.color2};
  ${'svg'} {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    stroke: ${colorsPalette.color2};
  }
  &.active {
    color: ${colorsPalette.color1};
    ${'svg'} {
      stroke: ${colorsPalette.color1};
    }
  }
`;
const Title = styled('h1')`
  grid-column: 1/2;
  grid-row: 2/3;
  text-align: center;
  color: ${colorsPalette.color7};
  font-size: 25px;
  @media screen and ${device.tabletS} {
    font-size: 30px;
  }
  letter-spacing: 2px;
  margin: 0px 15px;
`;
const SubTitle = styled('h4')`
  grid-column: 1/2;
  grid-row: 3/4;
  margin: 0 auto;
  padding-bottom: 25px;
  color: ${colorsPalette.color7};
  width: 90%;
  @media screen and ${device.tabletS} {
    width: 75%;
  }
  text-align: center;
  font-size: 16px;
  font-weight: 300;
`;
const Main = styled('main')``;

const Root = () => {
  const orderList = useAppSelector((state) => state.orderList.value);
  const [scrollStyle, setScrollStyle] = useState({
    bg: {
      background: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(6.5px)',
      WebkitBackdropFilter: 'blur(6.5px)',
      transition: 'all 0.3s ease-in 0s',
    },
  });
  const refHeader = createRef<HTMLDivElement>();
  const refMenu = createRef<HTMLDivElement>();
  useEffect(() => {
    window.onscroll = function () {
      refHeader.current &&
      refMenu.current &&
      window.scrollY >=
        refHeader.current.getBoundingClientRect().height -
          refMenu.current.getBoundingClientRect().height
        ? setScrollStyle({
            bg: {
              background: '#fffffa',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(6.5px)',
              WebkitBackdropFilter: 'blur(6.5px)',
              transition: 'all 0.2s ease-in 0s',
            },
          })
        : setScrollStyle({
            bg: {
              background: 'rgba(255, 255, 255, 0.28)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(6.5px)',
              WebkitBackdropFilter: 'blur(6.5px)',
              transition: 'all 0.1s ease-in 0s',
            },
          });
    };
  }, [window.scrollY]);
  return (
    <Container>
      <Menu ref={refMenu} style={scrollStyle.bg}>
        <Logotype>
          <Logo />
        </Logotype>
        <Nav>
          <Link to="/">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 12V20H20V4H4V7M7 8H17M7 12H17M7 16H13"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Товари
          </Link>
          <Link to="/contacts">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 32"
              enableBackground="new 0 0 29 32"
              strokeWidth="1"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M1.045,27.731l13.303,4.245C14.397,31.992,14.449,32,14.5,32c0.053,0,0.106-0.009,0.157-0.025l13.312-4.407
		C28.595,27.36,29,26.803,29,26.145s-0.404-1.218-1.03-1.425l-7.733-2.56c-0.264-0.09-0.545,0.056-0.632,0.317
		c-0.087,0.263,0.055,0.545,0.317,0.632l7.733,2.56C27.975,25.775,28,26.06,28,26.145c0,0.084-0.025,0.368-0.344,0.474
		l-13.159,4.356L1.35,26.778C1.029,26.676,1.001,26.392,1,26.307c-0.001-0.084,0.021-0.368,0.339-0.478l8.028-2.753
		c0.261-0.089,0.4-0.374,0.311-0.635c-0.09-0.262-0.375-0.401-0.635-0.311l-8.028,2.753C0.392,25.097-0.007,25.659,0,26.317
		S0.417,27.53,1.045,27.731z"
                />
                <path
                  d="M15.679,0.063C9.81-0.595,4.817,3.982,4.817,9.705c0,2.24,0.729,4.23,2.355,6.442l6.31,9.121
		c0.249,0.359,0.658,0.574,1.096,0.574h0c0.441,0,0.853-0.218,1.098-0.577l4.173-5.993l2.344-3.568
		c1.655-2.094,2.361-4.718,1.988-7.388C23.581,4.022,20.005,0.551,15.679,0.063z M21.382,15.12l-2.362,3.592l-4.168,5.986
		c-0.089,0.13-0.222,0.145-0.274,0.145s-0.185-0.014-0.274-0.143l-6.318-9.133c-1.5-2.041-2.169-3.85-2.169-5.862
		C5.817,4.905,9.734,1,14.548,1c0.335,0,0.675,0.019,1.018,0.058c3.88,0.437,7.086,3.548,7.624,7.397
		C23.525,10.852,22.892,13.206,21.382,15.12z"
                />
                <path
                  d="M14.497,4.705c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S17.253,4.705,14.497,4.705z M14.497,13.705
		c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S16.702,13.705,14.497,13.705z"
                />
              </g>
            </svg>
            Контакти
          </Link>
          <Link to="/shoppingCart">
            {orderList.length > 0 ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.01 16.136L4.141 4H3a1 1 0 0 1 0-2h1.985a.993.993 0 0 1 .66.235.997.997 0 0 1 .346.627L6.319 5H14v2H6.627l1.23 8h9.399l1.5-5h2.088l-1.886 6.287A1 1 0 0 1 18 17H7.016a.993.993 0 0 1-.675-.248.999.999 0 0 1-.332-.616zM10 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0-18a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V6h-1a1 1 0 1 1 0-2h1V3a1 1 0 0 1 1-1z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.153 4L6.01 15.146a.993.993 0 0 0 .327.603.997.997 0 0 0 .679.251H18a1 1 0 0 0 .949-.684l3-9A1 1 0 0 0 21 5H6.347L5.99 2.85a.993.993 0 0 0-.357-.625A.998.998 0 0 0 4.984 2H3a1 1 0 0 0 0 2h1.153zm3.694 10L6.68 7h12.933l-2.334 7H7.847zM10 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
            )}
            Корзина
          </Link>
        </Nav>
      </Menu>
      <Header ref={refHeader}>
        <Title>Зробіть свій сад кращим разом з Екосад</Title>
        <SubTitle>
          Ми пропонуємо широкий вибір саджанців дерев та кущів високої якості. При оптових
          замовленнях діє додаткова знижка. Мінімальна сума замовлення на сайті - 200грн.
        </SubTitle>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
export default Root;
