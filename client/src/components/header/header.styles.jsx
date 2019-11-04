import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
    color: rgb(90, 85, 85);
    margin: 0 5%;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 88%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 1.5% 0;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;