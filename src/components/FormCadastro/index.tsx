import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import * as C from "../AppStyles";
import { useState } from "react";

function FormCadastro() {
  const [nomeMorador, setNomeMorador] = useState<string>("");
  const [emailMorador, setEmailMorador] = useState<string>("");
  const [passwordMorador, setPasswordMorador] = useState<any>("");
  const [confPasswordMorador, setConfPasswordMorador] = useState<any>("");
  const [apMorador, setApMorador] = useState<string>("");
  const [fotoMorador, setFotoMorador] = useState<string>("");

  const payload = {
    nomeMorador,
    emailMorador,
    passwordMorador,
    apMorador,
  };

  //verificar como aplicar função de confirmação de senhas iguais;
  function validatePassword() {
    if (passwordMorador !== confPasswordMorador) {
      confPasswordMorador.setCustomValidity("Senhas diferentes!");
    } else {
      confPasswordMorador.setCustomValidity("");
    }

    passwordMorador.onchange = validatePassword;
    confPasswordMorador.onkeyup = validatePassword;
  }

  //

  return (
    <C.LoginContainer className="cadastroContainer">
      <div className="container justify-content-center align-items-center">
        <LogoLogin className="" />
        <p className="mb-4">CADASTRO</p>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(payload);
          }}
        >
          <Form.Control
            type="text"
            onChange={(event) => setNomeMorador(event.target.value)}
            value={nomeMorador}
            placeholder="nome"
            className="mb-2 text-center w-100"
            required
          />
          <Form.Control
            type="email"
            onChange={(event) => setEmailMorador(event.target.value)}
            value={emailMorador}
            placeholder="email"
            className="mb-2 text-center w-100"
            required
          />

          <Form.Control
            type="password"
            onChange={(event) => setPasswordMorador(event.target.value)}
            value={passwordMorador}
            placeholder="senha"
            className="mb-2 text-center w-100"
            required
          />

          <Form.Control
            type="password"
            placeholder="confirmar senha"
            onChange={(event) => setConfPasswordMorador(event.target.value)}
            value={confPasswordMorador}
            className="mb-2 text-center w-100"
            required
          />

          <Form.Control
            type="text"
            onChange={(event) => setApMorador(event.target.value)}
            value={apMorador}
            placeholder="unidade/apartamento"
            className="mb-2 text-center w-100"
            required
          />

          <Form.Control
            type="text"
            value={fotoMorador}
            onChange={(event) => setFotoMorador(event.target.value)}
            placeholder="link da foto"
            className="mb-4 text-center w-100"
          />

          <ButtonSubmit className="" text="cadastrar" action="submit" />
        </Form>
      </div>
    </C.LoginContainer>
  );
}

export default FormCadastro;
