import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { remove, itemType } from '../../../store/orderSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { device } from '../../../assets/device';
import { colors } from '../../../assets/colors';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
`;
const EmptyCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;
const EmptyCardText = styled.h3``;

const CardWrapper = styled.div`
  @media ${device.mobileS} {
    width: 95%;
  }
  @media ${device.mobileM} {
    width: 85%;
  }
  @media ${device.tabletS} {
    width: 75%;
  }
  @media ${device.tabletM} {
    width: 70%;
  }
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background-color: ${colors.cardBG};
  border-radius: 7px;
  overflow: hidden;
  color: ${colors.textGreen};
`;
const ItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;
const Item = styled.div`
  font-size: 13px;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr 0.5fr;
  grid-template-rows: 1fr;
  justify-content: center;
  justify-items: start;
  align-items: center;
  border-radius: 7px;
  overflow: hidden;
  background-color: ${colors.itemBG};
`;
const ItemName = styled.div``;
const ItemSum = styled.div``;
const ItemTotalPrice = styled.div``;
const ItemRemove = styled.div`
  justify-self: end;
`;
const ItemRemoveBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${'svg'} {
    width: 25px;
    height: 25px;
  }
`;

const BoxForm = styled.form`
  width: 100%;
  height: 250px;
  margin: 10px 0px 0px;
  background-color: ${colors.cardBG};
  border-radius: 7px;
  overflow: hidden;
  color: ${colors.textGreen};
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 2fr 1fr;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
const BoxLabel = styled.label`
  width: 100%;
`;
const BoxInput = styled.input`
  width: 100%;
`;
const BoxName = styled.div`
  @media ${device.mobileS} {
    grid-column: 1/3;
    grid-row: 1/2;
  }
  @media ${device.mobileM} {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
`;
const BoxPhone = styled.div`
  @media ${device.mobileS} {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  @media ${device.mobileM} {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const BoxTextArea = styled.div`
  width: 100%;
  height: 100%;
  @media ${device.mobileS} {
    grid-column: 1/3;
    grid-row: 3/4;
  }
  @media ${device.mobileM} {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  resize: none;
`;
const BoxSubmit = styled.div`
  @media ${device.mobileS} {
    grid-column: 1/3;
    grid-row: 4/5;
  }
  @media ${device.mobileM} {
    grid-column: 1/3;
    grid-row: 3/4;
  }
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 20px 0px;
  font-size: 13px;
`;
const Price = styled.div``;
const Submit = styled.input`
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 3px;
  background-color: ${colors.lightGreen};
  color: ${colors.baseWhite};
`;

const ShoppingCart: React.FC = () => {
  const orderList = useAppSelector((state) => state.orderList.value);
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState('+380');
  const [adress, setAdress] = useState<string>('');
  const [totalSum, setTotalSum] = useState<string>('');
  const [orderstr, setOrderstr] = useState<string>('');

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const letters = /^[A-Za-zА-ЯҐЄІЇа-яґєії]+$/;
    e.target.value.match(letters) ? setName(e.target.value) : setName('');
  };
  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const phoneNumber = e.target.value;
    phoneNumber.match('[0-9]') && phoneNumber.length >= 4 && phoneNumber.length <= 13
      ? setPhone(e.target.value)
      : '+380';
  };
  const changeAdress = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setAdress(e.target.value);
  };

  const handleRemove = (i: itemType) => {
    i ? dispatch(remove(i)) : null;
  };

  const userData = {
    name,
    phone,
    adress,
    totalSum,
    orderstr,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        String(process.env.SERVICE_ID),
        String(process.env.TEMPLATE_ID),
        userData,
        String(process.env.PUBLIC_KEY),
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        },
      );
  };

  useEffect(() => {
    const countTotalSum = () => {
      const arrSum = orderList.map((i) => {
        return i.itemPrice * i.itemTotal;
      });
      setTotalSum(
        String(
          arrSum.reduce((acc, products_items) => {
            return acc + products_items;
          }, 0),
        ),
      );
    };
    const orderTostr = () => {
      let result = '';
      const temp = orderList.map((i) => {
        result = `${result}| ${i.itemName} - кількість: ${i.itemTotal}, ціна за одиницю: ${i.itemPrice}`;
      });
      setOrderstr(result);
    };
    orderTostr();
    countTotalSum();
  }, [orderList]);

  return (
    <Container>
      <CardWrapper>
        <ItemsContainer>
          {orderList.map((i) => (
            <Item key={i.itemId}>
              <ItemName>{i.itemName}</ItemName>
              <ItemSum>Кількість: {i.itemTotal}</ItemSum>
              <ItemTotalPrice>{i.itemPrice * i.itemTotal} грн</ItemTotalPrice>
              <ItemRemove>
                <ItemRemoveBtn
                  onClick={() => {
                    handleRemove(i);
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="red" strokeWidth="2" />
                    <path d="M7.5 12H16.5" stroke="red" strokeWidth="2" />
                  </svg>
                </ItemRemoveBtn>
              </ItemRemove>
            </Item>
          ))}
        </ItemsContainer>
        {orderList.length === 0 ? (
          <EmptyCard>
            <EmptyCardText>Корзина пуста</EmptyCardText>
          </EmptyCard>
        ) : (
          <BoxForm onSubmit={sendEmail}>
            <BoxName>
              <BoxLabel>Ім'я:</BoxLabel>
              <BoxInput type="text" value={name} onChange={changeName} />
            </BoxName>
            <BoxPhone>
              <BoxLabel>Номер телефону:</BoxLabel>
              <BoxInput type="tel" value={phone} onChange={changePhone} />
            </BoxPhone>
            <BoxTextArea>
              <BoxLabel>Адреса доставки:</BoxLabel>
              <TextArea value={adress} onChange={changeAdress} />
            </BoxTextArea>
            <BoxSubmit>
              <Price>Всього до сплати: {totalSum} грн</Price>
              <Submit type="submit" value="Замовити" />
            </BoxSubmit>
          </BoxForm>
        )}
      </CardWrapper>
    </Container>
  );
};
export default ShoppingCart;
