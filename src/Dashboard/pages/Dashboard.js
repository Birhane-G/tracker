import React from "react";
import "../style/dashboard.css";
import { Popularpage } from "../Components/Dashboard/Popularpage";
import { Visits } from "../Components/Dashboard/Visits";
import { Actions } from "../Components/Dashboard/Actions";
import { VisirorsT } from "../Components/Dashboard/VisirorsT";
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
