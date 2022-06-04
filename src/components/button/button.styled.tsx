import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => props.theme.palette.typography.primary};
  font-family: ${(props) => props.theme.typography.fonts.secondary};
  font-size: ${(props) => props.theme.typography.sizes.placeholders};
  width: 100%;
  padding: 9px;
  margin: 0 0 22px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.palette.core.primary};
  border: 0;
`;
