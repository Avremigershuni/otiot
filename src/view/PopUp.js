import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const PopUp = ({ content }) => {
  let [popUpOpen, setPopUpOpen] = useState(true);

  return (
    <>
      {popUpOpen ? (
        <PopUpWindow>
          <ButtonBox>
          <ClosingButton
            onClick={() => {
              setPopUpOpen(!popUpOpen);
            }}
          >
            <AiOutlineClose />
          </ClosingButton>
          </ButtonBox>
         
          <TextArea>
            <h1> !!! כל הכבוד </h1>
            <p>{content} סיימת את השלב ה </p>
          </TextArea>
        </PopUpWindow>
      ) : null}
    </>
  );
};
export default PopUp;

const PopUpWindow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: flex-start;
  height: 350px;
  width: 350px;
  margin-top: 400px;
  padding-top:10px;
  background-color: pink;
  border-radius:25px;
  z-index: 90;
  box-shadow: 4px 1px 7px -3px rgba(0,0,0,0.47);
`;

const ButtonBox = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width:100%;
`;

const ClosingButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 310px;
`;
