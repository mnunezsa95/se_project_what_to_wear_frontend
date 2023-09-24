import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { getWeatherTempRange } from "../../utils/weatherAPI";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ onSelectCard, weatherTemp, weatherId, clothingItems }) {
  const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);
  console.log(weatherTemp.temperature);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || "";
  const filteredCards = clothingItems.filter((item) => {
    console.log(item.weather);
    console.log(item._id);
    return item.weather.toLowerCase() === getWeatherTempRange(temp, currentTemperatureUnit);
  });

  return (
    <main className="main">
      <WeatherCard weatherTemp={temp} weatherId={weatherId} />
      <section className="main__section-card">
        Today is {temp} °{currentTemperatureUnit} / You may want to wear:
        <div className="main__section-card-items">
          {filteredCards.map((item) => (
            <ItemCard item={item} key={item?.id ?? item?._id} onSelectCard={onSelectCard} /> // optional chaining as error safety net
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
