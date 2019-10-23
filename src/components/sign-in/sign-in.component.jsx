import React from "react";
import "./sign-in.styles.scss";

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

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label>Email</label>

          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input type="submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

export default SignIn;
