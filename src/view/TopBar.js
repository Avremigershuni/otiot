import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return <Tb />;
};
export default TopBar;

const Tb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  border: 2px solid rebeccapurple;
  /* margin-bottom: 15px; */
  box-sizing: border-box;
`;
