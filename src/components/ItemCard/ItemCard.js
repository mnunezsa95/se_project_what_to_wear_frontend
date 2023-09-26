import { React, useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onSelectCard, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const cardId = item._id;
  console.log(cardId);
  const userId = currentUser ? currentUser._id : "";
  console.log(userId);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const likeButtonClass = isLiked ? "card__like-button" : "card__like-button card__like-button-inactive";
  const handleLikeClick = () => {
    onCardLike({ id: cardId, isLiked: isLiked, user: userId });
  };

  return (
    <div className="card__container">
      <div className="card__info">
        <p className="card__name">{item.name}</p>
        <button className={likeButtonClass} type="button" onClick={handleLikeClick} />
      </div>
      <img className="card__image" src={item.imageUrl} alt={item.name} onClick={() => onSelectCard(item)} />
    </div>
  );
}

export default ItemCard;
