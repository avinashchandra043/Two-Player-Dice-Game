import { Button } from "@mui/material";
import React, { useState } from "react";
import PlayerData from "./PlayerData";

function PlayerCard(props) {
  const [playerData, setPlayerData] = useState([]);
  const handleNo = props.NoOfPlayer;
  let a = [];
  for (let i = 0; i < handleNo; i++) a = [...a, i + 1];
  //   let playerValue = [];
  //   const handleEachPlayerSubmit = (value) => {
  //     console.log(value);
  //     playerValue[value] = [name, age, gender];
  //     console.log(playerValue);
  //   };
  return (
    <>
      {a.map((value) => (
        <PlayerData index={value} />
      ))}
    </>
  );
}

export default PlayerCard;
