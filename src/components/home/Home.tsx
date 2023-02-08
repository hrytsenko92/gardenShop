import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from '@app/components/card/CardItem';
import { device, DeviceType } from '../../../assets/device';

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* gap: 25px; */
`;
const Section = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto;
  gap: 25px;
  @media screen and ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media screen and ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and ${device.tabletM} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const ButtonWrapper = styled.div`
  margin: 25px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media screen and ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and ${device.mobileM} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and ${device.tabletS} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
const ButtonSelect = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  border: 1.5px solid rgba(40, 90, 67, 1);
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
`;

const Home: React.FC = () => {
  const [all, setAll] = useState(true);
  const [roses, setRoses] = useState(true);
  const [apple, setApple] = useState(true);
  const [fruitful, setFruitful] = useState(true);
  const [decorativeBushes, setDecorativeBushes] = useState(true);
  const [conifers, setComifers] = useState(true);

  const selectAll = () => {
    setAll(true),
      setRoses(true),
      setApple(true),
      setFruitful(true),
      setDecorativeBushes(true),
      setComifers(true);
  };
  const selectRoses = () => {
    setAll(false),
      setRoses(true),
      setApple(false),
      setFruitful(false),
      setDecorativeBushes(false),
      setComifers(false);
  };
  const selectApple = () => {
    setAll(false),
      setRoses(false),
      setApple(true),
      setFruitful(false),
      setDecorativeBushes(false),
      setComifers(false);
  };
  const selectFruitful = () => {
    setAll(false),
      setRoses(false),
      setApple(false),
      setFruitful(true),
      setDecorativeBushes(false),
      setComifers(false);
  };
  const selectDecorativeBushes = () => {
    setAll(false),
      setRoses(false),
      setApple(false),
      setFruitful(false),
      setDecorativeBushes(true),
      setComifers(false);
  };
  const selectComifers = () => {
    setAll(false),
      setRoses(false),
      setApple(false),
      setFruitful(false),
      setDecorativeBushes(false),
      setComifers(true);
  };

  return (
    <Container>
      <ButtonWrapper>
        <ButtonSelect onClick={selectAll}>Всі види</ButtonSelect>
        <ButtonSelect onClick={selectRoses}>Троянди</ButtonSelect>
        <ButtonSelect onClick={selectApple}>Ягідні культури</ButtonSelect>
        <ButtonSelect onClick={selectFruitful}>Плодові дерева</ButtonSelect>
        <ButtonSelect onClick={selectDecorativeBushes}>Декоративні кущі</ButtonSelect>
        <ButtonSelect onClick={selectComifers}>Хвойні рослини</ButtonSelect>
      </ButtonWrapper>
      <Section>
        {roses ? <CardItem /> : null}
        {apple ? <CardItem /> : null}
        {fruitful ? <CardItem /> : null}
        {decorativeBushes ? <CardItem /> : null}
        {conifers ? <CardItem /> : null}
        {/* <CardItem />
        <CardItem />
        <CardItem /> */}
      </Section>
    </Container>
  );
};
export default Home;
