import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7986cb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
  margin-top: 200px;
`;

export const LoadingText = styled.p`
  color: #dccdf8;
  font-size: large;
  font-weight: 300;
`;