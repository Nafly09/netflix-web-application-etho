import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";

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

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: #1a1a1a;
`;

export const Input = styled("input")<{ warning?: boolean }>`
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

export const Button = styled.button`
  color: #fff;
  width: 100%;
  padding: 9px;
  margin: 0 0 22px;
  border-radius: 5px;
  background-color: #e31a13;
  border: 0;
`;

export const Error = styled.p`
  color: #e31a13;
  font-weight: 800;
`;
