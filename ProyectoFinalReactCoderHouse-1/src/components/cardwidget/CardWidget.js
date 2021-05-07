import React, {useContext, useState ,useEffect} from 'react'
import Carrito from '../../assets/CardWidget.png'
import { Col, Image, Row } from 'react-bootstrap'
import {useCartContext} from '../../Context'
import {Link} from 'react-router-dom'
const CardWidget = () => {
  
  const {llevar,sumar }= useCartContext()
 
  return (
    <React.Fragment>
      <Row className='row justify-content-end'>
        <Col xs={12} lg={8} className='row justify-content-center'>
        <Link to={`/cart`}><Image fluid className='rounded' src={Carrito} /></Link>  
        </Col>
        <Col xs={12} lg={8} className='row justify-content-center'>
         <h3 style={{ color: "#FFFFFF", textDecoration: "none",visibility:llevar.length ?"visible" :"hidden" }}>{sumar}</h3>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default CardWidget 
