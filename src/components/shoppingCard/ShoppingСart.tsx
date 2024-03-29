import React, { useEffect, useState } from 'react';
import Popup from './Popup';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { AsYouType } from 'libphonenumber-js';
import { remove, removeAll, itemType } from '../../../store/orderSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { device } from '../../../assets/device';
import { colorsPalette } from '../../../assets/colors';

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
  background-color: ${colorsPalette.cardBG};
  border-radius: 7px;
  overflow: hidden;
  color: ${colorsPalette.color1};
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
  width: 100%;
  height: 75px;
  padding: 0px 10px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr 0.5fr;
  grid-template-rows: 1fr;
  justify-content: center;
  justify-items: start;
  align-items: center;
  border-radius: 7px;
  overflow: hidden;
  background-color: ${colorsPalette.color6};
`;
const ItemName = styled.div`
  font-size: 16px;
  padding-left: 5px;
`;
const ItemSum = styled.div`
  font-size: 13px;
`;
const ItemTotalPrice = styled.div`
  font-size: 13px;
`;
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
  background-color: ${colorsPalette.cardBG};
  border-radius: 7px;
  overflow: hidden;
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
  height: 25px;
  padding: 0px 10px;
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
const Price = styled.div`
  color: ${colorsPalette.color1};
  font-size: 18px;
`;
const Submit = styled.input`
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 3px;
  background-color: ${colorsPalette.color2};
  color: ${colorsPalette.baseWhite};
`;

const ShoppingCart: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const orderList = useAppSelector((state) => state.orderList.value);
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState<string>('');
  const [totalSum, setTotalSum] = useState<string>('');
  const [orderstr, setOrderstr] = useState<string>('');
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value;
    const ukrainianPattern = /^[А-ЯҐЄІЇа-яґєії\s]*$/;
    if (ukrainianPattern.test(inputName)) {
      setName(inputName);
    }
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhone = event.target.value;
    const formattedPhone = new AsYouType().input(inputPhone);
    setPhone(formattedPhone);
  };
  const changeAdress = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setAdress(e.target.value);
  };
  const handleRemove = (i: itemType) => {
    i ? dispatch(remove(i)) : null;
  };
  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  const userData = {
    name,
    phone,
    adress,
    totalSum,
    orderstr,
  };
  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    userData.name.length > 3 && userData.phone.length === 12 && userData.adress.length > 7
      ? emailjs.send('service_8yynih2', 'template_ng2ge9d', userData, '9vqAefbQXmssUIs5o').then(
          function (response) {
            handleRemoveAll();
            handleShowPopup();
            console.log('SUCCESS!', response.status, response.text);
          },
          function (error) {
            console.log('FAILED...', error);
          },
        )
      : null;
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
      {showPopup && (
        <Popup
          title="Дякуємо за замовлення!"
          text={`${name}, очікуйте дзвінка для уточнення деталей замовлення. Якщо у Вас виникли запитання телефонуйте за номером: +38-098-603-08-08`}
          onClose={handleClosePopup}
        />
      )}
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
                    <circle cx="12" cy="12" r="9" stroke="#d27685" strokeWidth="2" />
                    <path d="M7.5 12H16.5" stroke="#d27685" strokeWidth="2" />
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
              <BoxLabel>{"Ім'я:"}</BoxLabel>
              <BoxInput type="text" value={name} onChange={changeName} />
            </BoxName>
            <BoxPhone>
              <BoxLabel>Номер телефону:</BoxLabel>
              <BoxInput
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={12}
                minLength={12}
                placeholder="380 XX XXX XX XX"
              />
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
