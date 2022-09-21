import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import "../Styles/login_style.css";
import logo from "../images/Trackerlogo.png";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

async function login(){
    console.warn(email, password);
    let items={email, password};
    let result = await fetch("http://localhost:8000/api/signin", {
      method: 'POST',
      headers: {
        "content-Type":"application./json",
        "Accept":"application/json"
      },
      body: JSON.stringify(items)
    });
    result = await result.json();
    localStorage.setItem( "user-info",JSON.stringify(result) )
  }
  return (
    <section>
      <div className="Back"> </div>
      <div className="login">
        <div className="login-contents">
          <div className="login-cont">
            <div className="logo">
                <img src={logo} alt="Tracker Logo" />
                <h1>Tracker</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="form-cont">
            <div className="newusr">
              <h1>
                New user? <a href="/reg">signUp</a>
              </h1>
            </div>
              <input type="text" name="uname" 
              onChange={(e)=>setemail(e.target.value)} 
              value={email}
              placeholder="Email" />
              <br />
              <input type="password" name="pass" 
              onChange={(e)=>setpassword(e.target.value)} 
              value={password}
              placeholder="Password" />
              <div className="btn_login">
                <button  onClick={login} className="btn-login">Login</button>
              </div>
              <h4 className="forget">Forget Password?</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
