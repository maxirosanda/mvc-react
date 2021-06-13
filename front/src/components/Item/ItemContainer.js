import React, { useEffect, useState } from 'react'
import Item from './Item'
import {Spinner} from 'react-bootstrap'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
const ItemList= () => {
  const [loading,setLoading] = useState(false)
  const [items, setItems] = useState({})
/*
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
    va en el render:
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

*/
  return <React.Fragment > 
    <div className="container-fluid row m-0 p-0 px-3">
      <Get url="http://localhost:8080/productos"  >
        {  
        (error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<Spinner animation="border" role="status"/> )
          }
          else if(response !== null) {
            console.log(response.data)
            return(response.data.map((item) => { return <Item key = {item.id} item = {item}/>}))
            
          }
          return (<div>Default message before request is made.</div>)
          }
     
      }
      </Get>
    </div>
  )

  </React.Fragment>
  }
  
  export default ItemList 
  