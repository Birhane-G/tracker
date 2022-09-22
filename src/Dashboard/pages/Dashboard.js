import React from "react";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="Dashboard-include-content">
        <Sidebar />
        <div className="Dashboard-all-contents">
          <div className="Dashboard-box-contents">
            <div className="Dashboard-first-box-contents">
              <div className="Box one"></div>
              <div className="Box two"></div>
              <div className="Box three"></div>
              <div className="Box four"></div>
            </div>
            <div className="Dashboard-second-box-contents">
              <div className="Box five"></div>
              <div className="Box six"></div>
            </div>
            <div className="Dashboard-thired-box-contents">
              <div className="Box seven"></div>
              <div className="Box eight"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side-top-logo-container"></div>
      <div className="side-bar-content">
        <div className="side-bar-center-content">
          <div className="side-bar-top-content-nav">
            <ul>
              <a href="/dashboard">
                <li>Dashboard</li>
              </a>
              <a href="/">
                <li>Visitor</li>
              </a>
              <a href="/pageview">
                <li>PageView</li>
              </a>
              <a href="/device">
                <li>Device</li>
              </a>
              <a href="/location">
                <li>Location</li>
              </a>
            </ul>
          </div>
          <div className="side-bar-center-content-nav">
            <ul>
              <a href="/">
                <li>Dashboard</li>
              </a>
              <a href="/">
                <li>Setting</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
