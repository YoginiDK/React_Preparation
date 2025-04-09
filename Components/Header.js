import React from "react";
import logo from "/download.jpg";

const HeaderComponent = () => {
  return (
    // <img src={logo} alt="logo" className="logo" />
    // <div className="search-container">
    //   <input
    //     type="text"
    //     placeholder="Search.."
    //     name="search"
    //     className="search-input"
    //   />
    //   <button type="submit" className="search-button">
    //     <img src={searchLogo} alt="Search" />
    //   </button>
    // </div>
    // <img src={user} alt="User" className="user-icon" />

    <header className="header-bar">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul className="color-list">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>
            Cart
            {/* <img src={user} alt="User" className="user-icon" /> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
