import { React, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  const userAvatar = currentUser ? currentUser.avatar : null;
  const userName = currentUser ? currentUser.name : null;
  return (
    <div className="sidebar__container">
      <div className="sidebar__container-info">
        <img src={userAvatar} alt="Profile Avatar" className="sidebar__avatar" />
        <p className="sidebar_profile-name">{userName}</p>
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
