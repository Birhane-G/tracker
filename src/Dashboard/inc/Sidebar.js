import React from "react";
// import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import {
  AiFillDashboard,
  AiTwotoneSetting,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiClipboard, BiDevices, BiCurrentLocation } from "react-icons/bi";
import { CgWebsite, CgComponents } from "react-icons/cg";
import "../style/sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ children }) => {
  const links = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AiFillDashboard style={{ fontSize: "26px" }} />,
    },
    {
      path: "/Visitor",
      name: "Visitor",
      icon: <BsFillPersonCheckFill style={{ fontSize: "26px" }} />,
    },
    {
      path: "/PageView",
      name: "PageView",
      icon: <BiClipboard style={{ fontSize: "26px" }} />,
    },
    {
      path: "/Device",
      name: "Device",
      icon: <BiDevices style={{ fontSize: "26px" }} />,
    },
    {
      path: "/Software",
      name: "Software",
      icon: <CgComponents style={{ fontSize: "26px" }} />,
    },
    {
      path: "/Location",
      name: "Location",
      icon: <BiCurrentLocation style={{ fontSize: "26px" }} />,
    },
  ];
  const [Press, setPress] = useState(true);
  const Click = () => setPress(!Press);
  return (
    <div className="sidebar">
      <motion.div
        animate={{ width: Press ? "15%" : "50px" }}
        className="side-bar-content">
      
        <div className="side-bar-content">
          <div className="menu-con">
            <div className="menu-back"></div>
            <AiOutlineRightCircle
              onClick={Click}
              style={{ fontSize: "26px" }}
              className="menu"
            />
          </div>
          <div className="side-top-logo-container">  <nav>
      <div class="profile-block"> 
       <div class="profile-picture big-profile-picture clear">
          <img width="90px" height="80" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Abebe_Bikila%2C_1972_card.jpg/461px-Abebe_Bikila%2C_1972_card.jpg?20160711053925" ></img>
        </div>
            <h1 class="user-name">Abebe Bikila</h1>
              <p class="site-title">testwebsite.com</p>                                    
                </div>
 </nav>
 </div>
          <div className="side-bar-center-content">
            <div className="side-bar-top-content-nav">
              <ul>
                {links.map((link) => (
                  <Link to={link.path}>
                    <li>
                      <span className="style">{link.icon}</span>
                      {Press && <span className="style">{link.name}</span>}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <main>{children}</main>
     
    </div>
  );
};

export default Sidebar;
