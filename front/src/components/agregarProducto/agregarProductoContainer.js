
import React, { useState } from "react";
import AgregarProducto from "./agregarProducto";
import { Redirect } from "react-router";
import { Form, Button,Col } from "react-bootstrap"
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
const AgregarProductoContainer = () => {
  const [producto,setProducto]=useState({})
  /*
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigo, setCodigo] = useState("");
  const [url, setUrl] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
 
  const tomandoUsuario = (e) => {
    setUsuario(e.target.value.usuario);
  };
  const tomandoPassword = (e) => {
    setPassword(e.target.value.password);
  };
  const clickFormulario = (e) => {
    e.preventDefault();
    request
      .post("http://localhost:8080/register")
      .query({ usuario: usuario,password: password }) // query string
      .end((err, res) => {
        console.log(err);
        console.log(res);
        console.log(`logiado ${usuario}`);
      });
  };
*/
const tomandoproducto = (e) => {
  setProducto({...producto,[e.target.name]: e.target.value})
}

const  renderResponse = (error, response, isLoading) => {
  if(error) {
    return (<div>Something bad happened: {error.message}</div>)
  } else if(isLoading) {
    return (<div className="loader"></div>)
  } else if(response !== null) {
    console.log("hola")
    return (<div>{response.data}</div>)
  }
  return null
}

  return (
    
    <React.Fragment>
       <Post url="http://localhost:8080/productos" data={producto}   >
             <div className="row justify-content-center">
      <Form className="col-4 align-self-center">
        <h1>Login de Usuario</h1> 
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="nombre" onChange={tomandoproducto}  placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="descripcion" onChange={tomandoproducto} placeholder="Ingrese descripcion" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="codigo" onChange={tomandoproducto}placeholder="Ingrese codigo" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="url" onChange={tomandoproducto}  placeholder="Ingrese url" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="precio" onChange={tomandoproducto}  placeholder="Ingrese precio" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="stock" onChange={tomandoproducto}  placeholder="Ingrese stock" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="categoria"  onChange={tomandoproducto} placeholder="Ingrese Categoria" />
        </Form.Group>
        <Button variant="primary" onChange={renderResponse}> Agregar</Button>
      </Form>
      </div>  
      </Post>
         
    </React.Fragment>
  );
};

export default AgregarProductoContainer;
