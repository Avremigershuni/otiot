import React, { useState } from "react";
import styled from "styled-components";
import {
  TiArrowLeftOutline,
  TiArrowRightOutline,
  TiInfoLarge,
} from "react-icons/ti";

import backCards from "../data/backList";
import Window from "./Window";
import PopUp from "./PopUp";
import ConfettiShow from "./Confetti";
import { buttonA } from "./globalCss";
import Player from "./SoundPlayer";
import About from "./About";

const Otiot = () => {
  let [object, setObject] = useState({});
  let [newList, setNewList] = useState([
    backCards[0],
    backCards[1],
    backCards[2],
    backCards[3],
    backCards[4],
    backCards[5],
    backCards[6],
    backCards[7],
  ]);
  let [clicked, setClicked] = useState({});
  let [indexes, setIndexes] = useState({
    min: 0,
    max: 8,
  });
  let [level, setLevel] = useState("");
  let [isAnyLetterClicked, setIsAnyLetterClicked] = useState(false);
  let [isAboutButtonClicked, setIsAboutButtonClicked] = useState(false);

  const rewardChecker = (ot, clicked, setClicked) => {
    setClicked({ ...clicked, [ot.id]: "clicked" });
    // console.log("clicked:", clicked);
    let length = Object.keys(clicked).length;
    if (!clicked[ot.id]) {
      // length++
      setClicked({ ...clicked, [ot.id]: "clicked", length });
    }
    // console.log("length:", length);
  };

  const levelChecker = () => {
    // console.log(width)
    if (clicked.length >= 7 && clicked.length < 16) {
      setLevel("ראשון");
    }
    if (clicked.length >= 15 && clicked.length < 24) {
      setLevel("שני");
    }
    if (clicked.length >= 23 && clicked.length < 32) {
      setLevel("שלישי");
    }
    if (clicked.length >= 31) {
      setLevel("רביעי");
    }
  };
  const newListEditor = (arr, arg, index, setIndex, setNewList) => {
    // console.log(width, 2)
    let { min, max } = index;
    if (index.min === 0 && arg === "minus") return;
    if (index.max === arr.length && arg === "plus") return;

    if (arg === "plus") {
      setIndex({
        min: (min += 8),
        max: (max += 8),
      });
      let plusFiltered = arr.filter((n) => {
        return n.id >= index.min + 8 && n.id < index.max + 8;
      });

      setNewList(plusFiltered);
      // }
    } else {
      setIndex({
        min: (min -= 8),
        max: (max -= 8),
      });

      let minusFiltered = arr.filter((n) => {
        return n.id >= index.min - 8 && n.id < index.max - 8;
      });

      setNewList(minusFiltered);
    }
  };

  return (
    <Wrapper>
      <AboutButton
        onClick={() => {
          setIsAboutButtonClicked(!isAboutButtonClicked);
        }}
      >
        <TiInfoLarge />
      </AboutButton>
      <Rewards>
        {isAnyLetterClicked === false ? (
          <H1
            style={{
              position: "absolute",
              top: "20px",
              right: "530px",
              fontSize: "50px",
              color: "saddlebrown",
            }}
          >
            אנא בחר/י אות
          </H1>
        ) : null}
        {isAboutButtonClicked === true ? <About /> : null}
        {clicked.length >= 8 && clicked.length < 16 ? (
          <PopUp content={level} />
        ) : null}
        {clicked.length >= 16 && clicked.length < 24 ? (
          <PopUp content={level} />
        ) : null}
        {clicked.length >= 24 && clicked.length < 32 ? (
          <PopUp content={level} />
        ) : null}
        {clicked.length === 32 ? (
          <React.Fragment>
            <PopUp content={level} />
            <ConfettiShow />
          </React.Fragment>
        ) : null}
      </Rewards>

      <ContentBox>
        <Window content={object} />
        <CharsWrapper>
          <LettersBox>
            {newList.map((obj) => (
              <Div
                className={
                  object.id === obj.id && obj.isClicked
                    ? "currentDiv"
                    : obj.isClicked
                    ? "clickedDiv"
                    : "NotClickedDiv"
                }
                // {object.id === obj.id ? "123" : "clickedDiv"}
                key={obj.id}
                onClick={() => {
                  setObject(obj);
                  rewardChecker(object, clicked, setClicked);
                  levelChecker(clicked, setLevel);
                  setIsAnyLetterClicked(true);
                  if (!obj.isClicked) obj.isClicked = !obj.isClicked;
                  // console.log(obj)
                }}
              >
                <h3>{obj.letter}</h3>
              </Div>
            ))}
          </LettersBox>
          <ArrowsBox>
            <Button
              className={
                newList[0].id === 24 ? "notActiveButton" : "activeButton"
              }
              onClick={() => {
                newListEditor(
                  backCards,
                  "plus",
                  indexes,
                  setIndexes,
                  setNewList
                );
              }}
            >
              <TiArrowLeftOutline />
            </Button>
            <Player url={object.audio} />
            <Button
              className={
                newList[0].id === 0 ? "notActiveButton" : "activeButton"
              }
              onClick={() => {
                newListEditor(
                  backCards,
                  "minus",
                  indexes,
                  setIndexes,
                  setNewList
                );
              }}
            >
              <TiArrowRightOutline />
            </Button>
          </ArrowsBox>
        </CharsWrapper>
      </ContentBox>
    </Wrapper>
  );
};
export default Otiot;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  background: lightblue
    url("https://i.pinimg.com/originals/27/c3/41/27c341ea8d860408d0c6348930c55b5b.jpg")
    no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    align-items: center;
    background: lightblue
      url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/dc3b2546601081.585ad762e70eb.jpg")
      no-repeat fixed center;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    background-size: cover;
  } */
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  margin: 10px;
  border-radius: 25px;
  font-family: "Secular One", sans-serif;
  font-size: 55px;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    box-shadow: 10px 10px 10px rgba(76, 129, 172, 0.836);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.9);
  }
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    height: 45px;
    width: 45px;
    border-radius: 15px;
    font-size: 30px;
    flex-basis: 15%;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    height: 60px;
    width: 60px;
    border-radius: 15px;
    font-size: 40px;
    flex-basis: 20%;
  } */
`;

const Rewards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 1px;
  margin-top: 10px;
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    margin-top:0;
  }
`;

const H1 = styled.h1`
  font-family: "Secular One", sans-serif;
  font-size: 30px;
  margin: 0;
  color: black;
  justify-self: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
  /* border: 2px solid black; */
  box-sizing: border-box;
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    flex-direction: column-reverse;
    width: 90vw;
    padding: 0;
    /* margin-top: 50px; */
    margin-right: 5vw;
    margin-left: 5vw;
  }
`;

const CharsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 590px;
  width: 420px;
  margin-left: 45px;
  /* border: 4.5px rebeccapurple double; */
  border-radius: 25px;
  /* background-color: burlywood; */
  /* box-shadow: 10px 1px 7px -3px rgba(0, 0, 0, 0.47); */
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    width: 350px;
    height: 220px;
    margin: 0;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }
  /* @media only screen and (min-width: 371px) and (max-width: 799px) {
    height: 500px;
    width: 350px;
  } */
`;

const LettersBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
  height: 470px;
  width: 100%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const ArrowsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  width: 100%;
  /* border-top: 1.5px rebeccapurple dashed; */
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const Button = styled.div`
  ${buttonA};
`;

const AboutButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  color: white;
  height: 70px;
  width: 70px;
  border: saddlebrown 4px solid;
  background-color: #ccff66;
  border-radius: 50%;
  color: saddlebrown;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  &:active {
    transform: scale(0.9);
  }
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    height: 30px;
    width: 30px;
    font-size: 20px;
    top: 10px;
    right: 10px;
  }
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    height: 50px;
    width: 60px;
    font-size: 30px;
    top: 20px;
    right: 20px;
  } */
`;
