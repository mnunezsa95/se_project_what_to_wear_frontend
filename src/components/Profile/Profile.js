import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ clothingItems, onCreateModal, onSelectCard, onSignOut }) {
  return (
    <div className="profile__container">
      <SideBar onSignOut={onSignOut} />
      <ClothesSection onSelectCard={onSelectCard} onCreateModal={onCreateModal} clothingItems={clothingItems} />
    </div>
  );
}

export default Profile;
