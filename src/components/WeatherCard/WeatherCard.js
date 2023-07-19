import React from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

function WeatherCard({ weatherTemp = "Tempature N/A", weatherId }) {
  const imageSrc = weatherOptions.filter((i) => {
    const imageGroupId = i.weatherId && i?.weatherId.toString().charAt(0);
    const apiGroupId = weatherId.toString().charAt(0);
    return i.weatherId === weatherId || imageGroupId === apiGroupId;
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
