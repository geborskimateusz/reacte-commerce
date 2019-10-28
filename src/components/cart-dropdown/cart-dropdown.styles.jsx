import styled from "styled-components";
import Button from "../button/button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const EmptyMessageContainer = styled.span`
  align-self: center;
  margin: auto;
`;

export const CheckoutButtonWrapper = styled(Button)`
  margin-top: auto;
`;
