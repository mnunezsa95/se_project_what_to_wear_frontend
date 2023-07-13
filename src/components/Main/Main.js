import React from "react";
import "./Main.css";
import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main() {
  const weatherTemp = "75° F";
  return (
    <main className="main">
      <WeatherCard isDuringDay={false} weatherType="snow" weatherTemp={weatherTemp} />
      <section className="main__section-card">
        Today is {weatherTemp} / You may want to wear:
        <div className="main__section-card-items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} key={item?.id || item?._id} /> // optional chaining as error safety net
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
