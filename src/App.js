import "./index.css";
// import Home from "./pages/Home";
// import Error from "./pages/Error";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Pageview from "./Dashboard/Pageview/Pageview";
import Device from "./Dashboard/Device/Device";
import { Software } from "./Dashboard/Software/Software";
import {Location} from "./Dashboard/Location/Location";
import Visitor from "./Dashboard/Visitor/Visitor";
import Sidebar from "./Dashboard/inc/Sidebar";
import { Header } from "./Dashboard/inc/Header";
import { Setting } from "./Dashboard/setting/Setting";
=======
<<<<<<< HEAD
import Dashboard from "./Dashboard/pages/Dashboard";
import Pageview from "./Dashboard/pages/Pageview";
import Device from "./Dashboard/pages/Device";
import Location from "./Dashboard/pages/Location";
import Visitor from "./Dashboard/pages/Visitor";
import Sidebar from "./Dashboard/inc/Sidebar";

=======
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Pageview from "./Dashboard/Pageview/Pageview";
import Device from "./Dashboard/Device/Device";
import { Software } from "./Dashboard/Software/Software";
import {Location} from "./Dashboard/Location/Location";
import Visitor from "./Dashboard/Visitor/Visitor";
import Sidebar from "./Dashboard/inc/Sidebar";
import { Header } from "./Dashboard/inc/Header";
import { Setting } from "./Dashboard/setting/Setting";
>>>>>>> 33490e1cb161b1e97c9079995e644d051e667c43
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
<<<<<<< HEAD
          <Header>
=======
<<<<<<< HEAD
=======
          <Header>
>>>>>>> 33490e1cb161b1e97c9079995e644d051e667c43
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<Error />} /> */}
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/visitor" element={<Visitor />} />
            <Route exact path="/pageview" element={<Pageview />} />
            <Route exact path="/device" element={<Device />} />
<<<<<<< HEAD
            <Route exact path="/software" element={<Software />} />
=======
<<<<<<< HEAD
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
            <Route exact path="/location" element={<Location />} />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
<<<<<<< HEAD
          </Header>
=======
=======
            <Route exact path="/software" element={<Software />} />
            <Route exact path="/location" element={<Location />} />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
          </Header>
>>>>>>> 33490e1cb161b1e97c9079995e644d051e667c43
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
