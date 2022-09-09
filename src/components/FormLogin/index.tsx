import Form from "react-bootstrap/Form";
import ButtonSubmit from "../ButtonSubmit";
import LogoLogin from "../LogoLogin";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { login } from "../../services/MainApi/login";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import * as C from "../AppStyles";
import "./styles.css";
import { setUser } from "../../store/module/user";

function FormLogin() {
  const [email, setEmailMorador] = useState<string>("");
  const [password, setPasswordMorador] = useState<string>("");
  const dispatch = useDispatch();

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await login({ email, password });
      console.log(response.data);

      dispatch(
        setUser({
          token: response.data,
          email,
        })
      );

      alert("Usuário Logado!");
    } catch (error) {
      alert("Deu algo errado");
    }
  };

  return (
    <C.LoginContainer className="container-fluid">
      <LogoLogin className="" />

      <Form onSubmit={submit}>
        <p className="mb-4">LOGIN</p>

        <Form.Control
          type="email"
          onChange={(event) => {
            setEmailMorador(event.target.value);
          }}
          value={email}
          placeholder="email"
          className="mb-2 text-center w-100"
          required
        />
        <Form.Control
          type="password"
          onChange={(event) => {
            setPasswordMorador(event.target.value);
          }}
          value={password}
          placeholder="senha"
          className="mb-3 text-center w-100"
          required
        />

        <ButtonSubmit className="w-100" text="entrar" action="submit" />

        <Link className="link" to="/cadastro">
          cadastre-se
        </Link>
        <br></br>
        <Link className="link" to="/feed">
          Feed
        </Link>
      </Form>
    </C.LoginContainer>
  );
}

export default FormLogin;
