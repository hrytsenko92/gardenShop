import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 320px; // responsive
  height: 420px; // ?responsive
  background-color: #ffb884;
`;
const CardItem: React.FC = () => {
  return <Container>CardItem</Container>;
};
export default CardItem;
