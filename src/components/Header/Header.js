import React from "react";
import "./Header.css";

function Header(props) {
  const currentDate = new Date().toLocaleDateString("default", { month: "long", day: "numeric" });
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src="../../images/logo.svg" alt="WTWR Logo"></img>
          </div>
          <div>{currentDate}</div>
        </div>
        <div className="header__avatar">
          <div>
            <button className="header__nav__button" type="text">
              +Add New Clothes
            </button>
          </div>
          <div>Name</div>
          <div>
            <img src="../../images/avatar.svg" alt="Profile Avatar"></img>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
