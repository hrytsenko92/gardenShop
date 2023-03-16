import React from 'react';
import styled from 'styled-components';
import { device } from '../../../assets/device';
import { colorsPalette } from '../../../assets/colors';

interface PopupProps {
  title: string;
  text: string;
  onClose: () => void;
}

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  position: relative;
  @media ${device.mobileS} {
    width: 300px;
    height: auto;
  }
  @media ${device.mobileM} {
    width: 450px;
    height: auto;
  }
  @media ${device.tabletS} {
    width: 600px;
    height: auto;
  }
  background-color: ${colorsPalette.cardBG};
  padding: 25px;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 25px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  grid-column: 1/2;
  grid-row: 1/2;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  grid-column: 1/2;
  grid-row: 2/3;
`;

const CloseButton = styled.button`
  width: 50px;
  height: 35px;
  border-radius: 7px;
  font-size: 20px;
  background-color: ${colorsPalette.color2};
  color: ${colorsPalette.color7};
  border: none;
  cursor: pointer;
`;

const Popup: React.FC<PopupProps> = ({ title, text, onClose }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <CloseButton onClick={onClose}>OK</CloseButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
