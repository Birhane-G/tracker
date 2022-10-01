import React from 'react'
import Linux from "../icons/os/LIN.png"
import mac from "../icons/os/MAC.png"
import window from "../icons/os/WIN.png"
import ubuntu from "../icons/os/UBT.png"

export const OperatingS = () => {
  return (
    <div className="Browser-container">
    <div className="Browser-title">
      <h3>Operating System</h3>
    </div>
    <div className="Browser-data">
      <table cellSpacing={0} cellPadding={0} className="Browser-data-table">
        <thead>
          <tr>
            <th>Operating System</th>
            <th>Visitors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={Linux} className="icons"/> Linux
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={mac} className="icons"/> mac
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={window} className="icons"/> Window
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={ubuntu} className="icons"/> Ubuntu
            </td>
            <td>1200</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
