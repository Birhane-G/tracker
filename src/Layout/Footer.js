import React from "react";
import '../Styles/footer_style.css';
function Footer() {
  return (
    <section className="footer">
      <div>
      <div className="footer-cont">
        <div className="importantlinks">
          <h3>Important Links</h3>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/"><li>Partners</li></a>
            <a href="/"><li>Service</li></a>
            <a href="/"><li>About us</li></a>
            <a href="/"><li>Help</li></a>
            <a href="/"><li>Locate us</li></a>
          </ul>
        </div>
        <div className="communications">
          <h3>communications</h3>
          <ul>
            <a href="/"><li>Email</li></a>
            <a href="/"><li>Twitter</li></a>
            <a href="/"><li>Facebook</li></a>
            <a href="/"><li>LinkedIn</li></a>
            <a href="/"><li>Telegram</li></a>
            <a href="/"><li>Phone</li></a>
          </ul>
        </div>
        <div className="location">
          <a href="/">Mexico CreativeHub</a>
        </div>
      </div>
         
      </div>
    </section>
  );
}
export default Footer;
