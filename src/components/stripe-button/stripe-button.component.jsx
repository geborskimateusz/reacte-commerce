import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // Stripe requires sets ( price * 100)
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_sLYbw1LaBaJ5Btl59fmoZZks00E4ODxOGH";

  const onToken = token => {
    console.log(token);
    alert('Payment succesful!');
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
