import React from "react";
import styled from "styled-components";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";

const About = () => {
  return (
    <Wrapper>
      <H1>:אודות</H1>
      <Line>
        <Icon>
          <GiBookCover />
        </Icon>
        <P>
          משחק זה פותח על מנת לייצר למידה חווייתית ונעימה לילדים 
          המתחילים את לימוד האותיות
        </P>
      </Line>
      <H1>:שלבי המשחק</H1>
      <Line>
        <Icon>
          <GiBookCover />
        </Icon>
        <P>
          על המסך שלפניכם מופיע לוח ולצידו חלונית בכל פעם שתלחצו על אות היא
          תופיע בגדול בחלונית הסמוכה
        </P>
      </Line>
      <Line>
        <Icon>
          <GiBookCover />
        </Icon>
        <P>
          בלחיצה על כפתור השמע הממוקם בין החיצים יושמע שם האות המופיעה בחלונית
        </P>
      </Line>
      <Line>
        <Icon>
          <GiBookCover />
        </Icon>
        <P>
          בלחיצה על כפתור התמונה שתחת האות הגדולה תוצג תמונה שקשורה לאות המוצגת
        </P>
      </Line>
      <Line>
        <Icon>
          <GiBookCover />
        </Icon>
        <P>
          בכדי לקבל חיווי אחר ההתקדמות במשחק: צבעה של האות ישתנה לאחר שתבחרו בה
        </P>
      </Line>
      <Line>
        <Icon>
          <GiBookCover />
        </Icon>
        <P>
          בסיום לימוד כל שמונה האותיות המופיעות לפניכם תפיע הודעה על כך שסיימתם
          את השלב
        </P>
      </Line>
      <Footer>
        <TextArea>
          <H4>Developed by Avremi Gershuni</H4>
          <H4>© All Rights Reserved</H4>
        </TextArea>
        <Links>
          <A href="mailto:Amgershuni@gmail.com">
            <MdMail />
          </A>
          <A
            target="_blank"
            href="https://www.linkedin.com/in/avremi-gershuni-2a3799195/"
          >
            <AiOutlineLinkedin />
          </A>
        </Links>
      </Footer>
    </Wrapper>
  );
};
export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 700px;
  width: 850px;
  /* padding-right: 25px;
  padding-left: 15px; */
  /* padding:30px; */
  border-radius: 25px;
  background-color: #a2e255;
  /* border: red 2px solid; */
  /* overflow:scroll; */
  position: absolute;
  top: 100px;
  z-index: 999;
  box-shadow: 10px 1px 10px -3px rgba(0, 0, 0, 0.47);
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-family: "Secular One", sans-serif;
  color: saddlebrown;
  margin-bottom: 15px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-sizing:border-box;
  /* border: 2px solid black; */
  padding-left: 25px;
  text-align: right;
  margin-bottom: 12px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
  font-size: 30px;
  /* border: 2px solid black; */
`;

const P = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  /* align-items: center; */
  flex-basis: 90%;
  font-size: 23px;
  font-family: "Secular One", sans-serif;
  color: saddlebrown;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  width: 100%;
  margin: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: saddlebrown;
  /* background: rgb(26, 34, 44); */
  position: absolute;
  bottom: 0;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 50%;
  height: 40px;
  padding: 0;
  color: white;
  /* border:2px black solid; */
  /* margin-left:15%; */
`;

const H4 = styled.h4`
  font-size: 15px;
  margin: 0;
  color: greenyellow;
  /* color:#555; */
  margin-left: 50px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  /* margin-right:20%; */
`;

const A = styled.a`
  font-size: 25px;
  color: greenyellow;
  margin: 5px;
`;
