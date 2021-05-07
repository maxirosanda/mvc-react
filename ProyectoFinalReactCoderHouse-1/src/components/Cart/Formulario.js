import React from 'react'
import {Form,Button} from "react-bootstrap"
import ButtonFuncion from '../Button/Button'
import {useCartContext} from '../../Context'

const Formulario = ({clickFormulario,tomandoDatos}) => {
  
const {nombre,tel,email} = useCartContext()
  return (
    <React.Fragment>


<Form onSubmit={(e) =>{clickFormulario(e)}}>
  <Form.Group controlId="nombre">
    <Form.Label>Nombre y Apellido</Form.Label>
    <Form.Control  type="text" onBlur={tomandoDatos} name="nombre" required   placeholder = "ingrese su nombre"  />
  </Form.Group>
  <Form.Group controlId="tel">
    <Form.Label>Ingrese Numero de Telefono</Form.Label>
    <Form.Control type="number" onBlur={tomandoDatos} name="tel"  required  placeholder="ingrese un telefono" />
  </Form.Group>

  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" onBlur={tomandoDatos} name="email"  required   placeholder="ingrese su email"  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form> 
   </React.Fragment>
   )
       
 }
 
 export default Formulario
 