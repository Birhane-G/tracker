import React from "react";
import Sidebar from "../inc/Sidebar";

import "../style/pageview.css";
function Pageview() {
  return (
    <>
      <div className="Dashboard-include-content">
        <Sidebar />
        <div className="Dashboard-all-contents">
          {/* <Header /> */}
          <div className="page-view-page">
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
    <div className="one">
      <h1>teext</h1>
    </div>
  );
}
export default Pageview;
