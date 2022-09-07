import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import "./styles.css";

const logoheader = require("../../img/logoheader.png");

function Header() {
  return (
    <Navbar className="navbar p-0 shadow-sm bg-white rounded">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img alt="" src={logoheader} className="img-fluid align-center" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="collapse justify-content-end"
        >
          <Navbar.Text> Olá, usuário | </Navbar.Text>{" "}
          <Link to="/">
            {" "}
            <span className="sair m-1">sair</span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
