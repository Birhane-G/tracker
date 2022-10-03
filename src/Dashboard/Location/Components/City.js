import React from 'react'

export const City = () => {
  return (
    <div className="container">
      <div className="table-title">
        <h3>City</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
        <thead>
            <tr>
              <th>Rank</th>
              <th>City</th>
              <th>Number of Users</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}
