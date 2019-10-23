import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input";
import Button from "../button/button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

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

    const { email, password } = this.state;
    console.log(email,password)

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="sign-in">
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

          <div className="buttons">
            <Button type="submit">SIGN IN</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
