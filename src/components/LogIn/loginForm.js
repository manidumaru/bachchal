import React, { useContext, useState } from "react";
import "./loginForm.css";
import { Link, useNavigate } from "react-router-dom";
import greenlogo from "../../assets/green_logo.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import logo_google from "../../assets/google_logo.png";
import Modal from "../UI/Modal";
import axios from "axios";
import { useGoogleLogin } from '@react-oauth/google'; // Import the useGoogleLogin hook from the @react-oauth/google library

function LogInForm(props) {
  const navigate = useNavigate();
  const state = useContext(useContext);
  const [errorInfo, setErrorInfo] = useState(null);


  const logIn = async (event) => {
    event.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/socialauth/auth/token/", {
        username: userDetails.userEmail,
        password: userDetails.userPassword,
        grant_type: "password",
        client_id: "Lua0h8TNfOd2IY76SPaNensKiBOMgclPrN1gDjre",
        client_secret:
          "DGf8bQRChoFvbw56Y4q2H2mfVLnIEIbFiUvVPqUr7RE0bmTuKOjNU78b9ECV7DOnR9PyNRApApyyvIaWxjVuRPPnmhYpIfLvc8PAQCVYyW0R4ACiXtks8gXYVChSSg5v",
      })
      .then(function (response) {
        console.log(response);
        // if (!response.data.user.employee_id && !response.data.user.employer_id) {
        //   state.setInfo(response.data.token, response.data.user.role, null);
        // }
        // else if (response.data.user.employer_id) {
        //   state.setInfo(response.data.token, response.data.user.role, response.data.user.employer_id);
        // }
        // else {
        //   state.setInfo(response.data.token, response.data.user.role, response.data.user.employee_id);
        // }

        navigate("/");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        setErrorInfo(error.response.data.error);
      });
  };

  const [userDetails, setUserDetails] = useState({
    userEmail: "",
    userPassword: "",
  });


  //google login:
  // Define a function called login that will be triggered when the user clicks on the Google login button
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      console.log(tokenResponse.access_token);
      let accessToken = tokenResponse.access_token
      // When the user successfully logs in, call the googleLogin function and pass in the access token
      googleLogin(accessToken);
      // googleLogin(tokenResponse);
    },
  });

  // Define a function called googleLogin that takes an access token as an argument
  function googleLogin(accessToken) {
    // Make a POST request to the /api-auth/convert-token endpoint on your server to convert the access token into an access token and refresh token for your application
    console.log(accessToken);
    axios
      .post(`http://127.0.0.1:8000/socialauth/auth/convert-token/`, {
        token: accessToken,
        backend: "google-oauth2",
        grant_type: "convert_token",
        client_id: "drNWN2pN3vhw35JxGDA26VEishwigMT1TIw5lsD6",
        client_secret: "FJsKJRnLKHUBvuJqVCqawHUMVYvKyXh2etL0mv5tNEzaXRt0ZEEIQhi7sASYrdYDqIHVKqNZuDZHA4idVCpHpRFTFkSDJhR8rPRpg69KyNEBS5mwRbzz1dhBxGhu8d1c",
      })
      .then((res) => {
        // When the conversion is successful, log the data returned by the server (which includes the access token and refresh token)
        console.log(res.data);
      });
  }

  return (
    <Modal onClick={props.onclose}>
      <div className="log_in_main">
        <div className="log_in_logo">
          <img src={greenlogo} alt="Logo" height="50px"></img>
        </div>
        <div className="log_in_form">
          <form onSubmit={logIn}>
            <div className="form_group">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={userDetails.userEmail}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    userEmail: e.target.value,
                  })
                }
              ></input>
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
                value={userDetails.userPassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    userPassword: e.target.value,
                  })
                }
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
            <button className="login_button_google" onClick={login}>
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
