import { Button } from "@mui/material";
import React, { useState } from "react";

function PlayerData(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const value = props.index;
  const handleEachPlayerSubmit = () => {};
  return (
    <div>
      <div className="player1">
        <input
          type="text"
          placeholder={`Player ${value}`}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <select name="Gender" onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <Button variant="contained" onClick={handleEachPlayerSubmit(value)}>
        Save
      </Button>
    </div>
  );
}

export default PlayerData;
