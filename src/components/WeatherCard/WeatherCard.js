import React from "react";
import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/day_clear.svg").default,
    isDuringDay: true,
    weatherType: "clearSky",
  },
  {
    url: require("../../images/day_cloudy.svg").default,
    isDuringDay: true,
    weatherType: "cloudy",
  },
  {
    url: require("../../images/day_rain.svg").default,
    isDuringDay: true,
    weatherType: "rain",
  },
  {
    url: require("../../images/day_storm.svg").default,
    isDuringDay: true,
    weatherType: "storm",
  },
  {
    url: require("../../images/day_snow.svg").default,
    isDuringDay: true,
    weatherType: "snow",
  },
  {
    url: require("../../images/day_fog.svg").default,
    isDuringDay: true,
    weatherType: "fog",
  },
  // Night starts below
  {
    url: require("../../images/night_clear.svg").default,
    isDuringDay: false,
    weatherType: "clearSky",
  },
  {
    url: require("../../images/night_cloudy.svg").default,
    isDuringDay: false,
    weatherType: "cloudy",
  },
  {
    url: require("../../images/night_rain.svg").default,
    isDuringDay: false,
    weatherType: "rain",
  },
  {
    url: require("../../images/night_storm.svg").default,
    isDuringDay: false,
    weatherType: "storm",
  },
  {
    url: require("../../images/night_snow.svg").default,
    isDuringDay: false,
    weatherType: "snow",
  },
  {
    url: require("../../images/night_fog.svg").default,
    isDuringDay: false,
    weatherType: "fog",
  },
];

function WeatherCard({ isDuringDay, weatherType, weatherTemp = "Unable to get Temp" }) {
  const imageSrc = weatherOptions.filter((i) => {
    return i.isDuringDay === isDuringDay && i.weatherType === weatherType;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img className="weather__image" src={imageSrcUrl} alt="Sunny Day" />
    </section>
  );
}

export default WeatherCard;
