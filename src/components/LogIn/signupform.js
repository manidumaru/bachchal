import React from "react";
import greenlogo from "../../assets/green_logo.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import logo_google from "../../assets/google_logo.png";
import username from "../../assets/username.png";
import Modal from "../UI/Modal";
import "./signupform.css";
import axios from "axios";
import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google'; // Import the useGoogleLogin hook from the @react-oauth/google library
//login & signup with google is similar for this project

function SignUpForm(props) {
  const [errorInfo, setErrorInfo] = useState(null);
  const [responseInfo, setResponseInfo] = useState(null);

  const signUP = async (event) => {
    event.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/basicauth/signup/", {
        username: userDetails.userName,
        email: userDetails.userEmail,
        password: userDetails.userPassword,
      })
      .then(function (response) {
        console.log(response);
        setResponseInfo(response);
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        setErrorInfo(error.response.data.error);
      });
  };

  const [userDetails, setUserDetails] = useState({
    userEmail: "",
    userPassword: "",
    userName: "",
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
      <div className="sign_up_main">
        <div className="log_in_logo">
          <img src={greenlogo} alt="Logo" height="50px"></img>
        </div>
        <div className="sign_up_form">
          <form onSubmit={signUP}>
            <div className="form_group">
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Username"
                value={userDetails.userName}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    userName: e.target.value,
                  })
                }
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
                name="password"
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
            <button className="signup_button_google" onClick={login}>
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
