import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "../Dashboard/inc/Sidebar";
import { Header } from "../Dashboard/inc/Header";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Visitor from "../Dashboard/Visitor/Visitor";
import Device from "../Dashboard/Device/Device";
import { Location } from "../Dashboard/Location/Location";
import Pageview from "../Dashboard/Pageview/Pageview";
import { Software } from "../Dashboard/Software/Software";
import Error from "../pages/Error";

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
};
export const SubRoutes = () => {
  return (
    <Sidebar>
      <Header>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Visitor" element={<Visitor />} />
          <Route exact path="/PageView" element={<Pageview />} />
          <Route exact path="/Device" element={<Device />} />
          <Route exact path="/Software" element={<Software />} />
          <Route exact path="/Location" element={<Location />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Header>
    </Sidebar>
  );
};
