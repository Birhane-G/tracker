import React from "react";
import "./style/dashboard.css";
import { Popularpage } from "./components/Popularpage";
import { VisirorsT } from "./components/VisirorsT";
import { Visits } from "./components/Visits";
import { Actions } from "./components/Actions";

function Dashboard() {
  return (
    <div className="Dashboard-include-content">
      <Popularpage />
      <div className="dashboard-right-include">
        <div className="dashboard-right">
          <Visits />
          <Actions />
        </div>
        <VisirorsT />
      </div>
    </div>
  );
}

export default Dashboard;
