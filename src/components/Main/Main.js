import React from "react";
import "./Main.css";
import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard isDuringDay={false} weatherType="snow" />
      <section className="main__section-card">
        Today is 75° F / You may want to wear:
        <div className="main__card-items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} key={item?.id || item?._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
