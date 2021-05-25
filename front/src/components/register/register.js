import React,{useState} from 'react'
import { Form, Button,Col } from "react-bootstrap"


const Login = ({clickFormulario,tomandoUsuario,tomandoPassword}) => {

  return (
    <React.Fragment >
      <div className="row justify-content-center">
      <Form className="col-4 align-self-center" onSubmit={(e) =>{clickFormulario(e)}}>
        <h1>Registro de Usuario</h1> 
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="usuario" onChange={tomandoUsuario} placeholder="Ingrese su usuario" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
             <Form.Control type="password" name="password" onChange={tomandoPassword} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">Ingresar</Button>
        <Button href="http://localhost:8080/facebook" className=" ml-2" variant="primary" >Registro con Facebook</Button>
      </Form>
      
      </div>
    </React.Fragment>
  )
}
export default Login
