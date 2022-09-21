import React from "react";
import Sidebar from "../inc/Sidebar";
import Header from "../inc/Header";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <section>
      <div className="dashboard">
        <Sidebar />
        <Header />
      </div>
      <div className="dashboard-contents">Dashboard Test</div>
    </section>
  );
}

export default Dashboard;
