import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { getApp } from "./Config/Route";
function App() {
  const Currentapp = getApp();
  return (
    <>
      <BrowserRouter>
        <Currentapp />
      </BrowserRouter>
    </>
  );
}

export default App;
