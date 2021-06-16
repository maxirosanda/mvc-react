import React from 'react'
import {Form,Button} from "react-bootstrap"
import ButtonFuncion from '../Button/Button'
import {useCartContext} from '../../Context'

const ModificarProducto = ({datos,clickFormulario,clickFormulario2}) => {
  
  return (
    <React.Fragment>

<div className="row justify-content-center">
    <Form className="col-4 align-self-center" onSubmit={(e) =>{clickFormulario(e)}} >
      <h1>Login de Usuario</h1> 
      <Form.Group controlId="formBasicEmail" >
        <Form.Control type="text" name="nombre"  defaultValue={datos.nombre} required/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" name="descripcion" defaultValue={datos.descripcion} required/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" name="codigo" defaultValue={datos.codigo} required/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" name="url" defaultValue={datos.url} required/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="number" name="precio" defaultValue={datos.precio} required/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="number" name="stock" defaultValue={datos.stock} required/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" name="categoria" defaultValue={datos.categoria} />
      </Form.Group>
      <Button variant="primary" type="submit"> Actualizar</Button>
    </Form>
    <Form className="col-4 align-self-center" onSubmit={(e) =>{clickFormulario2(e)}} >
      <Button variant="primary" type="submit"> Borrar</Button>
    </Form>
    </div>  
   </React.Fragment>
   )
       
 }
 
 export default ModificarProducto
 