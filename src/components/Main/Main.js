import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard isDuringDay={false} weatherType="snow" />
    </main>
  );
}

export default Main;
