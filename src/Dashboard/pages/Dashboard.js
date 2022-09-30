import React from "react";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard-include-content">
      <Popularpage />
      <Visits />
      <Actions />
    </div>
  );
}

export const Popularpage = () => {
  return (
    <div className="popularpage-content">
      <div className="popular-page-title">
        <h3>popular page(7 days)</h3>
      </div>
      <div className="popular-page-data">
        <table cellPadding="0" cellspacing="0" border="0" className="popular-page-table">
          <thead>
            <tr>
              <th>Url</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google</td>
              <td>200</td>
            </tr>
            <tr>
              <td>linkedin</td>
              <td>300</td>
            </tr>
            <tr>
              <td>facebook</td>
              <td>200</td>
            </tr>
            <tr>
              <td>instagram</td>
              <td>200</td>
            </tr>
            <tr>
              <td>reddit</td>
              <td>200</td>
            </tr>
            <tr>
              <td>twitter</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Visits = () => {
  return (
    <div className="Totla-visits">
      <div className="Number">
        <h3>6500</h3>
      </div>
      <div className="title">
        <h3>Total Actions</h3>
      </div>
    </div>
  )
}
export const Actions = () => {
  return (
    <div className="Totla-visits">
      <div className="Number">
        <h3>4500</h3>
      </div>
      <div className="title">
        <h3>Total Visits</h3>
      </div>
    </div>
  )
}

export default Dashboard;
