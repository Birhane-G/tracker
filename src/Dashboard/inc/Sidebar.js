import React from "react";
import "../style/sidebar.css";
function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="side-top-logo-container"></div>
        <div className="side-bar-content">
          <div className="side-bar-center-content">
            <div className="side-bar-top-content-nav">
              <ul>
              <a href="/"><li>Dashboard</li></a>
              <a href="/"><li>Visitor</li></a>
              <a href="/"><li>PageView</li></a>
              <a href="/"><li>Device</li></a>
              <a href="/"><li>Location</li></a>
              </ul>
            </div>
            <div className="side-bar-center-content-nav">
              <ul>
              <a href="/"><li>Dashboard</li></a>
              <a href="/"><li>Setting</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
