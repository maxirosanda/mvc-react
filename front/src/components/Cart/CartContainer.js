import React ,{useState}  from 'react'
import Cart from './Cart'
import Formulario from './Formulario'
import { Table,Container,Spinner} from "react-bootstrap"
import {useCartContext} from '../../Context'
import ButtonLink from '../Button/ButtonLink'
import {getFirestore} from '../../firebase/index'
import ButtonFuncion from '../Button/Button'

const CartContainer= () => {

const {llevar,preciofinal,setLlevar,userDatos,setUserDatos} = useCartContext()
const [orden ,setOrden] = useState(null)
const [ordenid ,setOrdenid] = useState('')
const [loading,setLoading] = useState(false)
var d = new Date();



const confirmarCompra = () => {
setLoading(true)  
const db =getFirestore()
const ordenDb = db.collection("orders")
ordenDb.add(orden)
.then(({id}) =>{
    setOrdenid(id)
// comienza traer stock    
    const itemsDb = db.collection("items")
    llevar.map((itenes) => {
      
      
      const item =itemsDb.doc(itenes.item.id)
      item.get()
      .then((doc)=>{
        !doc.exists === 0 && console.log("no hay items")
        console.log(doc.data().stock)  

      let documento = itemsDb.doc(itenes.item.id)
      documento.update({stock: doc.data().stock - itenes.cantidad } )
      }
      ).then(()=>{
        
      }).catch((erro) => {
        return erro
      }).finally(setLoading(false))

    
     
    })
// fin traer stock    
}).catch((e) =>{
console.log("ocurrio el error :" , e)
}).finally( setLlevar([]))
}


const tomandoDatos = (e) =>{
setUserDatos({...userDatos,[e.target.name]: e.target.value})

}


const clickFormulario = (e) => {
  e.preventDefault()
  setOrden( { buyer: {nombre: userDatos.nombre,
                      telefono: userDatos.tel,
                      email: userDatos.email
                      },
              items: llevar,
              date: `${d.getDate()} / ${1 + d.getMonth()} / ${ d.getFullYear()}`,
             total: preciofinal
            }
  )
}


   return <React.Fragment>
     <Container> 
  {

    
     !ordenid  && (
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre Articulo</th>
      <th>Foto</th>
      <th>Precio</th>
      <th>Cantidad</th>
    </tr>
  </thead>
  <tbody>

      {
    
    llevar.length ? (  llevar.map((itenes) => {
        return   <Cart  item = {itenes.item} cantidad={itenes.cantidad} > </Cart>}) )
         : (  
         
            loading ? (    
           <Spinner animation="border" role="status"/>
      
            ):(  
              <h2>No hay items en el carrito</h2> )
         
         )
          

    }
    <tr>
      Precio Final : 
       {preciofinal}   
    </tr>
    </tbody>
</Table>
     )}
<ButtonLink texto="Seguir comprando" link="./" ></ButtonLink>
{
  orden ? ( !ordenid && <ButtonFuncion funcionClick={confirmarCompra}  texto={"Terminar compra"} />)
   :( <Formulario clickFormulario={clickFormulario} tomandoDatos={tomandoDatos} ></Formulario> ) 
  

}

{ordenid && <h3>Su compra fue procesada con el numero de orden: {ordenid}</h3>}
</Container>
  </React.Fragment>
  }
  
  export default CartContainer
  