import React, { useState } from "react";
import styled from "styled-components";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlinePicture } from "react-icons/ai";
import Player from "./SoundPlayer";
import { buttonB } from "./globalCss";

const Window = ({ content }) => {
  let [isSwitchButtonClicked, setSwitchButtonClicked] = useState(false);
  return (
    <MainCard>
      <CardCenter>
        {isSwitchButtonClicked === false ? (
          <H1>{content.letter}</H1>
        ) : (
          <Image src={content.img} alt="" />
        )}
      </CardCenter>
      <TextArea>
        {isSwitchButtonClicked === true ? <H1>{content.picTitle}</H1> : null}
      </TextArea>
      <Footer>
        <Button
          onClick={() => {
            setSwitchButtonClicked(!isSwitchButtonClicked);
          }}
        >
         {isSwitchButtonClicked === false ? (<AiOutlinePicture />) : (<H1>א</H1>)} 
        </Button>
        <Player url={content.audio} />
      </Footer>
    </MainCard>
  );
};
export default Window;

const MainCard = styled.div`
  /* grid-column: 2/4;
  grid-row: 2/4; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* align-items: center; */
  height: 490px;
  width: 320px;
  border: 4.5px rebeccapurple double;
  border-radius: 25px;
  background-color: burlywood;
  box-shadow: 10px 1px 7px -3px rgba(0, 0, 0, 0.47);
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 140px;
  } */
`;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 345px;
  width: 319.5px;
  font-size: 95px;
  font-family: "Secular One", sans-serif;
  /* border-bottom: 1.5px blue solid; */
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 140px;
    font-size:55px;
  } */
`;

const Image = styled.img`
  display: block;
  width: 320px;
  height: 460px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 140px;
  } */
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  font-family: "Secular One", sans-serif;
  /* border: 1.5px black solid; */
`;


const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  width: 100%;
  border-top: 1.5px rebeccapurple dashed;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Button = styled.div`
  ${buttonB}
`;

const H1 = styled.h1`
 font-family: 'Secular One', sans-serif;
`;