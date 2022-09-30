import React from "react";
import "../style/dashboard.css";
import { Popularpage } from "../Components/Dashboard/Popularpage";
import { Visits } from "../Components/Dashboard/Visits";
import { Actions } from "../Components/Dashboard/Actions";

function Dashboard() {
  return (
    <div className="Dashboard-include-content">
      <Popularpage />
      <Visits />
      <Actions />
    </div>
  );
}



export default Dashboard;
