import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";

import * as C from "../../../src/components/AppStyles";

function FormFloatingBasicExample() {
  return (
    <C.LoginContainer>
      <LogoLogin />
      <p>LOGIN</p>
      <FloatingLabel controlId="floatingInput" label="" className="mb-3 ">
        <Form.Control type="email" placeholder="email" className="mb-3" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="">
        <Form.Control type="password" placeholder="senha" />
      </FloatingLabel>
      <ButtonSubmit text="entrar" action="submit" />
      <p>cadastre-se</p>
    </C.LoginContainer>
  );
}

export default FormFloatingBasicExample;
