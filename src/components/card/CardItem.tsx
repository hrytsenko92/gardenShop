import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/orderSlice';
import styled from 'styled-components';
import { colorsPalette } from '../../../assets/colors';
import { Item } from '../../../public/data/allData';

type DataInfo = {
  tData: Item;
};
const Container = styled.div``;
const Top = styled.div``;
const Bottom = styled.div``;
const Left = styled.div``;
const Details1 = styled.div``;
const H1 = styled.h1``;
const P = styled.p``;
const Buy = styled.div``;
const Right = styled.div``;
const Details2 = styled.div``;
const Remove = styled.div``;
const CountWrapper = styled.form``;
const ItemsCount = styled.input``;
const ItemSubmit = styled.button``;
const Inside = styled.div``;
const InsideIco = styled.div``;
const Contents = styled.div``;
const ItemDetail = styled.div``;
const ItemDetailHeight = styled.div``;
const ItemDetailMaturation = styled.div``;
const ItemDetailInfo = styled.div``;
const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  background: ${colorsPalette.baseWhite};
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: none;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  color: ${colorsPalette.color1};
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
        text-align: center;
        font-size: 18px;
      }
      ${P} {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 20px;
      }
      ${Left} {
        height: 100%;
        width: 50%;
        background: ${colorsPalette.cardBG};
        position: relative;
        float: left;
        ${Details1} {
          float: left;
          width: calc(70%);
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1.3fr 1fr;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 10px 0px;
        }
        ${Buy} {
          float: right;
          width: calc(30%);
          height: 100%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          background: ${colorsPalette.cardBG};
          transition: background 0.5s;
          border-left: solid thin rgba(0, 0, 0, 0.1);
          ${'svg'} {
            width: 40px;
            height: 40px;
            color: ${colorsPalette.color1};
            transition: transform 0.5s;
          }
          &:hover {
            background: ${colorsPalette.color3};
          }
          &:hover ${'svg'} {
            transform: translateY(5px);
            color: ${colorsPalette.color1};
          }
        }
      }
      ${Right} {
        width: 50%;
        background: ${colorsPalette.cardBG};
        float: right;
        height: 100%;
        overflow: hidden;
        ${Details2} {
          padding: 23px 0px;
          float: right;
          width: calc(75%);
          height: 100%;
          ${CountWrapper} {
            width: 100%;
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 1fr;
            justify-content: center;
            justify-items: center;
            align-items: center;
            ${ItemsCount} {
              width: 70px;
              height: 50px;
              border-radius: 5px;
              grid-column: 1/2;
              grid-row: 1/2;
              padding: 7px;
              font-size: 28px;
              border: none;
              text-align: center;
            }
            ${ItemSubmit} {
              grid-column: 2/3;
              grid-row: 1/2;
              justify-self: start;
              width: 50px;
              height: 50px;
              background-color: transparent;
              border: none;
              ${'svg'} {
                transition: transform 0.5s;
                width: 50px;
                height: 50px;
                color: ${colorsPalette.color1};
                &:hover {
                  transition: transform 0.5s;
                  transform: translateY(5px);
                }
              }
            }
          }
        }
        ${Remove} {
          width: calc(25%);
          float: left;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 100%;
          transition: transform 0.5s, background 0.5s;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          ${'svg'} {
            transition: transform 0.5s;
            width: 40px;
            height: 40px;
          }
          &:hover ${'svg'} {
            transform: translateY(5px);
          }
        }
      }
    }
  }
  ${Inside} {
    z-index: 9;
    background: ${colorsPalette.color3};
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
    ${'svg'} {
      position: absolute;
      right: 85px;
      top: 85px;
      color: ${colorsPalette.color1};
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
      ${'svg'} {
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
      height: 100%;
      transform: scale(0.5);
      transform: translateY(-200%);
      transition: opacity 0.2s, transform 0.8s;
      ${ItemDetail} {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20px 35px auto;
        gap: 5px;
        color: ${colorsPalette.color1};
        ${ItemDetailHeight} {
          grid-column: 1/2;
          grid-row: 1/2;
          font-size: 16px;
          text-align: center;
        }
        ${ItemDetailMaturation} {
          grid-column: 1/2;
          grid-row: 2/3;
          font-size: 14px;
          text-align: center;
        }
        ${ItemDetailInfo} {
          grid-column: 1/2;
          grid-row: 3/4;
          font-size: 14px;
          overflow: scroll;
        }
      }
    }
  }
`;
const CardItem: React.FC<DataInfo> = ({ tData }) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState<number | string>(5);
  const [countDefault, setCountDefault] = useState<boolean>(true);
  const dispatch = useDispatch();
  const countReset = () => (countDefault ? setCount('') : countDefault);
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const result = event.target.value.replace(/\D/g, '');
    Number(result) >= 1 && Number(result) <= 999 ? setCount(Number(result)) : setCount('');
  };
  const onSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      add({
        itemId: tData.id,
        itemTotal: Number(count),
        itemName: tData.name,
        itemPrice: tData.price,
      }),
    );
    setCount(5);
    setCountDefault(true);
    setIsActive(false);
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
        <Top
          style={{
            backgroundImage: `url(${tData.img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Bottom className={isActive ? 'clicked' : ''}>
          <Left>
            <Details1>
              <H1>{tData.name}</H1>
              <P>{tData.price} - грн/шт</P>
            </Details1>
            <Buy onClick={handleClickAdd}>
              <svg viewBox="0 0 24 24" fill="#285A43" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 1C0.447715 1 0 1.44772 0 2C0 2.55228 0.447715 3 1 3H3.20647L5.98522 14.9089C6.39883 16.6816 7.95486 17.9464 9.76471 17.9983V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.72686L4.97384 1.77277C4.86824 1.32018 4.46475 1 4 1H1ZM6.19353 7L7.9329 14.4545C8.14411 15.3596 8.95109 16 9.88058 16H17.5874C18.5618 16 19.3944 15.2978 19.5588 14.3373L20.8143 7H6.19353Z"
                  fill="#285A43"
                />
                <path
                  d="M8 23C9.10457 23 10 22.1046 10 21C10 19.8954 9.10457 19 8 19C6.89543 19 6 19.8954 6 21C6 22.1046 6.89543 23 8 23Z"
                  fill="#285A43"
                />
                <path
                  d="M19 23C20.1046 23 21 22.1046 21 21C21 19.8954 20.1046 19 19 19C17.8954 19 17 19.8954 17 21C17 22.1046 17.8954 23 19 23Z"
                  fill="#285A43"
                />
              </svg>
            </Buy>
          </Left>
          <Right>
            <Remove onClick={handleClickDel}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4V11C19 11.7956 18.6839 12.5587 18.1213 13.1213C17.5587 13.6839 16.7956 14 16 14H6.41421L9.70711 10.7071C10.0976 10.3166 10.0976 9.68342 9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289L3.29289 14.2929C2.90237 14.6834 2.90237 15.3166 3.29289 15.7071L8.29289 20.7071C8.68342 21.0976 9.31658 21.0976 9.70711 20.7071C10.0976 20.3166 10.0976 19.6834 9.70711 19.2929L6.41421 16H16C17.3261 16 18.5979 15.4732 19.5355 14.5355C20.4732 13.5979 21 12.3261 21 11V4Z"
                  fill="#285A43"
                />
              </svg>
            </Remove>
            <Details2>
              <CountWrapper onSubmit={onSubmitEvent}>
                <ItemsCount
                  value={count}
                  onFocus={countReset}
                  onChange={inputHandler}
                  type="text"
                />
                <ItemSubmit type="submit">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14L9 17L18 6" stroke="#285A43" strokeWidth="2" />
                  </svg>
                </ItemSubmit>
              </CountWrapper>
            </Details2>
          </Right>
        </Bottom>
      </Container>
      <Inside>
        <InsideIco>
          <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="icomoon-ignore"></g>
            <path
              d="M16.067 11.156c0.883 0 1.599-0.716 1.599-1.599 0-0.884-0.716-1.598-1.599-1.598s-1.599 0.714-1.599 1.598c0 0.883 0.716 1.599 1.599 1.599z"
              fill="#285A43"
            ></path>
            <path
              d="M17.153 13.289v-1.066h-3.199v1.066h1.066v9.063h-1.066v1.066h4.265v-1.066h-1.066z"
              fill="#285A43"
            ></path>
            <path
              d="M16 2.672c-7.361 0-13.328 5.968-13.328 13.328 0 7.362 5.968 13.328 13.328 13.328s13.328-5.966 13.328-13.328c0-7.361-5.968-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.501-12.262-12.262s5.5-12.262 12.262-12.262c6.761 0 12.262 5.501 12.262 12.262s-5.5 12.262-12.262 12.262z"
              fill="#285A43"
            ></path>
          </svg>
        </InsideIco>
        <Contents>
          <ItemDetail>
            <ItemDetailHeight>Висота: {tData.height} см</ItemDetailHeight>
            <ItemDetailMaturation>
              {tData.maturation !== '-' ? `Період цвітіння: ${tData.maturation}` : null}{' '}
            </ItemDetailMaturation>
            <ItemDetailInfo>{tData.details}</ItemDetailInfo>
          </ItemDetail>
        </Contents>
      </Inside>
    </Wrapper>
  );
};
export default CardItem;
