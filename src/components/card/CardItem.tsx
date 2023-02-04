import React, { useState } from 'react';
import styled from 'styled-components';
import info from './info.svg';
import basket from './basket.svg';
import arrowBack from './arrowBack.svg';
import minus from './minus.svg';
import plus from './plus.svg';
import send from './send.svg';

const InfoSVG = styled(info)``;
const BasketSVG = styled(basket)``;
const RemoveSVG = styled(arrowBack)``;



const Container = styled.div``;
const Top = styled.div``;
const Bottom = styled.div``;

const Left = styled.div``;
const Details1 = styled.div``;
const H1 = styled.h1``;
const P = styled.p``;
const Buy = styled.div``;

const Right = styled.div``;
const Done = styled.div``;
const Details2 = styled.div``;
const Remove = styled.div``;


const CountWrapper = styled.div``;
const ItemsCount = styled.input``;
const PlusItem = styled(plus)``;
const MinusItem = styled(minus)``;
const SendSVG = styled(send)``;


const Inside = styled.div``;
const InsideIco = styled.div``;
const Contents = styled.div``;
const ItemDetail = styled.div``;

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: none;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
  ${Container} {
    width: 100%;
    height: 100%;
    ${Top} {
      height: 80%;
      width: 100%;
      background: url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg)
        no-repeat center center;
      -webkit-background-size: 100%;
      -moz-background-size: 100%;
      -o-background-size: 100%;
      background-size: 100%;
    }
    ${Bottom} {
      width: 200%;
      height: 20%;
      transition: transform 0.5s;
      &.clicked {
        transform: translateX(-50%);
      }
      ${H1} {
        margin: 0;
        padding: 0;
      }
      ${P} {
        margin: 0;
        padding: 0;
      }
      ${Left} {
        height: 100%;
        width: 50%;
        background: #f4f4f4;
        position: relative;
        float: left;
        ${Details1} {
          padding: 20px;
          float: left;
          width: calc(70% - 40px);
        }
        ${Buy} {
          float: right;
          width: calc(30% - 2px);
          height: 100%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          background: #f1f1f1;
          transition: background 0.5s;
          border-left: solid thin rgba(0, 0, 0, 0.1);
          ${BasketSVG} {
            width: 40px;
            height: 40px;
            color: #254053;
            transition: transform 0.5s;
          }
          &:hover {
            background: #a6cdde;
          }
          &:hover ${BasketSVG} {
            transform: translateY(5px);
            color: #00394b;
          }
        }
      }
      ${Right} {
        width: 50%;
        background: #a6cdde;
        color: white;
        float: right;
        height: 200%;
        overflow: hidden;
        ${Details2} {
          padding: 23px 0px; // ?? 20px def
          float: right;
          width: calc(70%); // 40px def
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr;
          justify-content: space-between;
          align-items: center;
          ${CountWrapper}{
            display: grid;
            grid-template-columns: 1fr 1.5fr 1fr;
            grid-template-rows: 1fr;
            justify-content: center;
            align-items: center;
            ${ItemsCount}{
              width: 50px;
              height: 40px;
              border-radius: 5px;
              background-color: yellow;
              grid-column: 2/3;
              grid-row: 1/2;
              padding: 7px;
              font-size: 28px;
            }
            ${PlusItem}{
              width: 25px;
              height: 25px;
              grid-column: 3/4;
              grid-row: 1/2;
            }
            ${MinusItem}{
              width: 25px;
              height: 25px;
              grid-column: 1/2;
              grid-row: 1/2;
            }
          }
          ${SendSVG}{
            width: 50px;
            height: 50px;
          }
        }
        ${Done} {
          width: calc(25% - 1px);
          float: left;
          transition: transform 0.5s;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          ${RemoveSVG} {
            width: 40px;
            height: 40px;
          }
        }
        ${Remove} {
          width: calc(25% - 1px);
          clear: both;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;
          background: #bc3b59;
          transition: transform 0.5s, background 0.5s;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          ${RemoveSVG} {
            transition: transform 0.5s;
            width: 40px;
            height: 40px;
            color: white;
          }
          &:hover {
            background: #9b2847;
          }
          &:hover ${RemoveSVG} {
            transform: translateY(5px);
          }
        }
        &:hover {
          ${Remove},
          ${Done} {
            transform: translateY(-100%);
          }
        }
      }
    }
  }
  ${Inside} {
    z-index: 9;
    background: #92879b;
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
    ${InfoSVG} {
      position: absolute;
      right: 85px;
      top: 85px;
      color: white;
      opacity: 1;
      width: 30px;
      height: 30px;
    }
    &:hover {
      width: 100%;
      right: 0;
      top: 0;
      border-radius: 0;
      height: 80%;
      ${InfoSVG} {
        opacity: 0;
        right: 15px;
        top: 15px;
      }
      ${Contents} {
        opacity: 1;
        transform: scale(1);
        transform: translateY(0);
      }
    }
    ${Contents} {
      padding: 5%;
      opacity: 0;
      transform: scale(0.5);
      transform: translateY(-200%);
      transition: opacity 0.2s, transform 0.8s;
    }
  }
`;
const CardItem: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');
    // result > 0 &&
    console.log(result)
  };


  const handleClickAdd = () => {
    setIsActive(true);
  };
  const handleClickDel = () => {
    setIsActive(false);
  };
  return (
    <Wrapper>
      <Container>
        <Top />
        <Bottom className={isActive ? 'clicked' : ''}>
          <Left>
            <Details1>
              <H1>Вишня</H1>
              <P>250грн</P>
            </Details1>
            <Buy onClick={handleClickAdd}>
              <BasketSVG />
            </Buy>
          </Left>
          <Right>
            <Done>
              <RemoveSVG />
            </Done>
            <Details2>
              <CountWrapper>
                <MinusItem/>
                <ItemsCount
                            value={count}
                            onChange={inputHandler}/>
                <PlusItem/>
              </CountWrapper>
              <SendSVG/>
            </Details2>
            <Remove onClick={handleClickDel}>
              <RemoveSVG />
            </Remove>
          </Right>
        </Bottom>
      </Container>
      <Inside>
        <InsideIco>
          <InfoSVG />
        </InsideIco>
        <Contents>
          <ItemDetail>
            <h3>Some title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque delectus
              dolor dolorem doloremque eligendi, eos id in itaque maxime molestias praesentium
              quidem ratione veritatis! Laboriosam maiores minus nisi praesentium quas. Accusantium
              asperiores consectetur cum esse maiores officiis omnis quasi veniam. Aliquam
              architecto consequatur, dignissimos facere impedit in itaque laudantium minus nemo,
              officia perferendis perspiciatis porro quia quos recusandae totam veniam. Aliquid,
              dolorem, fuga?
            </p>
          </ItemDetail>
        </Contents>
      </Inside>
    </Wrapper>
  );
};
export default CardItem;
