import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return <Tb>

    <H1>האותיות - שלי</H1>
  </Tb>;
};
export default TopBar;

const Tb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color:slateblue;
  font-family: 'Secular One', sans-serif;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-size: 45px;
  margin: 0;
  color:black;
`;