import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ clothingItems, onCreateModal, onSelectCard }) {
  return (
    <div className="profile__container">
      <SideBar />
      <ClothesSection onSelectCard={onSelectCard} onCreateModal={onCreateModal} clothingItems={clothingItems} />
    </div>
  );
}

export default Profile;
