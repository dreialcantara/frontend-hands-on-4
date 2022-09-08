import React from "react";

import Header from "../../components/Header";
import CardPost from "../../components/CardPost";
import CardFeed from "../../components/CardFeed";
import Container from "react-bootstrap/Container";

import "./styles.css";

function Login() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Container
          fluid
          className="ContainerFeed border-end border-start justify-content-center"
        >
          <CardPost />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
        </Container>
      </div>
    </>
  );
}

export default Login;
