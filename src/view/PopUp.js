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
  width: 400px;
  padding-top: 10px;
  background-color: turquoise;
  border-radius: 25px;
  position: absolute;
  top: 150px;
  z-index: 999;
  box-shadow: 10px 1px 10px -3px rgba(0, 0, 0, 0.47);
  @media only screen and (min-width: 0px) and (max-width: 1199px) {
  justify-content:center;
    width: 230px;
    height:230px;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 310px;
  font-family: "Secular One", sans-serif;
  @media only screen and (min-width: 0px) and (max-width: 1199px) {
    height:190px;
    /* width: 60%; */
  }
`;

const H1 = styled.h1`
  font-size: 45px;
  text-shadow: 2px 2px 5px grey;
  @media only screen and (min-width: 0px) and (max-width: 1199px) {
 font-size:30px;
  }
`;

const Par = styled.p`
  font-size: 30px;
  text-shadow: 2px 2px 5px grey;
  @media only screen and (min-width: 0px) and (max-width: 1199px) {
 font-size:15px;
  }
`;