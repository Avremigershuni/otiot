import React, { useState } from "react";
import styled from "styled-components";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import backCards from "./backList";
import Window from "./Window";
import TopBar from "./TopBar";
import PopUp from "./PopUp";


import { buttonA } from "./globalCss";
const Otiot = () => {
  let [object, setObject] = useState({});
  // let [clickedLetters, setClickedLetters] = useState([]);
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
  let [level, setLevel]=useState("")

  const rewardChecker = (ot, clicked, setClicked) => {
    setClicked({ ...clicked, [ot.id]: "clicked" });
    console.log("clicked:", clicked);
    let length = Object.keys(clicked).length;
    if (!clicked[ot.id]) {
      // length++
      setClicked({ ...clicked, [ot.id]: "clicked", length });
    }
    console.log("length:", length);
  };

  const levelChecker = ()=>{
    if(clicked.length >= 8 && clicked.length < 16){
      setLevel("ראשון")
    }
  }
  const newListEditor = (arr, arg, index, setIndex, setNewList) => {
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
      <PopUp content={level}/>
        {clicked.length >= 8 && clicked.length < 16 ? (
          // <RewardsArea>
          //   <BsStar />
          // </RewardsArea>
          <PopUp content={level}/>
        ) : null}
        {clicked.length >= 16 && clicked.length < 24 ? (
          <>
            <RewardsArea>
              <BsStar />
              <BsStar />
            </RewardsArea>
          </>
        ) : null}
        {clicked.length >= 24 && clicked.length < 32 ? (
          <>
            <RewardsArea>
              <BsStar />
              <BsStar />
              <BsStar />
            </RewardsArea>
          </>
        ) : null}
        {clicked.length === 32 ? (
          <>
            <RewardsArea>
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </RewardsArea>
          </>
        ) : null}
      </Rewards>
      <ContentBox>
        <Window content={object} />
        <CharsWrapper>
          <LettersBox>
            {newList.map((obj) => (
              <Div
                key={obj.id}
                onClick={() => {
                  setObject(obj);
                  rewardChecker(object, clicked, setClicked);
                  levelChecker(clicked,setLevel)
                  // setClicked(() => [...clicked, obj.letter]);
                }}
              >
                <h3>{obj.letter}</h3>
              </Div>
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
              <FaRegArrowAltCircleLeft />
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
              <FaRegArrowAltCircleRight />
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
  justify-content: center;
  flex-wrap: wrap;
  background-color: grey;
  height: 100vh;
  width: 100vw;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  height: 70px;
  width: 70px;
  margin: 10px;
  border-radius: 50%;
  border: solid rebeccapurple 6px;
  background-color: turquoise;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    box-shadow: 10px 10px 10px rgba(76, 129, 172, 0.836);
    transform: scale(1.1);
  }
`;

const Rewards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  border: 2px solid tan;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  border: 2px solid black;
  box-sizing: border-box;
`;

const CharsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 490px;
  width: 320px;
  padding: 0;
  margin-left: 25px;
  border: 2px blue solid;
  border-radius: 25px;
`;

const LettersBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  height: 390px;
  width: 320px;
  /* border: 2.5px red solid; */
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const ArrowsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 320px;
  border: 1.5px solid black;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const Button = styled.div`
  ${buttonA}
`;

const RewardsArea = styled.h1`
  font-size: 50px;
`;
