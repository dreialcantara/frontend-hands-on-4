import React from "react";
import Header from "../../components/Header";
import CardUsuario from "../../components/CardUsuario";
import CardFeed from "../../components/CardFeed";

function Usuario() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column align-items-center">
        <CardUsuario />
        <CardFeed />
      </div>
    </>
  );
}

export default Usuario;