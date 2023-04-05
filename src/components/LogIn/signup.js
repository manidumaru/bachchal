import React from "react";
import SignUpForm from "./signupform";
import { useNavigate } from "react-router";

function SignUp() {
  const Navigate = useNavigate();

  const HideLogIn = () => {
    Navigate("/");
  };
  return <SignUpForm onclose={HideLogIn} />;
}

export default SignUp;
