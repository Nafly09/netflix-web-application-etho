import { StyledError } from "./message.styled";

export default function ErrorMessage(error: String, ...restProps: any) {
  return <StyledError>{error}</StyledError>;
}
