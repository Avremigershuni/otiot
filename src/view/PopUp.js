import React, { useState, useEffect } from "react";
import styled from "styled-components";


const PopUp = ({ content }) => {
  let [popUpOpen, setPopUpOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUpOpen(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setPopUpOpen]);
  return (
    <>
      {popUpOpen ? (
        <PopUpWindow>
          <TextArea>
            <H1> !!! כל הכבוד </H1>
            <Par> סיימת את השלב ה{content}</Par>
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
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 350px;
  width: 350px;
  padding-top: 10px;
  background-color: pink;
  border-radius: 25px;
  position: relative;
  top: 240px;
  z-index: 999;
  box-shadow: 4px 1px 7px -3px rgba(0, 0, 0, 0.47);
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 310px;
  font-family: "Secular One", sans-serif;
`;

const H1 = styled.h1`
  font-size: 45px;
  text-shadow: 2px 2px 5px grey;
`;

const Par = styled.p`
  font-size: 25px;
  text-shadow: 2px 2px 5px grey;
`;