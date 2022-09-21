import React from "react";
import Sidebar from "../inc/Sidebar";
// import Header from "../inc/Header";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <section className="Every-page">
      <Sidebar />
      <div className="dashboard">
        <div className="">
          <h1>Dashboard</h1>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
