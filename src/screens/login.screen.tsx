import { Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { Button, Error, Input, Wrapper } from "./login.styled";
import * as yup from "yup";

export default function Form() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = useCallback(
    ({ target }: any) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSend = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });
      await schema.validate(data);
      setError("");
    } catch (error: any) {
      setError(error.errors[0]);
    }
  }, [data]);

  return (
    <Wrapper container alignContent="center" justifyContent="center">
      <Grid item xs={4}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <Button onClick={handleSend}>Enviar</Button>
        <Error>{error}</Error>
      </Grid>
    </Wrapper>
  );
}
