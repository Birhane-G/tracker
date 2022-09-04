import React from "react";
import "../Styles/footer_style.css";
import earald from "../images/partners/Earald.jpg";
import nibret from "../images/partners/nibret.jpg";
import erq from "../images/partners/erq.png";
import creativ from "../images/partners/creativehub.jpeg";
function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Important Links</h4>
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
                <a href="#">
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
                  <a href="#">
                    <img src={earald} alt="Earald Ict " />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={nibret} alt="Nibret" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={erq} alt="erq maed" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={creativ} alt="creative hub" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
