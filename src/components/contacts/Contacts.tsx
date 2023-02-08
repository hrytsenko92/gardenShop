import React from 'react';
import ContactsMap from './ContactsMap';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
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
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 7px;
`;
const ContactTitle = styled.h2``;
const ContactName = styled.h3``;
const ContactAdress = styled.p``;
const PhoneAndEmail = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;
const ContactPhone = styled.a``;
const ContactEmail = styled.a``;

const MapWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: 10px;
`;
const MapContainer = styled.div`
  width: 80%;
  height: 400px;
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
            <ContactEmail href="mailto:ellabrown913@yahoo.com">ellabrown913@yahoo.com</ContactEmail>
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
