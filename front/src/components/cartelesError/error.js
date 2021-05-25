import React,{useState} from 'react'
import { Form, Button,Col,Jumbotron } from "react-bootstrap"


const Error = ({ tipo }) => {

  return (
    <React.Fragment >
      <div className="row justify-content-center">
      <Jumbotron className="col-4 align-self-center">
  <h1>Ocurrio un erro </h1>
  <p>
    Por favor vuelva a ingresar los datos y en caso de persistir el error comunicarse con soporte
  </p>
  <p>
    <Button variant="primary">Volver a intentarlo </Button>
  </p>
</Jumbotron>
      </div>
    </React.Fragment>
  )
}
export default Error
