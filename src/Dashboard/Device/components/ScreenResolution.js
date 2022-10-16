import React from 'react'
export const ScreenResolution = () => {
  return (
    <div className="Browser-container">
      <div className="table-title">
        <h3>Browser</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Screen Resolution</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1280 x 800
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                 920 x 800
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                600 x 420
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
              1900 x 1020
              </td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
