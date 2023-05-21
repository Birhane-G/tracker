import logo from "../images/Trackerlogo2.png";
import React, { useState } from "react";
function Login() {
  const [email,setEmail] = useState ("");
  const [password,setPassword]=useState("");
  function login()
  {
    let item={email,password};
    console.warn(item);
  
  }

  return (
    <section className="try">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Tracker Logo" />
                <h1>Tracker</h1>
              </a>
            </div>
            <form className="login">
              <div className="login__field">
                <input
                  type="text"
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div className="login__field">
                <input
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button type="button" onClick={login} className="button login__signup">
                <span className="button__text">Log In </span>
              </button>
              <div className="create_account">
                <br></br>
                <h4>Don't have an account?</h4>
                <button className="button login__signup">
                  <span className="button__text">
                    <a href="/Registration">sign up for tracker </a>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
