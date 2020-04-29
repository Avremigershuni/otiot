import React, { useState } from "react";
import styled from "styled-components";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { GiImperialCrown } from "react-icons/gi";
import backCards from "./backList";
import Window from "./Window";
import TopBar from "./TopBar";
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
  let [clicked, setClicked] = useState([]);
  // let minIndex = 0;
  // let maxIndex = 7;

  // const newListEditor = (arr, arg)=>{
  //   minIndex += 8;
  //   maxIndex += 8;
  //  let result = arr.filter((item)=>item.id >= minIndex && item.id <= maxIndex )
  // //  console.log("result:" + result);
  //  setNewList(result);
  // //  console.log(newList);
  // console.log(minIndex);
  // console.log(maxIndex);
  //  return result;
  // };

  const newListEditor = (arr, arg) => {
    let minIndex = 0;
    let maxIndex = 7;
    if (arg === "plus") {
      minIndex = minIndex + 8;
      maxIndex = minIndex + 8;
      if (minIndex > 24 && maxIndex > 32) {
        minIndex = 0;
        maxIndex = 7;
      }
      console.log("plus clicked", minIndex, maxIndex);
    } else if (arg === "minus") {
      minIndex -= 8;
      maxIndex -= 8;
      if (minIndex < 0 && maxIndex < 7) {
        minIndex = 23;
        maxIndex = 31;
      }
      console.log("minus clicked", minIndex, maxIndex);
    } else {
      minIndex = 0;
      maxIndex = 7;
    }
    let result = arr.filter(
      (item) => item.id >= minIndex && item.id <= maxIndex
    );
    //  console.log("result:" + result);
    setNewList(result);
    //  console.log(newList);
    console.log("min" + minIndex);
    console.log("max" + maxIndex);
    return result;
  };
const vbvb = (arg)=>{
  let a = 0;
  let b = 7;
  if(arg === "plus"){
    a = a + 8 ;
    b +=8;
    console.log(a,b);
  }
}

  return (
    <Wrapper>
      <TopBar />
      <Rewards>
        {clicked.length >= 8 && clicked.length < 16 ? (
          <h1>
            <GiImperialCrown />
          </h1>
        ) : null}
        {clicked.length >= 16 && clicked.length < 24 ? (
          <>
            <h1>
              <GiImperialCrown />
            </h1>
            <h1>
              <GiImperialCrown />
            </h1>
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
                  setClicked(() => [...clicked, obj.letter]);
                  // setClickedLetters(obj);
                  // console.log(clickedLetters);
                }}
              >
                <h3>{obj.letter}</h3>
              </Div>
            ))}
          </LettersBox>
          <ArrowsBox>
            <Button
              onClick={() => {
                newListEditor(backCards, "plus");
                vbvb( "plus");
              }}
            >
              <FaRegArrowAltCircleLeft />
            </Button>
            <Button
              onClick={() => {
                newListEditor(backCards, "minus");
                // avremi(backCards, "minus");
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
