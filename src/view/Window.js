import React, { useState } from "react";
import styled from "styled-components";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlinePicture } from "react-icons/ai";
import Player from "./SoundPlayer";
import { buttonB } from "./globalCss";

const Window = ({ content }) => {
  let [isSwitchButtonClicked, setSwitchButtonClicked] = useState(false);
  return (
    <Border>

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
    </Border>
  );
};
export default Window;

const Border = styled.div`
 display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  border:2.5px dashed white;
  padding:20px;
  border-radius:45px;
  margin-right:45px;
  transform:skew(-5deg);
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* align-items: center; */
  height: 620px;
  width: 420px;
  /* border: 4.5px rebeccapurple double; */
  border-radius: 40px;
  background-color: white;
  /* transform:skew(-0.7deg); */
  box-shadow: 10px 1px 7px -3px rgba(0, 0, 0, 0.47);
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 350px;
    height:220px;
  } */
`;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  font-size: 95px;
  font-family: "Secular One", sans-serif;
  /* border-bottom: 1.5px blue solid; */
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    flex-direction: row;
    width: 140px;
    font-size:55px;
  } */
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
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
  height: 90px;
  width: 100%;
  font-family: "Secular One", sans-serif;
  /* border: 1.5px black solid; */
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 40px;
  } */
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
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 60px;
  } */
`;

const Button = styled.div`
  ${buttonB}
`;

const H1 = styled.h1`
 font-family: 'Secular One', sans-serif;
 font-size:55px;
`;