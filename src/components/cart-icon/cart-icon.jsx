import React from "react";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import {
  CartIconContainer,
  ShopingCartIcon,
  ItemCountSpan
} from "./cart-icon.styles";

const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toogleCartHidden}>
    <ShopingCartIcon />
    <ItemCountSpan>{itemCount}</ItemCountSpan>
  </CartIconContainer>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
