import React from "react";

export const Region = () => {
  return (
    <div className="container">
      <div className="table-title">
        <h3>Region</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Region/State</th>
              <th>Number of Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Addis Ababa</td>
              <td>24</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lagos</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
