import React,{useState} from 'react'
import { Form, Button,Col } from "react-bootstrap"


const Login = ({clickFormulario,tomandoDatos}) => {

  return (
    <React.Fragment>
      
      <Form onSubmit={(e) =>{clickFormulario(e)}}>
        <h1>Login de Usuario</h1> 
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" name="usuario" onChange={tomandoDatos} placeholder="Ingrese su usuario" />
        </Form.Group>
        <Button variant="primary" type="submit">Ingresar</Button>
      </Form>
    </React.Fragment>
  )
}
export default Login
