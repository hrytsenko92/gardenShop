import React, { useEffect, useState } from 'react';
import HowToItem from './HowToItem';
import { Details, Item } from '../../../public/data/howTo/howTo';
import { device } from '../../../assets/device';
import { colorsPalette } from '../../../assets/colors';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-content: center;
  width: 100%;
  gap: 25px;
  padding: 25px;
`;
const ButtonsWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  height: 100%;
  display: grid;
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  gap: 15px;
  @media ${device.mobileS} {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media ${device.tabletS} {
    width: 95%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media ${device.tabletM} {
    width: 85%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  border: 1.5px solid ${colorsPalette.color1};
  color: ${colorsPalette.color1};
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
`;
const Wiev = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  width: 100%;
  height: 100%;
`;
const HowToPlant: React.FC = () => {
  const [data, setData] = useState<Item>(Details[0]);
  const [isActiveBTN, setIsActiveBTN] = useState<number>(0);
  const changeIsActive = (n: number) => setIsActiveBTN(n);
  const buttonStyle = {
    backgroundColor: `${colorsPalette.color3}`,
    border: 'none',
  };
  useEffect(() => {
    const changeData = () => {
      setData(Details[isActiveBTN]);
    };
    changeData();
  }, [isActiveBTN]);
  return (
    <Container>
      <ButtonsWrapper>
        <Button
          style={isActiveBTN === 0 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(0)}
        >
          Плодові
        </Button>
        <Button
          style={isActiveBTN === 1 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(1)}
        >
          Персики
        </Button>
        <Button
          style={isActiveBTN === 2 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(2)}
        >
          Декоративні
        </Button>
        <Button
          style={isActiveBTN === 3 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(3)}
        >
          Ягідні
        </Button>
        <Button
          style={isActiveBTN === 4 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(4)}
        >
          Троянди
        </Button>
      </ButtonsWrapper>
      <Wiev>
        <HowToItem data={data} />
      </Wiev>
    </Container>
  );
};
export default HowToPlant;
