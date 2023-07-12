import React from "react";
import "./WeatherCard.css";
import sunnyDay from "../../images/day_sunny.svg";

function WeatherCard() {
  return (
    <section className="weather">
      <div className="weather__info">75F</div>
      <img className="weather__image" src={sunnyDay} alt="Sunny Day" />
    </section>
  );
}

export default WeatherCard;
