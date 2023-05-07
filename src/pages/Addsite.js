import React, { useState } from "react";
import logo from "../images/Trackerlogo2.png";

function Addsite() {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }
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
            <form class="addsite login">
              <div class="addsite_field login__field">
                <div className="addsite_title">
                  <h1>
                    Start Improving <br />
                    <b className="addsite_title_text">Your Website</b>
                  </h1>
                  <br />
                </div>
                <input
                  type="text"
                  class="addsite_input login__input"
                  placeholder="Website Name"
                />
                <input
                  type="text"
                  class="addsite_input login__input"
                  placeholder="Website URL"
                />
                <div class="login__field">
                  <select>
                    <option value="" disabled selected>
                      Select website type
                    </option>
                    <option value="option1">E-Commerce</option>
                    <option value="option2">Personal</option>
                    <option value="option3">Blog</option>
                  </select>
                </div>
              </div>

              <div class="blurry-background">
                <div class="accept-text">
                  <input type="checkbox" name="website_type" value="website_type" />
                  &nbsp;  I hereby accept the <a href="">terms and conditions </a> and <a href=""> data
                    processing agreement (DPA)</a>.
                  
                </div>
              </div>

              <button class="button login__signup">
                <span class="button__text">Start Improving </span>
              </button>
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
export default Addsite;
