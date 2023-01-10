import { useState } from "react";
import "./GamePage.css";
import DiceHandler from "../dice/diceHandler";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import diceRoll from "./sound/dice_roll.wav";
import WinnerList from "./WinnerList";
function GamePage(props) {
  const [randomValue, setRandomValue] = useState();
  const [chance, setChance] = useState(() => 1);
  const [score1, setScore1] = useState(() => 0);
  const [score2, setScore2] = useState(() => 0);
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  let playerName1 = props.playerInfo[0];
  const playerAge1 = props.playerInfo[1];
  const playerGender1 = props.playerInfo[2];
  let playerName2 = props.playerInfo[3];
  const playerAge2 = props.playerInfo[4];
  const playerGender2 = props.playerInfo[5];
  if (playerName1 === undefined) playerName1 = "Player 1";
  if (playerName2 === undefined) playerName2 = "Player 2";
  let pid1 = document.getElementById("pi1");
  let pid2 = document.getElementById("pi2");
  let pc1 = document.getElementById("pc1");
  let pc2 = document.getElementById("pc2");
  const handleRandomNum = (event) => {
    event.preventDefault();
    if (score1 < 20 && score2 < 20) {
      const audio = new Audio(diceRoll);
      audio.play();
      let valueOfRandomNo = Math.floor(Math.random() * 6 + 1);
      setRandomValue(valueOfRandomNo);
      if (chance & 1) {
        setScore1((prevValue) => prevValue + valueOfRandomNo);
        if (score1 + valueOfRandomNo >= 20) {
          setChance((prevValue) => 0);
          pid1.innerHTML = "won";
          pid2.innerHTML = "lose";
          pc1.style.background = "green";
          pc2.style.background = "red";

          setArr([playerName1, ...arr]);
        }
      } else {
        setScore2((prevValue) => prevValue + valueOfRandomNo);
        if (score2 + valueOfRandomNo >= 20) {
          setChance((prevValue) => 0);
          pid1.innerHTML = "lose";
          pid2.innerHTML = "won";
          pc1.style.background = "red";
          pc2.style.background = "green";

          setArr([playerName2, ...arr]);
        }
      }
      setChance((prevValue) => prevValue + 1);
      console.log(score1, score2);
    }
  };
  const handleQuito = (event) => {
    event.preventDefault();
    setChance((prevValue) => 0);
    pid1.innerHTML = "lose";
    pid2.innerHTML = "won";
    pc1.style.background = "red";
    pc2.style.background = "green";
    setArr([playerName2, ...arr]);
  };
  const handleQuitt = (event) => {
    event.preventDefault();
    setChance((prevValue) => 0);
    pid1.innerHTML = "won";
    pid2.innerHTML = "lose";
    pc1.style.background = "green";
    pc2.style.background = "red";
    setArr([playerName1, ...arr]);
  };
  const handleQuit = (event) => {
    event.preventDefault();
    setChance((prevValue) => 1);
    setScore1((prevValue) => 0);
    setScore2((prevValue) => 0);
    navigate("/");
  };
  const handleNewGame = (event) => {
    event.preventDefault();
    setScore1((prevValue) => 0);
    setScore2((prevValue) => 0);
    setChance((prevValue) => 1);
    pid1.innerHTML = "";
    pid2.innerHTML = "";
    pc1.style.background = pc2.style.background = "rgb(48, 222, 245)";
  };
  return (
    <>
      <div className="GamePage">
        <div className="inner_box">
          <div id="pc1" className="p1">
            <div className="playerInfo">
              <div className="playerName">{playerName1}</div>
              <div className="personalDetail">
                <div className="gender">Gender: {playerGender1}</div>|
                <div className="age">Age: {playerAge1}</div>
              </div>
            </div>
            <div className="playerScore">
              <div id="pi1"></div>
              <div>{score1}</div>
            </div>
            <div className="quitButton">
              <Button variant="contained" onClick={handleQuito}>
                quit Player 1
              </Button>
            </div>
          </div>
          <div id="pc2" className="p2">
            <div className="playerInfo">
              <div className="playerName">{playerName2}</div>
              <div className="personalDetail">
                <div className="gender">Gender: {playerGender2}</div>|
                <div className="age">Age: {playerAge2}</div>
              </div>
            </div>
            <div className="playerScore">
              <div id="pi2"></div>
              <div>{score2}</div>
            </div>
            <div className="quitButton">
              <Button variant="contained" onClick={handleQuitt}>
                quit Player 2
              </Button>
            </div>
          </div>
        </div>
        <div className="dice_box">
          <div id="dice" className="dice_out" onClick={handleRandomNum}>
            <DiceHandler value={randomValue}></DiceHandler>
          </div>
          {chance & 1 ? playerName1 : playerName2} chance
        </div>
        <div className="GameButton">
          <div className="newGame">
            <Button variant="contained" onClick={handleNewGame}>
              New Game
            </Button>
          </div>
          <div className="quitGame">
            <Button variant="contained" onClick={handleQuit}>
              Quit Game
            </Button>
          </div>
        </div>
      </div>
      <WinnerList PlayerList={arr} />
    </>
  );
}

export default GamePage;
