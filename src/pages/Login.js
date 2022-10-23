import "../Styles/login_style.css";
import logo from "../images/Trackerlogo.png";
function Login() {
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
                New user? <a href="/registration">signUp</a>
              </h1>
            </div>
            <input type="text" name="uname" placeholder="Email" />
            <br />
            <input type="password" name="pass" placeholder="Password" />
            <div className="btn_login">
              <a href="/dashboard">
                <button className="btn-login">Login</button>
              </a>
            </div>
            <h4 className="forget">Forget Password?</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
