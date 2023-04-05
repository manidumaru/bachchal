import React from "react";
import greenlogo from "../../assets/green_logo.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import logo_google from "../../assets/google_logo.png";
import username from "../../assets/username.png";
import Modal from "../UI/Modal";
import "./signupform.css";

function SignUpForm(props) {
  return (
    <Modal onClick={props.onclose}>
      <div className="sign_up_main">
        <div className="log_in_logo">
          <img src={greenlogo} alt="Logo" height="50px"></img>
        </div>
        <div className="sign_up_form">
          <form>
            <div className="form_group">
              <input
                type="username"
                id="username"
                placeholder="Username"
              ></input>
              <div className="icon">
                <img
                  className="signup_icon1"
                  src={username}
                  alt="username-icon1"
                  height="20px"
                  width="20px"
                ></img>
              </div>
            </div>
            <div className="form_group">
              <input type="email" id="email" placeholder="Email"></input>
              <div className="icon">
                <img
                  className="signup_icon2"
                  src={email}
                  alt="email-logo"
                  height="20px"
                  width="20px"
                ></img>
              </div>
            </div>
            <div className="form_group">
              <input
                type="password"
                id="password"
                placeholder="Password"
              ></input>
              <div className="icon">
                <img
                  className="signup_icon3"
                  src={password}
                  alt="password-logo"
                  height="20px"
                  width="20px"
                ></img>
              </div>
            </div>
            <div className="signup_button_div">
              <button className="signup_button" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div className="or_section">
            <div className="or_line"></div>
            <h2>OR</h2>
            <div className="or_line"></div>
          </div>
          <div className="signup_button_google_div">
            <button className="signup_button_google">
              <div className="signup_button_google_content">
                <div className="signup_button_google_image">
                  <img src={logo_google} height="30px" width="30px"></img>
                </div>
                <div className="signup_button_google_text">
                  <p>Sign Up with Google</p>
                </div>
              </div>
            </button>
          </div>
          <div className="signup_footer">
            <p>Already have an account ? </p>
            <p> Log in </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpForm;
