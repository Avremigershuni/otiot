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
          <h1>{content.letter}</h1>
        ) : (
          <img src={content.img} alt="charPic" />
        )}
      </CardCenter>
      <TextArea>
        {isSwitchButtonClicked === true ? <h1>{content.picTitle}</h1> : null}
      </TextArea>
      <Footer>
        <Button
          onClick={() => {
            setSwitchButtonClicked(!isSwitchButtonClicked);
          }}
        >
          <AiOutlinePicture />
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
  border: 2.5px red solid;
  border-radius: 25px;
  background-color: goldenrod;
`;

// const ArrowLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 50px;
//   border: 1.5px pink solid;
// `;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 345px;
  width: 100%;
  font-size: 75px;
  border: 1.5px blue solid;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  border: 1.5px black solid;
`;

// const ArrowRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 50px;
//   border: 1.5px pink solid;
// `;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  width: 100%;
  border: 1.5px black solid;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Button = styled.div`
  ${buttonB}
`;
