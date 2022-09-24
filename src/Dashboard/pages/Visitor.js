import React from 'react'
import { Sidebar } from './Dashboard'
function Visitor() {
  return (
    <>
      <div className="Dashboard-include-content">
        <Sidebar />
        <div className="Dashboard-all-contents">
        </div>
      </div>
    </>
  )
}

export default Visitor