import React from "react";
import "../style/dashboard.css";
import { AiFillDashboard,AiTwotoneSetting } from 'react-icons/ai';
import { BsFillPersonCheckFill} from 'react-icons/bs';
import { BiClipboard, BiDevices, BiCurrentLocation } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

function Dashboard() {
  return (
    <>
      <div className="Dashboard-include-content">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <Content />
        </div>
      </div>
    </>
  );
}
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side-top-logo-container"></div>
      <div className="side-bar-content">
        <div className="side-bar-center-content">
          <div className="side-bar-top-content-nav">
            <ul>
              <a href="/">
                <li><AiFillDashboard  style={{fontSize: '26px'}}/>Dashboard</li>
              </a>
              <a href="/visitor">
                <li><BsFillPersonCheckFill style={{fontSize: '26px'}}/>Visitor</li>
              </a>
              <a href="/pageview">
                <li><BiClipboard style={{fontSize: '26px'}}/>PageView</li>
              </a>
              <a href="/device">
                <li><BiDevices style={{fontSize: '26px'}}/>Device</li>
              </a>
              <a href="/location">
                <li><BiCurrentLocation style={{fontSize: '26px'}}/>Location</li>
              </a>
            </ul>
          </div>
          <div className="side-bar-center-content-nav">
            <ul>
            <a href="/">
                <li><CgWebsite style={{fontSize: '26px'}}/>Website</li>
              </a>
              <a href="/">
                <li><AiTwotoneSetting style={{fontSize: '26px'}}/>Setting</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function Content() {
  return (
  <div className="Dashboard-all-contents">

  </div>
  );
}
export { Dashboard, Sidebar };
