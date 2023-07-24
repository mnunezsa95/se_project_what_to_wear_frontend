import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [currentTemperatureUnit, handleToggleSwitchChange] = React.useState("C");
  const handleChange = (e) => {
    currentTemperatureUnit === "C" ? handleToggleSwitchChange("F") : handleToggleSwitchChange("C");
  };
  return (
    <div className="switch__container">
      <label className="switch">
        <input className="switch__box" type="checkbox" onChange={handleChange}></input>
        <span className={currentTemperatureUnit === "F" ? "switch__slider switch__slider-F" : "switch__slider switch__slider-C"}></span>
        <p className={`switch__temp-F ${currentTemperatureUnit === "F" && "switch__active"}`}>F</p>
        <p className={`switch__temp-C ${currentTemperatureUnit === "C" && "switch__active"}`}>C</p>
      </label>
    </div>
  );
}

export default ToggleSwitch;
