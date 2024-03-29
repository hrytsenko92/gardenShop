import React from 'react';
import styled from 'styled-components';
import { colorsPalette } from '../../../assets/colors';
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
  width: 100%;
`;
const Title = styled.h4`
  width: 90%;
  margin: 50px 0px;
  font-size: 2rem;
  text-align: center;
  color: ${colorsPalette.color1};
`;
const Image = styled.div`
  width: 75%;
  height: auto;
  aspect-ratio: 2/1;
  border-radius: 7px;
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
  color: ${colorsPalette.color1};
`;
const Season = styled.div`
  font-size: 18px;
  margin: 10px 0px;
`;
const PlaceSoil = styled.div`
  font-size: 18px;
  margin: 10px 0px;
`;
const Technique = styled.div`
  font-size: 18px;
  margin: 10px 0px;
`;
const Fertilizers = styled.div`
  font-size: 18px;
  margin: 10px 0px;
`;
const HowToItem: React.FC<DataInfo> = ({ data }) => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>
            {`Якщо ви
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
