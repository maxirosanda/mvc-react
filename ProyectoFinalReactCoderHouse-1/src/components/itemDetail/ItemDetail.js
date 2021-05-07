import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import "./ItemDetail.css"
import ButtonFuncion from '../Button/Button'
import ButtonLink from '../Button/ButtonLink'
import ContadorContainer from "../contador/ContadorContainer"
import {useCartContext} from '../../Context'

const ItemDetail = ({ item }) => {
  const {removeItem,clearItems,terminar} = useCartContext()
  
  return  <React.Fragment>
      <Container fluid className="mb-20 mt-5">
        <Row>
          <Col xs={12} lg={5} className="row justify-content-center">
            <Image fluid className="rounded" src={item.url} />
          </Col>
          <Col xs={12} lg={6} className=" align-self-center">
            <h2 className="text-center"> {item.nombre}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col xs={12} className="mt-4">
                <h2 className="text-center ">Precio ${item.precio}</h2>
                <h2 className="text-center ">Stock {item.stock}</h2>
                </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="text-center">
            {item.descripcion}
          </Col>
          </Row>
          <Row>
            {
              terminar ? (
                <>
                <ButtonFuncion funcionClick={()=>{removeItem(item._id)}}  texto={"Remover"} />
                <ButtonLink texto="Terminar" link="/cart" />
                <ButtonFuncion funcionClick={clearItems}  texto={"Borrar todos"} />
                </>
              ):(

              <ContadorContainer item={item} />
              )
            }
             <ButtonLink texto="Seguir comprando" link="./" />
          </Row> 
      </Container>
    </React.Fragment>
  
}
export default ItemDetail
