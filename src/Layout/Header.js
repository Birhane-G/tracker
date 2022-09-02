import React from "react";
import logo from "../images/Trackerlogo.png";
import "../Styles/header_style.css";
function Header() {
  return (
    <header id="navbar">
      <div className="Header-cont">
        <div className="logo">
          <img src={logo} alt="Tracker Logo" />
          <h1>Tracker</h1>
        </div>
        <div className="navbar">
          <nav className="navigation">
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/">
                <li>Partners</li>
              </a>
              <a href="/">
                <li>Service</li>
              </a>
              <a href="/">
                <li>About us</li>
              </a>
              <a href="/">
                <li>Help?</li>
              </a>
              <a href="/">
                <li className="login">Login</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
