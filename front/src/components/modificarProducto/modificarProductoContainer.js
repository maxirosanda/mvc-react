import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import React ,{useState}  from 'react'
import { Form, Button,Col } from "react-bootstrap"
import { Redirect } from "react-router";
import {Spinner} from 'react-bootstrap'
import ModificarProducto from './modificarProducto'
import { useParams } from "react-router-dom"


const ModificarProductoContainer= () => {

  const [datosant ,setDatosant] = useState({})
  const [datos ,setDatos] = useState({})
  const [valor ,setValor] = useState(0)
  const { id } = useParams()
const [url,setUrl]=useState(`http://localhost:8080/productos/${id.toString()}`)

 const clickFormulario = (e) => {
      e.preventDefault()
      setValor(1)
      setDatos({...datos,
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
        [e.target[2].name]: e.target[2].value,
        [e.target[3].name]: e.target[3].value,
        [e.target[4].name]: e.target[4].value,
        [e.target[5].name]: e.target[5].value,
        [e.target[6].name]: e.target[6].value
      })

  };
  const clickFormulario2 = (e) => {
    e.preventDefault()
    setValor(2)
};
  
 const renderResponse = (error, response, isLoading) => {
  
    if(error) {
      return (<h2>No se pudo guardar el producto, intento en unos instantes</h2>)
    } else if(isLoading) {
      return (<Spinner animation="border" role="status"/>)
    } else if(response !== null) {
      if(valor== 0){
        setDatosant(response.data)
        return (<div>{response.data.message}</div> )
      }
      if(valor== 1){
        //setValor(0)
        return (<div>{response.data.message}</div>)
      }
      if(valor== 2){
        //setValor(0)
        return ( <Redirect to={"/agregar"} />)
      }
     
      
    }
    return null
  }


  



  return <React.Fragment>
{

       valor == 0 && <div><Get url={url}>{renderResponse}</Get> <ModificarProducto datos={datosant} clickFormulario={clickFormulario} clickFormulario2={clickFormulario2}></ModificarProducto></div>
    || valor == 1 && <div><Put url={url}  data={datos} >{renderResponse} </Put></div>
    || valor == 2 && <Delete url={url}  data={datos} >{renderResponse} </Delete>
    
} 
    </React.Fragment>
    
}
export default  ModificarProductoContainer
  