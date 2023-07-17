import React from "react";
import "./ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <div className="card__container">
      <div className="card__info">
        <p className="card__name">{item.name}</p>
        <button className="card__like-button" type="button"></button>
      </div>
      <img className="card__image" src={item.link} alt={item.name} onClick={() => onSelectCard(item)}></img>
    </div>
  );
}

export default ItemCard;
