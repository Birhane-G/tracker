import logo from "../images/Trackerlogo2.png";
import 
function Login() {
  const [email,setEmail]
  return (
    <section className="try">
      <div ClassName="container">
        <div ClassName="screen">
          <div ClassName="screen__content">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Tracker Logo" />
                <h1>Tracker</h1>
              </a>
            </div>
            <form ClassName="login">
              <div ClassName="login__field">
                <input
                  type="text"
                  ClassName="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div ClassName="login__field">
                <input
                  type="password"
                  ClassName="login__input"
                  placeholder="Password"
                />
              </div>
              <button ClassName="button login__signup">
                <span ClassName="button__text">Log In </span>
              </button>
              <div className="create_account">
                <br></br>
                <h4>Don't have an account?</h4>
                <button ClassName="button login__signup">
                  <span ClassName="button__text">
                    <a href="/Registration">sign up for tracker </a>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div ClassName="screen__background">
            <span ClassName="screen__background__shape screen__background__shape4"></span>
            <span ClassName="screen__background__shape screen__background__shape3"></span>
            <span ClassName="screen__background__shape screen__background__shape2"></span>
            <span ClassName="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
