import React, { useState } from "react";
import Login from "./login";
import request from "superagent";
import { Redirect } from "react-router";
const CartContainer = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("")
 
  const tomandoUsuario = (e) => {
    setUsuario(e.target.value);
  };
  const tomandoPassword = (e) => {
    setPassword(e.target.value);
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
        tomandoUsuario={tomandoUsuario}
        tomandoPassword={tomandoPassword}
      ></Login>
    </React.Fragment>
  );
};

export default CartContainer;
