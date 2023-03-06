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
  gap: 25px;
  padding: 25px;
`;
const ButtonsWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 15px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media ${device.tabletM} {
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
  border: 1px solid red;
`;
const HowToPlant: React.FC = () => {
  const [data, setData] = useState<Item>(Details[0]);
  const [isActiveBTN, setIsActiveBTN] = useState<number>(1);
  const changeIsActive = (n: number) => setIsActiveBTN(n);
  const buttonStyle = {
    backgroundColor: `${colorsPalette.color3}`,
    border: 'none',
  };
  useEffect(() => {
    setData(Details[0]);
  }, []);
  return (
    <Container>
      <ButtonsWrapper>
        <Button
          style={isActiveBTN === 1 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(1)}
        >
          Плодові
        </Button>
        <Button
          style={isActiveBTN === 2 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(2)}
        >
          Персики
        </Button>
        <Button
          style={isActiveBTN === 3 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(3)}
        >
          Декоративні
        </Button>
        <Button
          style={isActiveBTN === 4 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(4)}
        >
          Ягідні
        </Button>
        <Button
          style={isActiveBTN === 5 ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={() => changeIsActive(5)}
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
