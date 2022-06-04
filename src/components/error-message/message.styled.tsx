import styled from "styled-components";

export const StyledError = styled.p`
  color: ${(props) => props.theme.palette.typography.danger};
  font-weight: ${(props) => props.theme.typography.weights.focus};
  text-align: center;
`;
