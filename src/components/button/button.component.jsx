import React from "react";
import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...props }) => (
  <button
    className={`
    ${inverted ? "inverted" : ""}
     ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
