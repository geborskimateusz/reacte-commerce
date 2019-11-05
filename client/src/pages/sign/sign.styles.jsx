import styled from "styled-components";

export const Sign = styled.div`
width: 850px;
display: flex;
justify-content: space-between;
margin: 30px auto;

@media screen and (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 600px) {
  flex-direction: column;
  align-items: center;
  

  & > div {
    width: 80%;
    margin-top: 5%;
  }
}
`;
