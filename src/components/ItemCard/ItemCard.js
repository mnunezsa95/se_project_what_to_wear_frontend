import React from "react";
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <div>
      <div className="card__container">
        <div class="card__info">
          <p className="card__name">{item.name}</p>
          <button className="card__like-button" type="button"></button>
        </div>
        <img className="card__image" src={item.link} alt={item.name}></img>
      </div>
    </div>
  );
}

export default ItemCard;
