import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ onGoogleSignIn, onEmailAndPasswordSignIn }) => {

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const { value, name } = e.target;

    setState( prevState => ({
        ...prevState,
        [name] : value
    }))
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = state;

    onEmailAndPasswordSignIn(email, password);
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          handleChange={handleChange}
          required
          label="Email"
        />

        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          required
          label="Password"
        />

        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button type="button" isGoogleSignIn onClick={onGoogleSignIn}>
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  onGoogleSignIn: () => dispatch(googleSignInStart()),
  onEmailAndPasswordSignIn: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
