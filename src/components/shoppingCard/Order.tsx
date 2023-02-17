import React, { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { device } from '../../../assets/device';
import { colors } from '../../../assets/colors';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const OrderForm = styled.form`
  @media ${device.mobileS} {
    width: 95%;
  }
  @media ${device.mobileM} {
    width: 85%;
  }
  @media ${device.tabletS} {
    width: 80%;
  }
  @media ${device.tabletM} {
    width: 70%;
  }
  max-width: 700px;
  margin: 15px;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${colors.cardBG};
  border-radius: 7px;
  overflow: hidden;
  color: ${colors.textGreen};
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;
const BoxLabel = styled.label``;
const BoxInput = styled.input`
  height: 100%;
  padding: 0px 10px;
`;
const BoxTextArea = styled.textarea`
  height: 100%;
  padding: 10px;
  resize: none;
`;
const BoxSubmit = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const Submit = styled.input`
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 3px;
  background-color: ${colors.lightGreen};
  color: ${colors.baseWhite};
`;

const Order: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formRef);
    // emailjs.send('service_8yynih2', 'template_ng2ge9d', formRef.current).then(
    //   function (response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   },
    //   function (error) {
    //     console.log('FAILED...', error);
    //   },
    // );
  };

  return (
    <Container>
      <OrderForm ref={formRef} onSubmit={sendEmail}>
        <Box>
          <BoxLabel>Ім'я:</BoxLabel>
          <BoxInput type="text" name="user_name" />
        </Box>
        <Box>
          <BoxLabel>Номер телефону:</BoxLabel>
          <BoxInput type="tel" name="user_telephone" />
        </Box>
        <Box>
          <BoxLabel>Адреса доставки:</BoxLabel>
          <BoxTextArea name="message" />
        </Box>
        <BoxSubmit>
          <Submit type="submit" value="Замовити" />
        </BoxSubmit>
      </OrderForm>
    </Container>
  );
};
export default Order;

{
  /* <TotalPriceButton onClick={sendEmail}>press</TotalPriceButton> */
}
