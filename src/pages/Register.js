import React, { useState } from "react";
import logo from "../images/Trackerlogo2.png";

function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailValidator.test(value);

    setEmail(value);
    setIsValid(isEmailValid);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setFormErrorMessage("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    alert("Passwords match!");
  };

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
            <form onSubmit={handleSubmit} class="signup_form">
              <div class="login__field">
                <input
                  type="text"
                  class="register_input login__input"
                  placeholder="User name / Email"
                  onChange={handleChange}
                />
                {isValid ? (
                  <p></p>
                ) : (
                  <p style={{ color: "red" }}>Invalid email format</p>
                )}
                <input
                  type="password"
                  class="register_input login__input"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {!password && formErrorMessage !== "" && (
                  <div style={{ color: "red" }}>Fill this out!</div>
                )}

                <input
                  type="password"
                  class="register_input login__input"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {!confirmPassword && formErrorMessage !== "" && (
                  <div style={{ color: "red" }}>Fill this out!</div>
                )}
              </div>
              {!passwordsMatch && (
                <div style={{ color: "red" }}>Passwords do not match!</div>
              )}
              <button type="submit" class="button login__signup">
                <span class="button__text">Register </span>
              </button>
              <div className="create_account">
              <br></br>
                <h4>Already Registered ?</h4>
                <button class="button login__signup">
                  <span class="button__text">
                    <a href="/Login">Login to tracker </a>
                  </span>
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
export default Register;
