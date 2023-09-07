import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  margin-top: 105px;
  @media screen and (max-width: 767px) {
    margin-top: 230px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const DetailInfo = styled.div`
  text-align: left;
  font-size: 24px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DetailText = styled.p`
  color: #efe9fc;
`;

export const DetailTitle = styled.b`
  color: #b8de8a;
  font-variant: small-caps;
  text-decoration: underline;
`;

export const DetailImage = styled.img`
  border-radius: 8px;
  box-shadow: 2px 2px 5px whitesmoke;
`;

export const DetailButton = styled.button`
  padding: 10px 20px;
  display: flex;
  margin: auto;
  margin-top: 45px;
  padding: 0.5rem;
  font-size: smaller;
  border-radius: 5px;
  border: none;
  background-color: #3f8d51;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: #60b874;
  }
`;
