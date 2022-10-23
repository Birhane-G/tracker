import React from "react";
import "../Styles/footer_style.css";
import earald from "../images/partners/Earald.jpg";
import nibret from "../images/partners/nibret.jpg";
import erq from "../images/partners/erq.png";
import creativ from "../images/partners/creativehub.jpeg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";
import instagram from "../images/icons/instagram.svg";
import facebook from "../images/icons/facebook.svg";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4 class="important_links">Important Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Partners</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Locate us</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Address</h4>
            <ul>
              <li>
                <a href="/">
                  <i class="fab fa-location"></i>
                  Mexico Addis Ababa Ethiopia <i class="fab fa-ethiopia"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Partners</h4>
            <div class="partners">
              <ul>
                <li>
                  <a href="/">
                    <img src={earald} alt="Earald Ict " />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={nibret} alt="Nibret" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={erq} alt="erq maed" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={creativ} alt="creative hub" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="/">
                <i class="facebook-icon">
                  <img src={facebook} alt="facebook" />
                </i>
              </a>
              <a href="/">
                <i class="twitter-icon">
                  {" "}
                  <img src={twitter} alt="facebook" />
                </i>
              </a>
              <a href="/">
                <i class="instagram-icon"> <img src={instagram} alt="facebook" /></i>
              </a>
              <a href="/">
                <i class="linkedin-icon"> <img src={linkedin} alt="facebook" /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
