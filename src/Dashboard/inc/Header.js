import React from "react";
import { FiLogOut } from "react-icons/fi";

import "../style/header.css";
export const Header = ({ children }) => {
  return (
    <section>
      <div className="Header-container">
        <div className="header">
          <div className="header-right">
            <div className="icons">
              <div className="logout">
                <FiLogOut style={{ fontSize: "26px" }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="children">{children}</div>
    </section>
  );
};
