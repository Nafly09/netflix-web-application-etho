import { Grid } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { Button, Error, Input, Wrapper } from "./login.styled";
import * as yup from "yup";

export default function Form() {
  const passwordVerifierRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(.*[0-9])$/;
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
        email: yup
          .string()
          .required("O campo de email é obrigatório.")
          .email("Por favor insira um endereço de email válido."),
        password: yup
          .string()
          .matches(
            passwordVerifierRegex,
            "Sua senha dever ter no mínimo 1 letra maiúscula e 1 número."
          )
          .min(8, "Sua senha deve ter no mínimo 8 caracteres.")
          .required("O campo de senha é obrigatório."),
      });
      await schema.validate(data);
      console.log("Login successful!");
      setError("");
    } catch (error: any) {
      setError(error.errors[0]);
    }
    //eslint-disable-next-line
  }, [data]);

  return (
    <Wrapper container alignContent="center" justifyContent="center">
      <Grid item xs={4}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          warning={error.includes("email") && true}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          warning={error.includes("senha") && true}
          onChange={handleChange}
        />
        <Button onClick={handleSend}>Enviar</Button>
        <Error>{error}</Error>
      </Grid>
    </Wrapper>
  );
}
