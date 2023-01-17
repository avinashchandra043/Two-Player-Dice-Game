import { Button } from "@mui/material";
import React, { useState } from "react";
import PlayerData from "./PlayerData";

function PlayerCard(props) {
  const handleNo = props.NoOfPlayer;
  let a = [];
  for (let i = 0; i < handleNo; i++) a = [...a, i + 1];
  return (
    <>
      {a.map((value) => {
        console.log("coming");
        return <PlayerData index={value} />;
      })}
    </>
  );
}

export default PlayerCard;
