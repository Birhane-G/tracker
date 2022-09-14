import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faRocket } from "@fortawesome/free-solid-svg-icons";

library.add(faRocket);
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
