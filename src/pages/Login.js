import logo from "../images/Trackerlogo2.png";
function Login() {
  return (
    <section className="try">
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Tracker Logo" />
                <h1>Tracker</h1>
              </a>
            </div>
            <form class="login">
              <div class="login__field">
                <input
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <input
                  type="password"
                  class="login__input"
                  placeholder="Password"
                />
              </div>
              <button class="button login__signup">
                <span class="button__text">Log In </span>
              </button>
              <div className="create_account">
				<br></br>
                <h4>Don't have an account?</h4>
                <button class="button login__signup">
                  <span class="button__text"><a href="/Registration">sign up for tracker </a></span>
                </button>
              </div>
            </form>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
