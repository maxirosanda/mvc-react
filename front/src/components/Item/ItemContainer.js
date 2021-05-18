import React, { useEffect, useState } from 'react'
import Item from './Item'
import {Spinner} from 'react-bootstrap'
import request  from 'superagent';
const ItemList= () => {
  const [loading,setLoading] = useState(false)
  const [items, setItems] = useState({})

  useEffect(() => {
    setLoading(true)
    
    request.get('http://localhost:8080/productos')
    .end((err,res)=>{
      const productos =JSON.parse(res.text)
      setItems(productos)
    })
  

      },[items])
   
  useEffect(()=>{
    items.length && setLoading(false) 
    },[items])

  return <React.Fragment> 
      
      <div className="container-fluid row m-0 p-0 px-3">
      { 
        loading ? (
          <Spinner animation="border" role="status"/>
  
        ):(
       items.length && items.map((item) => {
             return <Item key = {item.id} item = {item} > </Item>
        }))
     }
     </div>
  </React.Fragment>
  }
  
  export default ItemList 
  