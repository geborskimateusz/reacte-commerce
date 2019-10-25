import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => {
    console.log(cartItems)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = ({ cart: {cartItems} }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);

