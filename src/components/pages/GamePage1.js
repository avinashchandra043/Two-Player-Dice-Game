import React from "react";
import { connect } from "react-redux";
import "./GamePage1.css";

function GamePage1({ playerStoredData }) {
  console.log(playerStoredData);
  return (
    <div className="changed_value">
      {playerStoredData.map((value) => (
        <div>
          {value[0]} {value[1]} {value[2]}
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    playerStoredData: state.my.playerStoredData,
    currentData: state.my.currentData,
  };
};
export default connect(mapStateToProps)(GamePage1);
