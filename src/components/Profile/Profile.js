import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ clothingItems, onCreateModal, onSelectCard, onSignOut, onEditModal, onCardLike }) {
  return (
    <div className="profile__container">
      <SideBar onSignOut={onSignOut} onEditModal={onEditModal} />
      <ClothesSection onSelectCard={onSelectCard} onCreateModal={onCreateModal} clothingItems={clothingItems} onCardLike={onCardLike} />
    </div>
  );
}

export default Profile;
