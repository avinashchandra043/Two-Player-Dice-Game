import React, { useState } from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

function Home({ setArrFunc }) {
  const navigate = useNavigate();
  const [playerName1, setPlayerName1] = useState("Player 1");
  const [playerAge1, setPlayerAge1] = useState("");
  const [playerGender1, setPlayerGender1] = useState("");
  const [playerName2, setPlayerName2] = useState("Player 2");
  const [playerAge2, setPlayerAge2] = useState("");
  const [playerGender2, setPlayerGender2] = useState("");
  const handleStartGame = (event) => {
    event.preventDefault();
    if (playerAge1 < 0 || playerAge2 < 0) {
      alert(`Enter non negative age`);
    } else {
      const playerInfo = [
        playerName1,
        playerAge1,
        playerGender1,
        playerName2,
        playerAge2,
        playerGender2,
      ];
      setArrFunc(playerInfo);
      navigate("/game");
    }
  };
  return (
    <div className="main_body">
      <div className="heading">Two Player Dice Game</div>
      <div className="playerInfo_home_outer">
        <div className="playerInfo_home">
          <div className="player1">
            <input
              type="text"
              placeholder="Player 1"
              onChange={(e) => setPlayerName1(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              onChange={(e) => setPlayerAge1(e.target.value)}
            ></input>
            <select
              name="Gender"
              onChange={(e) => setPlayerGender1(e.target.value)}
            >
              <option value="Male">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="player2">
            <input
              type="text"
              placeholder="Player 2"
              onChange={(e) => setPlayerName2(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              onChange={(e) => setPlayerAge2(e.target.value)}
            ></input>
            <select
              name="Gender"
              onChange={(e) => setPlayerGender2(e.target.value)}
            >
              <option value="Male">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
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

export default Home;
