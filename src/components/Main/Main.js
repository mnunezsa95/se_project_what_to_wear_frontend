import React from "react";
import "./Main.css";
import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { getWeatherType } from "../../utils/weatherAPI";

function Main({ onSelectCard, weatherTemp, weatherId }) {
  // const weatherType = getWeatherType(weatherTemp); // could do it this way, but would add more variables
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === getWeatherType(weatherTemp);
  });
  return (
    <main className="main">
      <WeatherCard isDuringDay={false} weatherType="snow" weatherTemp={weatherTemp} weatherId={weatherId} />
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
