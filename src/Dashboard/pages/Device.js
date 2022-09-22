import React from "react";
import Sidebar from "../inc/Sidebar";

import "../style/device.css";
function Device() {
  return (
    <>
      <div className="Dashboard-include-content">
        <Sidebar />
        <div className="Dashboard-all-contents">
          {/* <Header /> */}
          <div className="device-page">
            <AllPageview />
            <div className="one"></div>
            <div className="one"></div>
            <div className="one"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export function AllPageview() {
  return (
    <div className="cards">
      <div className="card-type"><h1>Device type</h1></div>
      <div className="card-brand"><h1>Device brand</h1></div>
      <div className="card-model"><h1>Device model</h1></div>
      <div className="card-screenResolution"><h1>Screen resolution</h1></div>
       

    </div>
  );
}
export default Device;
