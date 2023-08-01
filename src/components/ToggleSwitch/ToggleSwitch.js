import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(CurrentTemperatureUnitContext);
  return (
    <label className="toggleSwitch">
      <input className="toggleSwitch__box" type="checkbox" onChange={handleToggleSwitchChange}></input>
      <span className={currentTemperatureUnit === "F" ? "toggleSwitch__slider toggleSwitch__slider-F" : "toggleSwitch__slider toggleSwitch__slider-C"}></span>
      <p className={`toggleSwitch__temp-F ${currentTemperatureUnit === "F" && "toggleSwitch__active-F"}`}>F</p>
      <p className={`toggleSwitch__temp-C ${currentTemperatureUnit === "C" && "toggleSwitch__active-C"}`}>C</p>
    </label>
  );
}

export default ToggleSwitch;
