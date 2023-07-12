import React from "react";
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <div>
      <div className="card__container">
        <p className="card__name">{item.name}</p>
        <img className="card__image" src={item.link} alt={item.name}></img>
      </div>
    </div>
  );
}

export default ItemCard;
