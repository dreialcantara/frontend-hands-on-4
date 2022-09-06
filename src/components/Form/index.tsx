import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Form/styles.css";

import * as C from "../../../src/components/AppStyles";

function FormFloatingBasicExample() {
  return (
    <C.LoginContainer>
      <div className="container justify-content-center align-items-center">
        <LogoLogin className="" />
        <p className="mb-4">LOGIN</p>
        <Form className="">
          <Form.Group className="mb-2 " controlId="formGroupEmail">
            <Form.Control
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
        <p>cadastre-se</p>
      </div>
    </C.LoginContainer>
  );
}

export default FormFloatingBasicExample;
