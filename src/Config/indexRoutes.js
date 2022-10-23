import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Pageview from "../Dashboard/Pageview/Pageview";
import Device from "../Dashboard/Device/Device";
import { Software } from "../Dashboard/Software/Software";
import { Location } from "../Dashboard/Location/Location";
import Visitor from "../Dashboard/Visitor/Visitor";
import Sidebar from "../Dashboard/inc/Sidebar";
import { Header } from "../Dashboard/inc/Header";
import { Setting } from "../Dashboard/setting/Setting";

export const indexRoutes = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/visitor" element={<Visitor />} />
        <Route exact path="/pageview" element={<Pageview />} />
        <Route exact path="/device" element={<Device />} />
        <Route exact path="/software" element={<Software />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/setting" element={<Setting />} />
      </Routes>
  )
}
