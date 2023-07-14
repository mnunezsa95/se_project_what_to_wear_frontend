import React from "react";
import "./ItemModal.css";

function ItemModal({ selectedCard, onClose }) {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <img src={selectedCard.link} alt={selectedCard.name} />
        <button className="modal__close-button" type="button" onClick={onClose} />
        <p>{selectedCard.name}</p>
        <p>Weather type: {selectedCard.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
