import React from "react";
import "./checkoutpage.styles.scss";
import { connect } from "react-redux";
import {
  selectCartItemsTotal,
  selectCartItems
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import  CheckoutItem  from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout">
    <div className="checkout__header">
      <div className="checkout__header--block">
        <span>Product</span>
      </div>
      <div className="checkout__header--block">
        <span>Description</span>
      </div>
      <div className="checkout__header--block">
        <span>Quantity</span>
      </div>
      <div className="checkout__header--block">
        <span>Price</span>
      </div>
      <div className="checkout__header--block">
        <span>Remove</span>
      </div>
    </div>
    <div className="checkout__main">
      {
        cartItems.map(item => 
        (<CheckoutItem key={item.id} cartItem={item}/>))
      }
    </div>
    <div className="checkout__footer">
      <h1 className="total"> Total {totalPrice}$</h1>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
