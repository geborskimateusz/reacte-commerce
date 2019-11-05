import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 70%;
  margin: 10% auto;
`;

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2%;
  border-bottom: 1px solid gray;
  font-size: 30px;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutFooter = styled.div`
  border-bottom: 1px solid gray;

  .total {
    text-align: end;

    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }

  
`;

export const TestWarningStyles = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const StripeCheckoutStyles = styled.div`
  margin: 3% auto;
  text-align: center;
`;
