import React from 'react';
import ContactsMap from './ContactsMap';
import styled from 'styled-components';
import { colors, colorsPalette } from '../../../assets/colors';
import { device } from '../../../assets/device';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2.3fr;
  color: ${colorsPalette.color1};
`;
const ContactsWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
`;
const ContactContainer = styled.div`
  width: 85%;
  padding: 15px;
  border-radius: 7px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  background-color: ${colors.cardBG};
`;
const ContactTitle = styled.h2``;
const ContactName = styled.h3``;
const ContactAdress = styled.p``;
const PhoneAndEmail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  @media screen and ${device.mobileS} {
    flex-flow: column nowrap;
  }
  @media screen and ${device.mobileM} {
    flex-flow: row nowrap;
  }
`;
const ContactPhone = styled.a`
  text-decoration: none;
`;
const ContactEmail = styled.a`
  text-decoration: none;
`;

const MapWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: start;
  box-shadow: 10px;
`;
const MapContainer = styled.div`
  width: 85%;
  height: 400px;
  border-radius: 7px;
  overflow: hidden;
`;

const Contacts: React.FC = () => {
  return (
    <Container>
      <ContactsWrapper>
        <ContactContainer>
          <ContactTitle>Мої контактні дані:</ContactTitle>
          <ContactName>Елла Андронік</ContactName>
          <ContactAdress>Чернівецька область, Дністровський район, село Вашківці </ContactAdress>
          <PhoneAndEmail>
            <ContactPhone href="tel:0986030808">+38-098-603-08-08</ContactPhone>
            <ContactEmail href="mailto:ella0986030880@gmail.com">
              ella0986030880@gmail.com
            </ContactEmail>
          </PhoneAndEmail>
        </ContactContainer>
      </ContactsWrapper>
      <MapWrapper>
        <MapContainer>
          <ContactsMap />
        </MapContainer>
      </MapWrapper>
    </Container>
  );
};
export default Contacts;
