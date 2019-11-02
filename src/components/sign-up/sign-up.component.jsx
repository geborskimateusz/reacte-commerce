import React, { useState } from "react";
import Button from "../button/button.component";
import FormImput from "../form-input/form-input";
import { SignUpContainer } from "./sign-up.styles";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUp }) => {
  const [userCrendentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = userCrendentials;

    if (password !== confirmPassword) {
      alert("Password does not match.");
      return;
    }

    signUp({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <SignUpContainer>
      <h3>I do not have a account</h3>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormImput
          type="text"
          name="displayName"
          value={userCrendentials.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormImput
          type="email"
          name="email"
          value={userCrendentials.email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormImput
          type="password"
          name="password"
          value={userCrendentials.password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormImput
          type="password"
          name="confirmPassword"
          value={userCrendentials.confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
