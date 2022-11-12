import React from 'react'
import "../Styles/register_style.css";
import logo from "../images/Trackerlogo.png";

function Register() {
  return (
    <section>
        <div className="Back"> </div>
       <div className='register'>
       <div className="register-contents">
          <div className="register-cont">
            <div className="logo">
                <img src={logo} alt="Tracker Logo" />
                <h1>Tracker</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="form-cont">
            <form action="" method="POST">
              <input type="text" name="fname" placeholder="First Name" />
              <input type="text" name="lname" placeholder="Last Name" />
              <br />
              <input type="email" name="uemail" placeholder="Email" />
              <br />
              <input type="password" name="pass" placeholder="Password" />
              <br />
              <input type="password" name="cpass" placeholder="Confirm Password" />
              <input type="text" name="weburl" placeholder="Website URL" />
              <div className="btn_register">
                <a href="/">Register</a>
              </div>
              
            </form>
            <div className="usr">
              <h1>
                Already have an account? <a href="/Login">Login</a>
              </h1>
            </div>
          </div>
       </div>
       </div>
    </section>
    
  )
}
export default Register;