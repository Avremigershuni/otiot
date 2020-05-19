import React from "react";
import styled from "styled-components";
// import { TiMail } from "react-icons/ti";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";


const Footer = () => {
  return (
    <Ftr>
      <TextArea>
        <H4>Developed by Avremi Gershuni</H4>
        <H4>© All Rights Reserved</H4>
      </TextArea>
      <Links>
        <A href="mailto:Amgershuni@gmail.com">
          <MdMail />
        </A>
        <A href="https://www.linkedin.com/in/avremi-gershuni-2a3799195/">
          <AiOutlineLinkedin />
        </A>
      </Links>
    </Ftr>
  );
};
export default Footer;

const Ftr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  width: 100%;
  margin:0;
  background: rgb(26, 34, 44);
  position: fixed;
  bottom: 0;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-basis:50%;
  height: 40px;
  padding:0;
  color:white;
  border:2px black solid;
  /* margin-left:15%; */
`;

const H4 = styled.h4`
  font-size: 15px;
  margin: 0;
  color:#555;
  margin-left:250px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis:50%;
  /* margin-right:20%; */
`;

const A = styled.a`
  font-size: 25px;
  color:#555;
  margin: 5px;
`;
