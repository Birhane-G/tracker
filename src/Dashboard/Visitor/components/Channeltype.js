import React from "react";

export const Channeltype = () => {
  return (
    <div className="Visitor-Channel-type">
      <div className="table-title">
        <h3>Channel Type</h3>
        <div className="table-data">
          <table
            cellPadding="0"
            cellspacing="0"
            border="0"
            className="table-data-table"
          >
            <thead>
              <tr>
                <th>Channel</th>
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
    </div>
  );
};
