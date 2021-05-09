import React from 'react'
import { Card } from "react-bootstrap"
import ButtonLink from '../Button/ButtonLink'

const Item = ({ key , item }) => {

  return (
    <React.Fragment>
      <Card
        className="col-lg-3 col-md-4 col-sm-6 col-12"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={item.url} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            <h6>Codigo: {item.codigo}</h6>
            <h6> Stock: {item.stock}</h6>
            <h6>{item.precio}</h6>
            <h6>{item.descripcion}</h6>
          </Card.Text>
          <ButtonLink texto='Comprar' link={`/item/${item._id}`}></ButtonLink>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}
export default Item
