import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from '@app/components/card/CardItem';
import { allData } from '../../../data/seedlings/allData';
import { device, DeviceType } from '../../../assets/device';
import { colors } from '../../../assets/colors';

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and ${device.tabletM} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
const ButtonSelect = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  border: 1.5px solid rgba(40, 90, 67, 1);
  color: ${colors.textGreen};
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
`;

const Home: React.FC = () => {
  const [all, setAll] = useState(true);
  const [roses, setRoses] = useState(true);
  const [berries, setBerries] = useState(true);
  const [fruitful, setFruitful] = useState(true);
  const [decorativeBushes, setDecorativeBushes] = useState(true);
  const [conifers, setComifers] = useState(true);

  console.log(allData);
  const selectAll = () => {
    setAll(true),
      setRoses(true),
      setBerries(true),
      setFruitful(true),
      setDecorativeBushes(true),
      setComifers(true);
  };
  const selectRoses = () => {
    setAll(false),
      setRoses(true),
      setBerries(false),
      setFruitful(false),
      setDecorativeBushes(false),
      setComifers(false);
  };
  const selectBerries = () => {
    setAll(false),
      setRoses(false),
      setBerries(true),
      setFruitful(false),
      setDecorativeBushes(false),
      setComifers(false);
  };
  const selectFruitful = () => {
    setAll(false),
      setRoses(false),
      setBerries(false),
      setFruitful(true),
      setDecorativeBushes(false),
      setComifers(false);
  };
  const selectDecorativeBushes = () => {
    setAll(false),
      setRoses(false),
      setBerries(false),
      setFruitful(false),
      setDecorativeBushes(true),
      setComifers(false);
  };
  const selectComifers = () => {
    setAll(false),
      setRoses(false),
      setBerries(false),
      setFruitful(false),
      setDecorativeBushes(false),
      setComifers(true);
  };
  const buttonStyle = {
    backgroundColor: `${colors.lightGreen}`,
    border: 'none',
  };

  return (
    <Container>
      <ButtonWrapper>
        <ButtonSelect
          style={all ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={selectAll}
        >
          Всі види
        </ButtonSelect>
        <ButtonSelect
          style={roses ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={selectRoses}
        >
          Троянди
        </ButtonSelect>
        <ButtonSelect
          style={berries ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={selectBerries}
        >
          Ягідні культури
        </ButtonSelect>
        <ButtonSelect
          style={fruitful ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={selectFruitful}
        >
          Плодові дерева
        </ButtonSelect>
        <ButtonSelect
          style={decorativeBushes ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={selectDecorativeBushes}
        >
          Декоративні кущі
        </ButtonSelect>
        <ButtonSelect
          style={conifers ? buttonStyle : { backgroundColor: 'transparent' }}
          onClick={selectComifers}
        >
          Хвойні рослини
        </ButtonSelect>
      </ButtonWrapper>
      <Section>
        {roses ? <CardItem /> : null}
        {berries ? <CardItem /> : null}
        {fruitful ? <CardItem /> : null}
        {decorativeBushes ? <CardItem /> : null}
        {conifers ? <CardItem /> : null}
      </Section>
    </Container>
  );
};
export default Home;
