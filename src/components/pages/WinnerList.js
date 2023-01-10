import React from "react";
import "./WinnerList.css";
function WinnerList(props) {
  console.log(props.PlayerList);
  return (
    <div className="outer_winner_list">
      <div className="winner_heading">Winner List</div>
      <div className="PlayerList">
        {props.PlayerList.map((name) => (
          <div className="wlist">{name} won</div>
        ))}
      </div>
    </div>
  );
}

export default WinnerList;
