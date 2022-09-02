import React from "react";
import error from "../images/error.png";
import "../Styles/error_style.css";
function Error() {
  return (
  <section className="error-page">
    <div className="error">
      <div className="error-image">
        <img src={error} alt="error page" />
      </div>
      <div className="error-text">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </div>
  </section>)
  ;
}

export default Error;
