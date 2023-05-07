import logo from "../images/Trackerlogo2.png";
function Login() {
  return (
    <section className="try">
      <div className="Back-login"> </div>
      <div className="login">
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
                New user? <a href="/registration">Signup</a>
              </h1>
            </div>
            <input type="text" name="uname" placeholder="Email" />
            <br />
            <input type="password" name="pass" placeholder="Password" />
              <div className="btn-login">
                <a href="/">Login</a>
              </div>
            <a href="/"><h4 className="forget">Forget Password?</h4></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
