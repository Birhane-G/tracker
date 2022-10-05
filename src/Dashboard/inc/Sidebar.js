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
<<<<<<< HEAD
import { CgWebsite, CgComponents } from "react-icons/cg";
=======
<<<<<<< HEAD
import { CgWebsite } from "react-icons/cg";
=======
import { CgWebsite, CgComponents } from "react-icons/cg";
>>>>>>> 33490e1cb161b1e97c9079995e644d051e667c43
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
      path: "/Software",
      name: "Software",
      icon: <CgComponents style={{ fontSize: "26px" }} />,
    },
    {
<<<<<<< HEAD
=======
>>>>>>> 33490e1cb161b1e97c9079995e644d051e667c43
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
      path: "/Location",
      name: "Location",
      icon: <BiCurrentLocation style={{ fontSize: "26px" }} />,
    },
    {
      path: "/Website",
      name: "Website",
      icon: <CgWebsite style={{ fontSize: "26px" }} />,
    },
    {
      path: "/Setting",
      name: "Setting",
      icon: <AiTwotoneSetting style={{ fontSize: "26px" }} />,
    },
  ];
  const [Press, setPress] = useState(true);
  const Click = () => setPress(!Press);
  return (
    <div className="sidebar">
      <motion.div
        animate={{ width: Press ? "15%" : "50px" }}
        className="side-bar-content"
      >
        <div className="side-bar-content">
          <div className="menu-con">
            <div className="menu-back"></div>
            <AiOutlineRightCircle
              onClick={Click}
              style={{ fontSize: "26px" }}
              className="menu"
            />
          </div>
          <div className="side-top-logo-container"></div>
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
