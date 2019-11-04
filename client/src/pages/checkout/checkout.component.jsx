import React from "react";
import { connect } from "react-redux";
import {
  selectCartItemsTotal,
  selectCartItems
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutFooter,
  TestWarningStyles,
  StripeCheckoutStyles
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <CheckoutContainer>
    <CheckoutHeader>
      <CheckoutHeaderBlock>
        <span>Product</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Description</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Quantity</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Price</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Remove</span>
      </CheckoutHeaderBlock>
    </CheckoutHeader>
    <div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
    </div>
    <CheckoutFooter >
      <h1 className="total"> Total {totalPrice}$</h1>
    </CheckoutFooter>
    <TestWarningStyles >
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarningStyles>
    <StripeCheckoutStyles >
      <StripeCheckoutButton price={totalPrice} />
    </StripeCheckoutStyles>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
