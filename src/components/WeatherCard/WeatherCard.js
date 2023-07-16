import React from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

function WeatherCard({ isDuringDay, weatherType, weatherTemp = "Unable to get Temp" }) {
  const imageSrc = weatherOptions.filter((i) => {
    return i.isDuringDay === isDuringDay && i.weatherType === weatherType;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}° F</div>
      <img className="weather__image" src={imageSrcUrl} alt="Sunny Day" />
    </section>
  );
}

export default WeatherCard;
