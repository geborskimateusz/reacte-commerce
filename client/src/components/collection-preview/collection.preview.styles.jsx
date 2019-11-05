import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    margin-left: 2%;
  }

 


`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
  }
`;
