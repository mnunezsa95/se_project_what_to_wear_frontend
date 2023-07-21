import React from "react";
import "./Main.css";
import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { getWeatherTempRange } from "../../utils/weatherAPI";

function Main({ onSelectCard, weatherTemp, weatherId }) {
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === getWeatherTempRange(weatherTemp);
  });
  return (
    <main className="main">
      <WeatherCard weatherTemp={weatherTemp} weatherId={weatherId} />
      <section className="main__section-card">
        Today is {weatherTemp}° F / You may want to wear:
        <div className="main__section-card-items">
          {filteredCards.map((item) => (
            <ItemCard item={item} key={item?.id || item?._id} onSelectCard={onSelectCard} /> // optional chaining as error safety net
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
