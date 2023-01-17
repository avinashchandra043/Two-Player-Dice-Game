import { useEffect, useState } from "react";
import "./App.css";
import DiceHandler from "./components/dice/diceHandler";
import GamePage from "./components/pages/GamePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NewHome from "./components/pages/NewHome";
import GamePage1 from "./components/pages/GamePage1";
function App() {
  const [playerInfo, setPlayerInfo] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHome setArrFunc={setPlayerInfo} />} />
        <Route path="/game" element={<GamePage1 playerInfo={playerInfo} />} />
      </Routes>
    </Router>
  );
}

export default App;
