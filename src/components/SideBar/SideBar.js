import React from "react";
import "./SideBar.css";
import { username } from "../../utils/constants";
import avatarImage from "../../images/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__container-info">
        <img src={avatarImage} alt="Profile Avatar" className="sidebar__avatar" />
        <p className="sidebar_profile-name">{username}</p>
      </div>
      <div className="sidebar__container-buttons">
        <button className="side__container-button" type="button">
          Change profile data
        </button>
        <button className="side__container-button" type="button">
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
