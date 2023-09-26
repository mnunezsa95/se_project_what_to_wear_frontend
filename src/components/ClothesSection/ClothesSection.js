import { React, useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";

function ClothesSection({ onSelectCard, onCreateModal, clothingItems, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser._id;
  const serverCards = clothingItems.filter((item) => {
    return item.owner === userId;
  });
  return (
    <div className="clothes__section-container">
      <div className="clothes__section-header-container">
        <p className="clothes__section-text">Your Items</p>
        <button className="clothes__section-button" type="text" onClick={onCreateModal}>
          + Add New
        </button>
      </div>
      <div className="clothes__section-card-items">
        {serverCards.map((item) => (
          <ItemCard item={item} key={item?.id ?? item?._id} onSelectCard={onSelectCard} onCardLike={onCardLike} isLoggedIn={isLoggedIn} /> // optional chaining as error safety net
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
