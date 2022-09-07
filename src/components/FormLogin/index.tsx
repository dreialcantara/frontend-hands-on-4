import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import * as C from "../AppStyles";
import "./styles.css";

function FormLogin() {
  return (
    <C.LoginContainer className="container-fluid">
      <LogoLogin className="" />

      <Form className="">
        <p className="mb-4">LOGIN</p>

        <Form.Control
          type="email"
          placeholder="email"
          className="mb-2 text-center w-100"
        />
        <Form.Control
          type="password"
          placeholder="senha"
          className="mb-3 text-center w-100"
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
