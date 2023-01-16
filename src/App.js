import { useEffect, useState } from "react";
import "./App.css";
import DiceHandler from "./components/dice/diceHandler";
import GamePage from "./components/pages/GamePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NewHome from "./components/pages/NewHome";
function App() {
  const [playerInfo, setPlayerInfo] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setArrFunc={setPlayerInfo} />} />
        <Route path="/game" element={<GamePage playerInfo={playerInfo} />} />
      </Routes>
    </Router>
  );
}

export default App;
