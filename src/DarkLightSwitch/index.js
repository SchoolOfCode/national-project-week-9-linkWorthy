import React from "react";
import "./styles.css";

function DarkLightSwitch({ onClick }) {
  return (
    <label className="switch">
      <input type="checkbox" onClick={onClick} />

      <span className="slider round"></span>
    </label>

    // <button onClick={onClick}>Switch2</button>
  );
}

export default DarkLightSwitch;
