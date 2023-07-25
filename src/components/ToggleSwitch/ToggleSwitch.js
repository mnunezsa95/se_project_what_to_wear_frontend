import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTempatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(CurrentTemperatureUnitContext);
  return (
    <label className="switch">
      <input className="switch__box" type="checkbox" onChange={handleToggleSwitchChange}></input>
      <span className={currentTemperatureUnit === "F" ? "switch__slider switch__slider-F" : "switch__slider switch__slider-C"}></span>
      <p className={`switch__temp-F ${currentTemperatureUnit === "F" && "switch__active"}`}>F</p>
      <p className={`switch__temp-C ${currentTemperatureUnit === "C" && "switch__active"}`}>C</p>
    </label>
  );
}

export default ToggleSwitch;
