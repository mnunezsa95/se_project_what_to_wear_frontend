import React from "react";
import "./Main.css";
import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { getWeatherTempRange } from "../../utils/weatherAPI";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTempatureUnitContext";

function Main({ onSelectCard, weatherTemp, weatherId }) {
  const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || "";
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === getWeatherTempRange(weatherTemp);
  });
  return (
    <main className="main">
      <WeatherCard weatherTemp={temp} weatherId={weatherId} />
      <section className="main__section-card">
        Today is {temp} °{currentTemperatureUnit} / You may want to wear:
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
