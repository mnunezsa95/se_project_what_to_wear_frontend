import React from "react";
import "./Header.css";
// import logoPath from "../../images/logo.svg"; // might delete
// import avatarPath from "../../images/avatar.svg";

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

  //   return (
  //     <div>
  //       <header className="header">
  //         <div className="header__container">
  //           <div>
  //             <img src={logoPath} alt="WTWR Logo"></img>
  //           </div>
  //           <p>{currentDate}</p>
  //         </div>
  //         <div className="header__avatar">
  //           <div>
  //             <button className="header__nav__button" type="text">
  //               +Add New Clothes
  //             </button>
  //           </div>
  //           <div>{username}</div>
  //           <div>
  //             <img src={avatarPath} alt="Profile Avatar"></img>
  //           </div>
  //         </div>
  //       </header>
  //     </div>
  //   );
}

export default Header;
