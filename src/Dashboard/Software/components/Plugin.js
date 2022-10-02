import React from 'react'
import PDF from "../icons/plugins/pdf.png"
import Cookie from "../icons/plugins/cookie.png"
import flash from "../icons/plugins/flash.png"
import java from "../icons/plugins/java.png"
export const Plugin = () => {
  return (
    <div className="Browser-container">
      <div className="table-title">
        <h3>Browser</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Plugin</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={PDF} className="icons"/> pdf
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={flash} className="icons"/> flash
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={Cookie} className="icons"/> cookie
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={java} className="icons"/> java
              </td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
