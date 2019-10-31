import React from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { onEmailAndPasswordSignIn } = this.props;
    const { email, password } = this.state;

    onEmailAndPasswordSignIn(email, password);
  };

  render() {
    const { onGoogleSignIn } = this.props;

    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  onGoogleSignIn: () => dispatch(googleSignInStart()),
  onEmailAndPasswordSignIn: (email, password) =>
    dispatch(emailSignInStart({email, password}))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
