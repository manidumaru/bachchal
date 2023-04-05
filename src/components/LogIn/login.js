import React from "react";
import LogInForm from "./loginForm";
import { useNavigate } from "react-router";

function LogIn() {
  const Navigate = useNavigate();

  const HideLogIn = () => {
    Navigate("/");
  };
  return <LogInForm onclose={HideLogIn} />;
}

export default LogIn;
