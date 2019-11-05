import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CollectionItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin: 1%;
  }

  @media screen and (max-width: 800px) {
    & > * {
      margin-bottom: 5%;
      flex: 1 1 50%;
    }
  }
`;
