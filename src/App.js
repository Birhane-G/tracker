import "./index.css";
// import Home from "./pages/Home";
// import Error from "./pages/Error";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Pageview from "./Dashboard/Pageview/Pageview";
import Device from "./Dashboard/Device/Device";
import { Software } from "./Dashboard/Software/Software";
import {Location} from "./Dashboard/Location/Location";
import Visitor from "./Dashboard/Visitor/Visitor";
import Sidebar from "./Dashboard/inc/Sidebar";
import { Header } from "./Dashboard/inc/Header";
import { Setting } from "./Dashboard/setting/Setting";
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Header>
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<Error />} /> */}
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/visitor" element={<Visitor />} />
            <Route exact path="/pageview" element={<Pageview />} />
            <Route exact path="/device" element={<Device />} />
            <Route exact path="/software" element={<Software />} />
            <Route exact path="/location" element={<Location />} />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
          </Header>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
