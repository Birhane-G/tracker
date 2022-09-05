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
                
                <input type="text" name="uname" placeholder="Username or Email" /><br />
                <input type="text" name="pass" placeholder="Password" />
                <button type="submit" className="loginbtn">Login</button>
              

            </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
