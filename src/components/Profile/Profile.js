import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile() {
  return (
    <div className="profile__container">
      <SideBar />
      <ClothesSection />
    </div>
  );
}

export default Profile;
