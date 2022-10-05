import React from 'react'
import Apple from "../icons/brand/Apple.png"
import Samsung from "../icons/brand/Samsung.png"
import Dell from "../icons/brand/Dell.png"
import Hp from "../icons/brand/HP.png"
import Nokia from "../icons/brand/Nokia.png"

export const DeviceModel = () => {
  return (
    <div className="Browser-container">
    <div className="table-title">
      <h3>Operating System</h3>
    </div>
    <div className="table-data">
      <table cellSpacing={0} cellPadding={0} className="table-data-table">
        <thead>
          <tr>
            <th>Device Model</th>
            <th>Visits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={Apple} alt="" className="icons"/> Iphone 12
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={Samsung} alt="" className="icons"/> Samsung Note 10
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={Dell} alt="" className="icons"/> Dell Optiplex 790
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={Hp} alt="" className="icons"/> HP Probook
            </td>
            <td>1200</td>
          </tr>
           <tr>
            <td>
              <img src={Samsung} alt="" className="icons"/> Samsung S20
            </td>
            <td>1000</td>
          </tr>
           <tr>
            <td>
              <img src={Apple} alt="" className="icons"/> Iphone 7+
            </td>
            <td>100</td>
          </tr>
           <tr>
            <td>
              <img src={Hp} alt="" className="icons"/> HP Elitebook
            </td>
            <td>70</td>
          </tr>
           <tr>
            <td>
              <img src={Nokia} alt="" className="icons"/> Nokia A1
            </td>
            <td>60</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
