import React from "react";
import "./Header.css";

function Header({ onCreateModal }) {
  const currentDate = new Date().toLocaleDateString("default", { month: "long", day: "numeric" });
  const username = "Marlon Nunez";

  return (
    <header className="header">
      <div className="header__container">
        <img src={require("../../images/logo.svg").default} alt="WTWR logo" className="header__logo" />
        <p className="header__date">{currentDate}</p>
      </div>
      <div className="header__nav">
        <nav className="header__nav-section">
          <ul className="header__nav-container">
            <li>
              <button className="header__nav__button" type="text" onClick={onCreateModal}>
                + Add New Clothes
              </button>
            </li>
            <li>
              <div className="header__nav-link">
                {username}
                <img src={require("../../images/avatar.svg").default} alt="Profile Avatar" className="header__nav-avatar"></img>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
