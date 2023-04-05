import React from "react";
import "./loginForm.css";
import greenlogo from "../../assets/green_logo.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import logo_google from "../../assets/google_logo.png";
import Modal from "../UI/Modal";
function LogInForm(props) {
  return (
    <Modal onClick={props.onclose}>
      <div className="log_in_main">
        <div className="log_in_logo">
          <img src={greenlogo} alt="Logo" height="50px"></img>
        </div>
        <div className="log_in_form">
          <form>
            <div className="form_group">
              <input type="email" id="email" placeholder="Email"></input>
              <div className="icon">
                <img
                  className="login_icon1"
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
                  className="login_icon2"
                  src={password}
                  alt="password-logo"
                  height="20px"
                  width="20px"
                ></img>
              </div>
            </div>
            <div className="form_checkbox">
              <div className="checkbox">
                <input type="checkbox"></input>
                <p>Remember me</p>
              </div>
              <div className="remember">
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="login_button_div">
              <button className="login_button" type="submit">
                Log in
              </button>
            </div>
          </form>
          <div className="or_section">
            <div className="or_line"></div>
            <h2>OR</h2>
            <div className="or_line"></div>
          </div>
          <div className="login_button_google_div">
            <button className="login_button_google">
              <div className="login_button_google_content">
                <div className="login_button_google_image">
                  <img src={logo_google} height="30px" width="30px"></img>
                </div>
                <div className="login_button_google_text">
                  <p>Log in with Google</p>
                </div>
              </div>
            </button>
          </div>
          <div className="login_footer">
            <p>New ? </p>
            <p> Sign up </p>
            <p> and join us</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LogInForm;
