import React from 'react';
import styled from 'styled-components';
import { Item } from '../../../public/data/howTo/howTo';
type DataInfo = {
  data: Item;
};
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  text-align: center;
`;
const Title = styled.h4`
  font-size: 1rem;
`;
const Image = styled.div`
  width: 90%;
  height: auto;
  aspect-ratio: 2/1;
`;
const Article = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding: 15px;
`;
const Season = styled.div``;
const PlaceSoil = styled.div``;
const Technique = styled.div``;
const Fertilizers = styled.div``;
const HowToItem: React.FC<DataInfo> = ({ data }) => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>
            {`Посадка ${data.name} - кропітлива та важлива процедура, яка вимагає уваги та підготовки
            але при правильній підготовці може приносити багато задоволення та користі. Якщо ви
            плануєте посадку ${data.name}, ось кілька порад, які допоможуть вам зробити це правильно.`}
          </Title>
        </TitleWrapper>
        <Article>
          <Image
            style={{
              backgroundImage: `url(${data.img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
            }}
          />
          <Season>{data.details.season}</Season>
          <PlaceSoil>{data.details.placeSoil}</PlaceSoil>
          <Technique>{data.details.technique}</Technique>
          <Fertilizers>{data.details.fertilizers}</Fertilizers>
        </Article>
      </Container>
    </>
  );
};
export default HowToItem;
