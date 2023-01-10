import "./dice.css";
import Dice1 from "./dice1";
import Dice2 from "./dice2";
import Dice3 from "./dice3";
import Dice4 from "./dice4";
import Dice5 from "./dice5";
import Dice6 from "./dice6";
const Dice = (props) => {
  let x = props.value;
  if (x === 1) {
    return <Dice1></Dice1>;
  } else if (x === 2) {
    return <Dice2></Dice2>;
  } else if (x === 3) {
    return <Dice3></Dice3>;
  } else if (x === 4) {
    return <Dice4></Dice4>;
  } else if (x === 5) {
    return <Dice5></Dice5>;
  } else {
    return <Dice6></Dice6>;
  }
};

export default Dice;
