import React from "react";
import { Sidebar } from "./Dashboard";
import "../style/pageview.css";
function Pageview() {
  return (
    <>
      <div className="Dashboard-include-content">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <AllPageview />
        </div>
      </div>
    </>
  );
}
export function AllPageview() {
  return (
    <div className="pageview">
      <div className="pageview-content">
          <div className="pageview-overview"></div>
      </div>
    </div>
  );
}
export default Pageview;
