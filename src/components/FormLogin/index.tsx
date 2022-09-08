import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import * as C from "../AppStyles";
import "./styles.css";
import { useState } from "react";

function FormLogin() {
  const [emailMorador, setEmailMorador] = useState<string>("");
  const [passwordMorador, setPasswordMorador] = useState<string>("");

  const payload = {
    emailMorador,
    passwordMorador,
  };

  return (
    <C.LoginContainer className="container-fluid">
      <LogoLogin className="" />

      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(payload);
        }}
      >
        <p className="mb-4">LOGIN</p>

        <Form.Control
          type="email"
          onChange={(event) => {
            setEmailMorador(event.target.value);
          }}
          value={emailMorador}
          placeholder="email"
          className="mb-2 text-center w-100"
          required
        />
        <Form.Control
          type="password"
          onChange={(event) => {
            setPasswordMorador(event.target.value);
          }}
          value={passwordMorador}
          placeholder="senha"
          className="mb-3 text-center w-100"
          required
        />
        <ButtonSubmit className="w-100" text="entrar" action="submit" />
        <Link className="link" to="/cadastro">
          cadastre-se
        </Link>
      </Form>
    </C.LoginContainer>
  );
}

export default FormLogin;
