import React from "react";
import { Sign } from "./sign.styles";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignPage = () => (
  <Sign>
    <SignIn />
    <SignUp />
  </Sign>
);

export default SignPage;
