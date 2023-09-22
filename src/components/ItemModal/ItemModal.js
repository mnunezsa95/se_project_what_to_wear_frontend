import { React, useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ selectedCard, onClose, handleDeleteCard }) {
  const userContext = useContext(CurrentUserContext);
  const userData = userContext ? userContext : { name: "n/a", avatar: "" };
  const isOwn = selectedCard.owner === userData._id;
  console.log(selectedCard.owner);
  console.log(isOwn);

  const itemDeleteButtonClassName = isOwn ? "modal__delete-button" : "modal__delete-button_hidden";
  return (
    <div className="modal">
      <div className="modal__content-card">
        <img className="modal__image" src={selectedCard.imageUrl} alt={selectedCard.name} />
        <button className="modal__close-button-image" type="button" onClick={onClose} />
        <div className="modal__info-section-container">
          <div className="modal__info">
            <p className="modal__info-name">{selectedCard.name}</p>
            <p className="modal__info-weather">Weather: {selectedCard.weather}</p>
          </div>
          <button className={itemDeleteButtonClassName} type="button" onClick={() => handleDeleteCard(selectedCard)}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
