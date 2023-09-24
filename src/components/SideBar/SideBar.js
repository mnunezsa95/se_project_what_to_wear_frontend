import { React, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar({ onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const userAvatar = currentUser ? currentUser.avatar : null;
  const userName = currentUser ? currentUser.name : null;
  const history = useHistory();
  const signUserOut = () => {
    onSignOut();
    history.push("/");
  };
  const showAvatar = userAvatar !== "" ? true : false;

  return (
    <div className="sidebar__container">
      <div className="sidebar__container-info">
        {showAvatar ? (
          <img className="sidebar__avatar" src={userAvatar} alt="User Avatar" />
        ) : (
          <p className="sidebar__avatar-placeholder">{userName[0]?.toUpperCase()}</p>
        )}
        <p className="sidebar_profile-name">{userName}</p>
      </div>
      <div className="sidebar__container-buttons">
        <button className="side__container-button" type="button">
          Change profile data
        </button>
        <button className="side__container-button" type="button" onClick={signUserOut}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
