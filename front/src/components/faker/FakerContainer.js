import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Item from './Item'
import {Spinner} from 'react-bootstrap'
import request  from 'superagent';
const FakerContainer= ({}) => {
  const [loading,setLoading] = useState(false)
  const [items, setItems] = useState({})
  const { cant } = useParams()
  useEffect(() => {
    setLoading(true)
    
    request.get(`http://localhost:8080/productos/vista-test/${cant}`)
    .end((err,res)=>{
      const productos =JSON.parse(res.text)
      setItems(productos)
    })
  

      },[])
   
  useEffect(()=>{
    items.length  && setLoading(false) 
    cant == 0  && setLoading(false) 
    },[items])

  return <React.Fragment> 
      
      <div className="container-fluid row m-0 p-0 px-3">
      { 
        loading ? (
          <Spinner animation="border" role="status"/>
  
        ):(
       cant == 0 ? (
         <h1>No hay productos Disponibles</h1>
       ):(
        items.length && items.map((item) => {
          return <Item key = {item.id} item = {item} > </Item>
     })
       )
       )
     }
     </div>
  </React.Fragment>
  }
  
  export default FakerContainer
  