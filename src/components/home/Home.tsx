import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from '@app/components/card/CardItem';
import { AllItems, Item, allData } from '../../../public/data/allData';
import { device } from '../../../assets/device';
import { colorsPalette } from '../../../assets/colors';

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const NoFiltered = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto;
  gap: 25px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tabletM} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const Input = styled.input`
  margin: 25px;
  width: 300px;
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #f2f2f2;
  color: #333;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colorsPalette.color1};
    text-align: center;
  }
  &::placeholder {
    text-align: center;
  }
`;
const ButtonWrapper = styled.div`
  margin: 25px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media ${device.tabletM} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
const ButtonSelect = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  border: 1.5px solid ${colorsPalette.color1};
  color: ${colorsPalette.color1};
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
`;
const Home: React.FC = () => {
  const [all, setAll] = useState(true);
  const [roses, setRoses] = useState(true);
  const [berries, setBerries] = useState(true);
  const [fruitful, setFruitful] = useState(true);
  const [decorativeBushes, setDecorativeBushes] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    const searchRegex = new RegExp(e.target.value, 'i');
    const items = Object.values(allData).flat();
    const filteredItems = items.filter((item) => searchRegex.test(item.name.concat(item.cls)));
    setFilteredItems(filteredItems);
  };

  const selectAll = () => {
    setAll(true), setRoses(true), setBerries(true), setFruitful(true), setDecorativeBushes(true);
  };
  const selectRoses = () => {
    setAll(false),
      setRoses(true),
      setBerries(false),
      setFruitful(false),
      setDecorativeBushes(false);
  };
  const selectBerries = () => {
    setAll(false),
      setRoses(false),
      setBerries(true),
      setFruitful(false),
      setDecorativeBushes(false);
  };
  const selectFruitful = () => {
    setAll(false),
      setRoses(false),
      setBerries(false),
      setFruitful(true),
      setDecorativeBushes(false);
  };
  const selectDecorativeBushes = () => {
    setAll(false),
      setRoses(false),
      setBerries(false),
      setFruitful(false),
      setDecorativeBushes(true);
  };
  const buttonStyle = {
    backgroundColor: `${colorsPalette.color3}`,
    border: 'none',
  };
  return (
    <Container>
      <Input type="text" placeholder="Пошук" value={searchText} onChange={handleSearch} />
      {searchText.length === 0 ? (
        <NoFiltered>
          <ButtonWrapper>
            <ButtonSelect
              style={all ? buttonStyle : { backgroundColor: 'transparent' }}
              onClick={selectAll}
            >
              Всі види
            </ButtonSelect>
            <ButtonSelect
              style={roses ? buttonStyle : { backgroundColor: 'transparent' }}
              onClick={selectRoses}
            >
              Троянди
            </ButtonSelect>
            <ButtonSelect
              style={berries ? buttonStyle : { backgroundColor: 'transparent' }}
              onClick={selectBerries}
            >
              Ягідні культури
            </ButtonSelect>
            <ButtonSelect
              style={fruitful ? buttonStyle : { backgroundColor: 'transparent' }}
              onClick={selectFruitful}
            >
              Плодові дерева
            </ButtonSelect>
            <ButtonSelect
              style={decorativeBushes ? buttonStyle : { backgroundColor: 'transparent' }}
              onClick={selectDecorativeBushes}
            >
              Декоративні
            </ButtonSelect>
          </ButtonWrapper>
          <Section>
            {roses && allData.roses
              ? allData.roses.map((i) => {
                  return <CardItem key={i.id} tData={i} />;
                })
              : null}
            {berries && allData.berries
              ? allData.berries.map((i) => {
                  return <CardItem key={i.id} tData={i} />;
                })
              : null}
            {fruitful && allData.fruitful
              ? allData.fruitful.map((i) => {
                  return <CardItem key={i.id} tData={i} />;
                })
              : null}
            {decorativeBushes && allData.decorative
              ? allData.decorative.map((i) => {
                  return <CardItem key={i.id} tData={i} />;
                })
              : null}
          </Section>
        </NoFiltered>
      ) : (
        <Section>
          {filteredItems.map((item) => (
            <CardItem key={item.id} tData={item} />
          ))}
        </Section>
      )}
    </Container>
  );
};
export default Home;
