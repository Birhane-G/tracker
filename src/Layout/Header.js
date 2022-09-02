import React from "react";

function Header() {
  return (
    <header>
      <div className="Header-cont">
        <div className="logo">
            <img src="" alt="" />
            <h1>Tracker</h1>
        </div>
        <div className='navbar'>
        <nav className='navigation'>
          <ul>
            <a href='/'><li>Home</li></a>
            <a href='/'><li>Portifolio</li></a>
            <a href='/'><li>Service</li></a>
            <a href='/'><li>About us</li></a>
            <a href='/'><li>Contact</li></a>
        </ul>
      </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
