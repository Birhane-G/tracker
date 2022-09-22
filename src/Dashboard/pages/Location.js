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
                <a id="af">Africa</a>
                <a id="as">Asia</a>
                <a id="au">Australia</a>
                <a id="eu">Europe</a>
                <a id="na">North America</a>
                <a id="sa">South America</a>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default Location;
