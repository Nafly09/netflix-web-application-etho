import styled, { keyframes } from "styled-components";

const shakeAnimation = keyframes`
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
`;

export const StyledInput = styled("input")<{ warning?: boolean }>`
  width: calc(100% - 18px);
  padding: 10px;
  margin: 0 0 22px;
  border-radius: 5px;
  border: ${(props) =>
    props.warning ? "2px solid #e32a13" : "1px solid black"};
  animation-name: ${(props) => props.warning && shakeAnimation};
  animation-duration: 0.82s;
  :focus {
    outline: none;
    ::placeholder {
      color: #e32a13;
    }
  }
`;
