import React from "react";
import "../Styles/login_style.css";
import logo from "../images/Trackerlogo.png";
function Login() {
  return (
    <section className="login">
      <div className="login-cont">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="Tracker Logo" />
            <h1>Tracker</h1>
          </div>
        </a>
        <div className="login-right">
          <h1>login</h1>
        </div>
      </div>
      <div className="content">
        <div className="form-cont">
            <form action="" method="POST">
                <label for="uname">username</label>
                <input type="text" name="uname" placeholder="username" /><br />
                <label for="pass">password</label>
                <input type="text" name="pass" placeholder="password" />
            </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
