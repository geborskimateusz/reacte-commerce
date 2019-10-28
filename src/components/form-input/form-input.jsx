import React from "react";
// import "./form-input.styles.scss";
import {
  GroupContainer,
  FormInputContainer,
  FromInputLabelContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FromInputLabelContainer {...otherProps}>{label}</FromInputLabelContainer>
    ) : null}
  </GroupContainer>
);

export default FormInput;
