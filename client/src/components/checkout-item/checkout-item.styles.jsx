import styled from "styled-components";

export const QuantitySpan = styled.span`
  display: flex;

  .value {
    margin: 0 10px;
  }
`;
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name,
  ${QuantitySpan}, .price {
    width: 23%;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;


export const ArrowContainer = styled.span`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
