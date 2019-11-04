import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  // Stripe requires sets ( price * 100)
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_sLYbw1LaBaJ5Btl59fmoZZks00E4ODxOGH";

  const onToken = token => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(res => {
      alert('Payment successful!')
    }).catch(err => {
      console.error(JSON.parse(err))
      alert('There was issue with your payment. Please use provided test credit card.')
    })
  };

  return (
    <StripeCheckout
      name="reacte-commerce Co."
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      label="ORDER NOW"
      panelLabel="ORDER NOW"
      shippingAddress
      billingAddress
      amount={priceForStripe}
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
