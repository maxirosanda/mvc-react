import React from 'react'
import {Image} from "react-bootstrap"
import {useCartContext} from '../../Context'
import ButtonFuncion from '../Button/Button'
const Cart = ({item , cantidad}) => {
  
  const {removeItem} = useCartContext() 
  
  return (
    <React.Fragment>
    <tr>
      <td>{item.codigo}  <ButtonFuncion funcionClick={() =>{removeItem(item.id)}}  texto={"Remover"} ></ButtonFuncion></td>
      <td>{item.nombre} <h6>{item.descripcion}</h6></td>
      <td><Image fluid className="rounded" src={item.url}/></td>
      <td>{item.precio}</td>
      <td>{cantidad} </td>
    </tr>  
   
    </React.Fragment>
  )
      
}

export default Cart
