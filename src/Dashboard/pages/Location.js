import React from "react";
import "../style/location_dash.css";
import Sidebar from "../inc/Sidebar";
function Location() {
  return (
    <section>
      <>
        <div className="Dashboard-include-content">
          <Sidebar />
          <div className="Dashboard-all-contents">
            <h1>Location</h1>
            <div className="loc">
              <div className="continent">
                <a href="/" id="af">Africa</a>
                <a href="/" id="as">Asia</a>
                <a href="/" id="au">Australia</a>
                <a href="/" id="eu">Europe</a>
                <a href="/" id="na">North America</a>
                <a href="/" id="sa">South America</a>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default Location;
