import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import * as C from "../AppStyles";
import { FormEvent, useState } from "react";
import { cadastroMorador } from "../../services/MainApi/createMorador";

function FormCadastro() {
  const [name, setNomeMorador] = useState<string>("");
  const [email, setEmailMorador] = useState<string>("");
  const [password, setPasswordMorador] = useState<any>("");
  const [confPassword, setConfPasswordMorador] = useState<any>("");
  const [appartament, setApMorador] = useState<string>("");
  const [fotoMorador, setFotoMorador] = useState<string>("");

  const cadastro = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      password,
      appartament,
    };

    try {
      const response = await cadastroMorador(payload);
      if (response.status !== 201) {
        return alert("Algo está errado");
      }
      alert("Cadastro Realizado!");
    } catch (error) {
      alert("Algo está errado");
    }
  };

  //verificar como aplicar função de confirmação de senhas iguais;
  function validatePassword() {
    if (password !== confPassword) {
      confPassword.setCustomValidity("Senhas diferentes!");
    } else {
      confPassword.setCustomValidity("");
    }

    password.onchange = validatePassword;
    password.onkeyup = validatePassword;
  }
  //

  return (
    <C.LoginContainer className="cadastroContainer">
      <div className="container justify-content-center align-items-center">
        <LogoLogin className="" />
        <p className="mb-4">CADASTRO</p>
        <Form onSubmit={cadastro}>
          <Form.Control
            type="text"
            onChange={(event) => setNomeMorador(event.target.value)}
            value={name}
            placeholder="nome"
            className="mb-2 text-center w-100"
            required
          />
          <Form.Control
            type="email"
            onChange={(event) => setEmailMorador(event.target.value)}
            value={email}
            placeholder="email"
            className="mb-2 text-center w-100"
            required
          />

          <Form.Control
            type="password"
            onChange={(event) => setPasswordMorador(event.target.value)}
            value={password}
            placeholder="senha"
            className="mb-2 text-center w-100"
            required
          />

          <Form.Control
            type="password"
            placeholder="confirmar senha"
            onChange={(event) => setConfPasswordMorador(event.target.value)}
            value={confPassword}
            className="mb-2 text-center w-100"
            required
          />

          <Form.Control
            type="text"
            onChange={(event) => setApMorador(event.target.value)}
            value={appartament}
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
