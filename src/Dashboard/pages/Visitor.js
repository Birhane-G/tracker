import React from 'react'
import { Sidebar } from './Dashboard'
function Visitor() {
  return (
    <>
      <div className="Dashboard-include-content">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          
        </div>
      </div>
    </>
  )
}

export default Visitor