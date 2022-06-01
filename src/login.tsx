import { Grid } from "@mui/material";
import { useCallback } from "react";
import { Wrapper } from "./login.styled";

export default function Login() {
  const handleChange = useCallback((event: any) => {
    const { target } = event;
    console.log(target.name, target.value);
  }, []);
  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <input type="text" onChange={handleChange}></input>
    </Wrapper>
  );
}
