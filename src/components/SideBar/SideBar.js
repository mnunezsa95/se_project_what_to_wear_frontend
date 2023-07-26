import React from "react";
import "./SideBar.css";
import { username } from "../../utils/constants";
import avatarImage from "../../images/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar__container">
      <img src={avatarImage} alt="Profile Avatar" className="sidebar__avatar" />
      <p className="sidebar_profile-name">{username}</p>
    </div>
  );
}

export default SideBar;
