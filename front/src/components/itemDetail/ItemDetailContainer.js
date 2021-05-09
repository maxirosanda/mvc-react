import React , { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
import {getFirestore} from '../../firebase/index'
import {useCartContext} from '../../Context'
import request  from 'superagent';

const ItemDetailContainer = () => {
  const {llevar,setTerminar} = useCartContext()
  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
setLoading(true)
request.get(`http://localhost:8080/productos/${id}`)
    .end((err,res)=>{
      setProducto(JSON.parse(res.text))
      console.log(producto)
    })

  },[])

  useEffect(()=>{
   producto._id != undefined && setLoading(false)
    },[producto])

    useEffect(() => {
      setTerminar(false)
      llevar.length &&
        llevar.map((itenes) => {
        if(itenes.item._id ==producto._id){
            setTerminar(true)
          }
        })
     },[producto])
    

  return <React.Fragment> 
      
<div className="container-fluid row m-0 p-0 px-3">
{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
       <ItemDetail key={producto._id} item={producto} />

 )}
</div>
</React.Fragment>
}

export default ItemDetailContainer
