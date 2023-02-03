import React from 'react';
import styled from "styled-components";

const Box1 = styled.div`
  width: 300px;
  height: 300px;
  background-color: aquamarine;
`
const Box3 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  background-color: blue;
`
const Box2 = styled.div`
  width: 500px;
  height: 500px;
  background-color: yellow;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  ${Box1} {
    border: 2px solid red;
    rotate: 10deg;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    ${Box3} {
      border: 3px dotted red;
    }
  }
`

const Contacts: React.FC = () => {
  return <div>contact
  <Box2>
    <Box1><Box3/></Box1>
  </Box2>
  </div>;
};
export default Contacts;
