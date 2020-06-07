const buttonA = `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 70px;
width: 70px;
font-size:40px;
border: double rebeccapurple 4.5px;
color:blue;
border-radius: 50%;
background-color: turquoise;
cursor: pointer;
transition: 100ms;
  &:active {
    transform: scale(0.9);
  }
  @media only screen and (min-width: 0px) and (max-width: 450px) {
 width: 35px;
 height:35px;
 font-size:15px;
  }
    `;

const buttonB = `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 70px;
width: 70px;
font-size:30px;
border: 4.5px rebeccapurple double;
border-radius: 50%;
color:blue;
background-color:turquoise;
cursor: pointer;
transition: 100ms;
  &:active {
    transform: scale(0.9);
  }
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    width: 35px;
    height:35px;
    font-size:15px;
     }
`;
export { buttonA, buttonB };



// @media only screen and (min-width: 371px) and (max-width: 799px) {
//   width: 50px;
//   height:50px;
//   font-size:15px;
// }