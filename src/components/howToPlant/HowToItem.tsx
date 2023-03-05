import React from 'react';
import styled from 'styled-components';
import { Item } from '../../../public/data/howTo/howTo';
type DataInfo = {
  data: Item;
};
const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: #6eafe9;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div``;
const Title = styled.h4``;
const Image = styled.div`
  height: 100%;
  width: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
`;
const HowToItem: React.FC<DataInfo> = ({ data }) => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>
            {`Посадка ${data.name} - кропітлива та важлива процедура, яка вимагає уваги та підготовки
            але при правильній підготовці може приносити багато задоволення та користі. Якщо ви
            плануєте посадити ${data.name}, ось кілька порад, які допоможуть вам зробити це правильно.`}
          </Title>
        </TitleWrapper>
        <Image
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </Container>
    </>
  );
};
export default HowToItem;
