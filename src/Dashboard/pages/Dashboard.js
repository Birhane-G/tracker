import React from "react";
import Sidebar from "../inc/Sidebar";
import Header from "../inc/Header";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <>
        <Sidebar />
      <section className="dashboard-contents">
        <Header />
        <h1>there is something</h1>
      </section>
    </>
  );
}

export default Dashboard;
