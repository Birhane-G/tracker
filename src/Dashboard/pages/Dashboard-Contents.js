import React from "react";
import Sidebar from "../inc/Sidebar";
import "../style/dashboard-content.css";

function Dashboard() {
  return (
    <>
      <div className="Dashboard-include-content">
        <Sidebar />
        <div className="Dashboard-all-contents">
          <h1>text</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
