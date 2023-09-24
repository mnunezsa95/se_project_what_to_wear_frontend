import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ clothingItems, onCreateModal, onSelectCard, onSignOut, onEditModal }) {
  return (
    <div className="profile__container">
      <SideBar onSignOut={onSignOut} onEditModal={onEditModal} />
      <ClothesSection onSelectCard={onSelectCard} onCreateModal={onCreateModal} clothingItems={clothingItems} />
    </div>
  );
}

export default Profile;
