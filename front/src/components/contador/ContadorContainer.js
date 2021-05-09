import React , {useState ,useEffect} from "react"
import Contador from './Contador'
import ButtonFuncion from '../Button/Button'
import ButtonLink from '../Button/ButtonLink'
import {useCartContext} from '../../Context'

const ContadorContainer = ({ item }) => {
  
  const {addItem} = useCartContext()
  const [cantidad,setCantidad] = useState(1)
  const [maximo] = useState(item.stock)


  const subirCantidad = () => {
    cantidad < maximo && setCantidad(cantidad + 1)
  }
  const bajarCantidad = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

if(maximo <= 0) { return (
 <React.Fragment>
      <h2>no hay stock lo sentimos mucho</h2>
    </React.Fragment>
  )
}
  return (
      <React.Fragment>
      <Contador cantidad={cantidad} bajarCantidad={bajarCantidad}  subirCantidad={subirCantidad}/>
      <ButtonFuncion funcionClick={()=>{addItem(item,cantidad) }} texto='Agregar al carrito'/>
      </React.Fragment> 
      )
 
}

export default ContadorContainer
