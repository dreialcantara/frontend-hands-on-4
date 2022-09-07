import React from "react";

import Header from "../../components/Header";
import CardPost from "../../components/CardPost";
import CardFeed from "../../components/Card";

function Login() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column align-items-center">
        <CardPost />
        <CardFeed />
      </div>
    </>
  );
}

export default Login;
