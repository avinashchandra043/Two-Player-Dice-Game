import { Button } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { changeCD, changePSD } from "../../store/myAction";

function PlayerData({ index, playerStoredData, currentData, changeCD }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const value = index;
  const handleEachPlayerSubmit = (event) => {
    event.preventDefault();
    if (name === undefined) {
      setName(`Player ${index}`);
    }
    if (age < 0) {
      alert("input correct age");
      return;
    }
    let data = [name, age, gender, value];
    changeCD(data);
  };
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
      <Button variant="contained" onClick={handleEachPlayerSubmit}>
        Save
      </Button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    playerStoredData: state.my.playerStoredData,
    currentData: state.my.currentData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeCD: (value) => dispatch(changeCD(value)),
    changePSD: (value) => dispatch(changePSD(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerData);
