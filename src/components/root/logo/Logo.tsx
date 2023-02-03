import React from 'react';
import styled from 'styled-components';
import gardenLogo from './gardenLogo.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  color: white;
`;
const LogoSvgWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-self: center;
`;
const LogoSvg = styled(gardenLogo)`
  min-width: 40px;
  min-height: 40px;
`;
const LogoTitle = styled('h3')`
  white-space: nowrap;
`;
const Logo: React.FC = () => {
  return (
    <Container>
      <LogoSvgWrapper>
        <LogoSvg />
      </LogoSvgWrapper>
      <LogoTitle>Сокирянські сади</LogoTitle>
    </Container>
  );
};
export default Logo;
