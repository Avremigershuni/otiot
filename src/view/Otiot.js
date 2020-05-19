import React, { useState } from "react";
import styled from "styled-components";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
// import {BrowserView, MobileView,isBrowser, isMobile} from "react-device-detect";
import backCards from "../data/backList";
import Window from "./Window";
import TopBar from "./TopBar";
import PopUp from "./PopUp";
import ConfettiShow from "./Confetti";
import Footer from "./Footer";
import { buttonA } from "./globalCss";

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
      // if (
      //   clicked.length === 8 ||
      //   clicked.length === 16 ||
      //   clicked.length === 24
      // ) {
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
      <TopBar />
      <Rewards>
        {isAnyLetterClicked === false ? <H1>אנא בחר/י אות</H1> : null}
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
          <>
            <PopUp content={level} />
            <ConfettiShow />
          </>
        ) : null}
      </Rewards>

      <ContentBox>
        <Window content={object} />
        <div>{clicked.length}/32</div>
        <CharsWrapper>
          <LettersBox>
            {newList.map((obj) => (
              // <ThemeProvider theme={theme}>
              <Div //className={obj.isClicked ? "clickedDiv": ""}
                key={obj.id}
                onClick={() => {
                  setObject(obj);
                  rewardChecker(object, clicked, setClicked);
                  levelChecker(clicked, setLevel);
                  setIsAnyLetterClicked(true);
                  // obj =  {...obj, isClicked:"clicked"}
                  // console.log(obj)
                }}
              >
                <h3>{obj.letter}</h3>
              </Div>
              // </ThemeProvider>
            ))}
          </LettersBox>
          <ArrowsBox>
            <Button
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
            <Button
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
      <Footer />
    </Wrapper>
  );
};
export default Otiot;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  background-color: lightslategrey;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  margin: 10px;
  border-radius: 25px;
  font-family: "Secular One", sans-serif;
  font-size: 55px;
  border: double rebeccapurple 4.5px;
  background-color: turquoise;
  /* background: ${(props) => props.theme.bg}; */
  cursor: pointer;
  transition: 100ms;
  &:hover {
    box-shadow: 10px 10px 10px rgba(76, 129, 172, 0.836);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.9);
  }
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    height:  40px;
    width: 40px;
    border-radius: 15px;
    font-size:30px;
    flex-basis:15%;
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
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
  margin-bottom: 90px;
  /* border: 2px solid black; */
  box-sizing: border-box;
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    flex-direction: column;
    width: 350px;
  } */
`;

const CharsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 490px;
  width: 320px;
  /* padding-top: 20px; */
  margin-left: 25px;
  border: 4.5px rebeccapurple double;
  border-radius: 25px;
  background-color: burlywood;
  box-shadow: 10px 1px 7px -3px rgba(0, 0, 0, 0.47);
  /* @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 350px;
    height:220px;
  } */
`;

const LettersBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
  height: 410px;
  width: 320px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const ArrowsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  height: 80px;
  width: 100%;
  border-top: 1.5px rebeccapurple dashed;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const Button = styled.div`
  ${buttonA}
`;
