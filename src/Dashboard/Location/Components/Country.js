import React from "react";

export const Country = () => {
  return (
    <div className="container">
      <div className="table-title">
        <h3>Country</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Country</th>
              <th>Number of Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ethiopia</td>
              <td>56</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nigeria</td>
              <td>42</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
