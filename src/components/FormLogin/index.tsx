import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";
import Input from "../Input";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import * as C from "../AppStyles";

function FormLogin() {
  return (
    <C.LoginContainer>
      <div className="container justify-content-center align-items-center">
        <LogoLogin className="" />
        <p className="mb-4">LOGIN</p>
        <Form className="">
          <Form.Group className="mb-2 " controlId="formGroupEmail">
            <Input
              type="email"
              placeholder="email"
              className="mb-2 text-center w-75"
            />
          </Form.Group>
          <Form.Group
            className="mb-2 text-center"
            controlId="formGroupPassword"
          >
            <Form.Control
              type="password"
              placeholder="senha"
              className="mb-2 text-center w-75"
            />
          </Form.Group>
          <ButtonSubmit className="" text="entrar" action="subtmit" />
        </Form>
        <Link className="link" to="/cadastro">
          cadastre-se
        </Link>
      </div>
    </C.LoginContainer>
  );
}

export default FormLogin;
