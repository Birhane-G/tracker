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
             <div className="table-container">
             <div className="country">
                <table id="con">
                  <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Country</th>
                    <th>Number of Users</th>
                </tr>
                  </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Ethiopia</td>
                    <td>56</td>
                 </tr>
                </tbody>
                </table>
              </div>
              <div className="regsta">
                <table id="rs">
                  <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Region/State</th>
                    <th>Number of Users</th>
                </tr>
                  </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Addis Ababa</td>
                    <td>24</td>
                 </tr>
                </tbody>
                </table>
              </div>
             </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default Location;
