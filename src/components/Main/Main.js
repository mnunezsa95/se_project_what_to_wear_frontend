import React from "react";
import "./Main.css";
import sunnyDay from "../../images/day_sunny.svg";

function Main() {
  return (
    <main className="main">
      <section className="weather">
        <div className="weather__info">75F</div>
        <img className="weather__image" src={sunnyDay} alt="Sunny Day" />
      </section>
    </main>
  );
}

export default Main;
