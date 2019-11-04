import React from "react";
// import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantitySpan,
  RemoveButton,
  ArrowContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <span className="name">{name}</span>
      <QuantitySpan>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <span className="value">{quantity}</span>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantitySpan>
      <span className="price">{price}</span>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
