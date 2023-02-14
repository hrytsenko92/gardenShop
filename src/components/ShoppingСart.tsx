import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { remove, itemType } from '../../store/orderSlice';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { device } from '../../assets/device';
import { colors } from '../../assets/colors';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: start;
  margin: 25px 0px;
`;
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
const CardFooter = styled.div`
  width: 100%;
  height: 75px;
  padding: 0px 25px;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  align-items: center;
`;
const TotalPrice = styled.div`
  width: 100%;
  font-size: 17px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  @media ${device.mobileS} {
    justify-content: center;
  }
  @media ${device.mobileM} {
    justify-content: end;
  }
`;
const TotalPriceLabel = styled.div``;
const TotalPriceNumber = styled.div``;

const ItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 0px 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  gap: 15px;
`;

const Item = styled.div`
  font-size: 13px;
  width: 100%;
  height: 50px;
  padding: 0px 22px 0px 24px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 0.6fr;
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

const ShoppingCart: React.FC = () => {
  const [totalSum, setTotalSum] = useState<number>(0);
  const orderList = useAppSelector((state) => state.orderList.value);
  const dispatch = useAppDispatch();
  const handleRemove = (i: itemType) => {
    i ? dispatch(remove(i)) : null;
  };

  useEffect(() => {
    const countTotalSum = () => {
      const arrSum = orderList.map((i) => {
        return i.itemPrice * i.itemTotal;
      });
      setTotalSum(
        arrSum.reduce((acc, products_items, i, arr) => {
          return acc + products_items;
        }, 0),
      );
    };
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
          {/* <Item>
            <ItemName>Паперівка</ItemName>
            <ItemSum>Кількість: 100</ItemSum>
            <ItemTotalPrice>1000 грн</ItemTotalPrice>
            <ItemRemove>
              <ItemRemoveBtn onClick={removeItem}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="red" strokeWidth="2" />
                  <path d="M7.5 12H16.5" stroke="red" strokeWidth="2" />
                </svg>
              </ItemRemoveBtn>
            </ItemRemove>
          </Item> */}
        </ItemsContainer>
        <CardFooter>
          <TotalPrice>
            <TotalPriceLabel>Всього до сплати: </TotalPriceLabel>
            <TotalPriceNumber>{totalSum} грн</TotalPriceNumber>
          </TotalPrice>
        </CardFooter>
      </CardWrapper>
    </Container>
  );
};
export default ShoppingCart;
