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
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin: 0 0 22px;
  border-radius: 5px;
  border: ${(props) =>
    props.warning
      ? props.theme.standardization.button_borders.danger
      : props.theme.standardization.button_borders.primary};
  animation-name: ${(props) => props.warning && shakeAnimation};
  animation-duration: 0.82s;
  ::placeholder {
    color: ${(props) => props.theme.palette.typography.contrast};
    font-family: ${(props) => props.theme.typography.fonts.secondary};
    font-size: ${(props) => props.theme.typography.sizes.placeholders};
  }
  :focus {
    outline: 1px solid ${(props) => props.theme.palette.core.primary};
  }
`;
