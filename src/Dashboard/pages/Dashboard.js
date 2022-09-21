import React from "react";
import Sidebar from "../inc/Sidebar";
import Header from "../inc/Header";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <section>
        <Sidebar />
      <div className="dashboard-contents">
        <Header />
      </div>
    </section>
  );
}

export default Dashboard;
