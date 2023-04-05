import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import goat from "../../assets/navbar_goat.png";
import learn from "../../assets/navbar_learn.png";
import profile from "../../assets/navbar_profile.png";
import about from "../../assets/navbar_about.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-image">
        <img src={logo} alt=" goat"></img>
      </div>
      <div className="navbar_list">
        <div className="list">
          <img src={goat} alt="goat" height="40px" width="40px"></img>
          <div className="list_topic">
            <Link to="/">Play</Link>
          </div>
        </div>
        <div className="list">
          <img src={learn} alt="goat" height="40px" width="40px"></img>
          <div className="list_topic">
            <Link to="/learn">Learn to Play</Link>
          </div>
        </div>
        <div className="list">
          <img src={profile} alt="goat" height="40px" width="40px"></img>
          <div className="list_topic">
            <Link to="/profile">Profile</Link>
          </div>
        </div>
        <div className="list">
          <img src={about} alt="goat" height="40px" width="40px"></img>
          <div className="list_topic">
            <Link to="/about">About us</Link>
          </div>
        </div>
      </div>
      <div className="navbar_login">
        <Link to="/log_in">
          <button className="navbar_login_button">Log In</button>
        </Link>
      </div>
      <div className="navbar_signup">
        <Link to="/sign_up">
          <button className="navbar_signup_button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
