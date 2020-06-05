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
            <MainLetter>{content.letter}</MainLetter>
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
            {isSwitchButtonClicked === false ? (
              <AiOutlinePicture />
            ) : (
              <H1>{content.letter}</H1>
            )}
          </Button>
          <Player url={content.picAudio} />
        </Footer>
      </MainCard>
    </Border>
  );
};
export default Window;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2.5px dashed saddlebrown;
  padding: 20px;
  border-radius: 45px;
  margin-right: 45px;
  transform: skew(-1.5deg);
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    margin-right:0;
  }
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* align-items: center; */
  height: 590px;
  width: 420px;
  /* border: 4.5px rebeccapurple double; */
  border-radius: 40px;
  background-color: #ccff66;
  padding: 0;
  /* transform:skew(-0.7deg); */
  box-shadow: 10px 1px 7px -3px rgba(0, 0, 0, 0.47);
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    width: 320px;
    height: 220px;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    height: 500px;
    width: 350px;
  } */
`;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 390px;
  width: 100%;
  font-family: "Secular One", sans-serif;
  /* border-bottom: 1.5px blue solid; */
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    width: 320px;
    height: 140px;
    font-size: 85px;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    height: 300px;
    width: 350px;
  } */
`;

const MainLetter = styled.h1`
  font-family: "Secular One", sans-serif;
  font-size: 200px;
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    font-size: 75px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 390px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    height: 140px;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    height: 300px;
    width: 350px;
  } */
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  font-family: "Secular One", sans-serif;
  /* border: 1.5px black solid; */
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    height: 35px;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    height: 90px;
    width: 350px;
  } */
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 110px;
  width: 100%;
  /* border-top: 1.5px rebeccapurple dashed; */
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    height: 35px;
    padding-bottom: 5px;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    height: 100px;
    width: 350px;
  } */
`;

const Button = styled.div`
  ${buttonB}
`;

const H1 = styled.h1`
  font-family: "Secular One", sans-serif;
  font-size: 60px;
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    font-size: 30px;
  }
`;
