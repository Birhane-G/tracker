import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Dashboard from './Dashboard/pages/Dashboard';
import Pageview from './Dashboard/pages/Pageview';
import Device from './Dashboard/pages/Device';
import Location from './Dashboard/pages/Location';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faMoon, faRocket } from "@fortawesome/free-solid-svg-icons";
// library.add(faRocket);
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pageview" element={<Pageview />} />
      <Route path="/device" element={<Device/>}/>
      <Route path="/reg" element={<Register />} />
      <Route path="*" element={<Error />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
