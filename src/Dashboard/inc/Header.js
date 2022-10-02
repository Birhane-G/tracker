import React from "react";
import "../style/header.css"
export const Header = ({ children }) => {
  return (
    <section>
      <div className="Header-container">
        <div className="header"></div>
      </div>
      <div className="children">{children}</div>
    </section>
  );
};
