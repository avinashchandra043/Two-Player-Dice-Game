import React, { useState } from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import PlayerCard from "./PlayerCard";
import { connect } from "react-redux";

function Home({ setArrFunc, playerStoredData }) {
  const navigate = useNavigate();
  const [playerNo, setPlayerNo] = useState("");
  const [playerInput, setPlayerInput] = useState(() => false);
  //   const [playerName1, setPlayerName1] = useState("Player 1");
  //   const [playerAge1, setPlayerAge1] = useState("");
  //   const [playerGender1, setPlayerGender1] = useState("");
  //   const [playerName2, setPlayerName2] = useState("Player 2");
  //   const [playerAge2, setPlayerAge2] = useState("");
  //   const [playerGender2, setPlayerGender2] = useState("");
  const handleStartGame = (event) => {
    event.preventDefault();
    if (playerStoredData.length + 1 < playerNo) {
      alert("save all the fields");
      return;
    } else {
      console.log(playerStoredData);
      navigate("/game");
    }
  };
  const checkAuth = (event) => {
    event.preventDefault();
    if (playerNo < 2) {
      alert("select more than 2 player");
      return;
    }
    setPlayerInput(true);
  };
  return (
    <div className="main_body">
      <div className="heading">Multi Player Dice Game</div>
      <div className="heading">
        <div>
          <input
            type="number"
            placeholder="Enter Number Of Player"
            onChange={(e) => setPlayerNo(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained" onClick={checkAuth}>
            Submit
          </Button>
        </div>
      </div>
      <div className="playerInfo_home_outer">
        <div className="playerInfo_home">
          {playerInput && <PlayerCard NoOfPlayer={playerNo} />}
        </div>
      </div>
      <div className="start_button">
        <Button variant="contained" onClick={handleStartGame}>
          Start Game
        </Button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    playerStoredData: state.my.playerStoredData,
    currentData: state.my.currentData,
  };
};
export default connect(mapStateToProps)(Home);
