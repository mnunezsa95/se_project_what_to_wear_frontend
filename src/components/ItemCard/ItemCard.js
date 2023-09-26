import { React, useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onSelectCard, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const cardId = item._id;
  const userId = currentUser ? currentUser._id : "";
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const likeButtonClass = isLiked ? "card__like-button" : "card__like-button card__like-button-inactive";
  const handleLikeClick = () => {
    onCardLike({ _id: cardId, isLiked: isLiked, user: userId });
    console.log(cardId, isLiked, userId);
  };

  return (
    <div className="card__container">
      <div className="card__info">
        <p className="card__name">{item.name}</p>
        {isLoggedIn ? <button className={likeButtonClass} type="button" onClick={handleLikeClick} /> : <button className="card__like-button-hidden" />}
      </div>
      <img className="card__image" src={item.imageUrl} alt={item.name} onClick={() => onSelectCard(item)} />
    </div>
  );
}

export default ItemCard;
