import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../images/logo2.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";
import { username } from "../../utils/constants.js";

function Header({ onCreateModal, currentLocation = "Location N/A", isLoggedIn, onRegisterModal, onLoginModal }) {
  const currentDate = new Date().toLocaleDateString("default", { year: "numeric", month: "long", day: "numeric" });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={headerLogo} alt="WTWR logo" className="header__logo" />
        </Link>
        <p className="header__date">{currentDate},</p>
        <p className="header__city">{currentLocation}</p>
      </div>
      <ToggleSwitch />
      {isLoggedIn ? (
        <div className="header__nav">
          <nav className="header__nav-section">
            <ul className="header__nav-container">
              <li>
                <button className="header__nav__button" type="text" onClick={onCreateModal}>
                  + Add New Clothes
                </button>
              </li>
              <li>
                <Link to="/profile">
                  <div className="header__nav-link">
                    {username}
                    <img src={avatarImage} alt="Profile Avatar" className="header__nav-avatar" />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="header__nav">
          <nav className="header__nav-section">
            <ul className="header__nav-container">
              <li>
                <button className="header__nav__button" type="text" onClick={onRegisterModal}>
                  Sign Up
                </button>
              </li>
              <li>
                <button className="header__nav__button" type="text" onClick={onLoginModal}>
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
