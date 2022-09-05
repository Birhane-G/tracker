import React from "react";
import "../Styles/login_style.css";
import logo from "../images/Trackerlogo.png";
function Login() {
  return (
    <section className="login">
      <div className="Back"> </div>
      <div className="login-contents">
        <div className="login-cont">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Tracker Logo" />
              <h1>Tracker</h1>
            </a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="form-cont">
          <div className="newusr">
            <h1>
              New user? <a href="/">signUp</a>
            </h1>
          </div>
          <form action="" method="POST">
            <input type="text" name="uname" placeholder="Username or Email" />
            <br />
            <input type="text" name="pass" placeholder="Password" />
            <div className="btn_login">
              <a href="/">Login</a>
              <h4>forget Password?</h4>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
