import "./index.css";
// import Home from "./pages/Home";
// import Error from "./pages/Error";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/pages/Dashboard";
import Pageview from "./Dashboard/pages/Pageview";
import Device from "./Dashboard/pages/Device";
import Location from "./Dashboard/pages/Location";
import Visitor from "./Dashboard/pages/Visitor";
import Sidebar from "./Dashboard/inc/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<Error />} /> */}
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/visitor" element={<Visitor />} />
            <Route exact path="/pageview" element={<Pageview />} />
            <Route exact path="/device" element={<Device />} />
            <Route exact path="/location" element={<Location />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
