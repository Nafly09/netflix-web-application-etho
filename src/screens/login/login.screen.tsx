import { Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { Wrapper } from "./login.styled";
import { StyledInput } from "../../components/input/input.styled";
import { StyledButton } from "../../components/button/button.styled";
import { StyledError } from "../../components/error-message/message.styled";
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
        <StyledInput
          type="email"
          name="email"
          placeholder="E-mail"
          warning={error.includes("email") && true}
          onChange={handleChange}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Senha"
          warning={error.includes("senha") && true}
          onChange={handleChange}
        />
        <StyledButton onClick={handleSend}>Enviar</StyledButton>
        <StyledError>{error}</StyledError>
      </Grid>
    </Wrapper>
  );
}
