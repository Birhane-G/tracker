import React from "react";

export const Continent = () => {
  return (
    <div className="container">
      <div className="table-title">
        <h3>Continent</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Continent</th>
              <th>Number of Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Europe</td>
              <td>142</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Africa</td>
              <td>137</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
