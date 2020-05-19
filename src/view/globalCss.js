const buttonA = `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
font-size:40px;
border: double rebeccapurple 4.5px;
color:blue;
border-radius: 50%;
background-color:turquoise;
cursor: pointer;
transition: 100ms;
  &:active {
    transform: scale(0.9);
  } @media only screen and (min-width: 0px) and (max-width: 370px) {
    width: 35px;
    height:35px;
    font-size:25px;
  }
`;


const buttonB = `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
font-size:20px;
border: 4.5px rebeccapurple double;
border-radius: 50%;
color:blue;
background-color:turquoise;
cursor: pointer;
transition: 100ms;
  &:active {
    transform: scale(0.9);
  }
`;
export { buttonA, buttonB};
