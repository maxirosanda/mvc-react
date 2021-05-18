import React, { useState } from "react";
import Login from "./login";
import request from "superagent";
import { Redirect } from "react-router";
const CartContainer = () => {
  const [usuario, setUsuario] = useState("");

  const tomandoDatos = (e) => {
    setUsuario(e.target.value);
  };

  const clickFormulario = (e) => {
    e.preventDefault();
    request
      .get("http://localhost:8080/login")
      .query({ usuario: usuario }) // query string
      .end((err, res) => {
        console.log(err);
        console.log(res);
        console.log(`logiado ${usuario}`);
      });
  };

  return (
    <React.Fragment>
      <Login
        clickFormulario={clickFormulario}
        tomandoDatos={tomandoDatos}
      ></Login>
    </React.Fragment>
  );
};

export default CartContainer;
