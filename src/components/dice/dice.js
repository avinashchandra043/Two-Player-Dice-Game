import React, { useState } from "react";
import DiceHandler from "./diceHandler";
import diceRoll from "./sound/dice_roll.wav";

const Dice = () => {
  const [randValue, randomValue] = useState();

  const handleRandomNum = (event) => {
    event.preventDefault();
    const audio = new Audio(diceRoll);
    audio.play();
    let valueOfRandomNo = Math.floor(Math.random() * 6 + 1);
    randomValue(valueOfRandomNo);
  };

  return (
    <div className="dice_out" onClick={handleRandomNum}>
      <DiceHandler value={randValue}></DiceHandler>
    </div>
  );
};

export default Dice;
