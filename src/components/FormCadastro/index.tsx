import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import * as C from "../AppStyles";

function FormCadastro() {
  return (
    <C.LoginContainer className="cadastroContainer">
      <div className="container justify-content-center align-items-center">
        <LogoLogin className="" />
        <p className="mb-4">CADASTRO</p>
        <Form className="">
          <Form.Control
            type="text"
            placeholder="nome"
            className="mb-2 text-center w-75"
          />
          <Form.Control
            type="email"
            placeholder="email"
            className="mb-2 text-center w-75"
          />

          <Form.Control
            type="password"
            placeholder="senha"
            className="mb-2 text-center w-75"
          />

          <Form.Control
            type="password"
            placeholder="confirmar senha"
            className="mb-2 text-center w-75"
          />

          <Form.Control
            type="text"
            placeholder="unidade/apartamento"
            className="mb-2 text-center w-75"
          />

          <Form.Control
            type="text"
            placeholder="link da foto"
            className="mb-4 text-center w-75"
          />

          <ButtonSubmit className="" text="entrar" action="subtmit" />
        </Form>
      </div>
    </C.LoginContainer>
  );
}

export default FormCadastro;
