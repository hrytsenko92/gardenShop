import React from 'react';
import styled from 'styled-components';
import CardItem from '@app/components/card/CardItem';

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
const Home: React.FC = () => {
  return (
    <Container>
      <h2>Home</h2>
      <Section>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Section>
    </Container>
  );
};
export default Home;
