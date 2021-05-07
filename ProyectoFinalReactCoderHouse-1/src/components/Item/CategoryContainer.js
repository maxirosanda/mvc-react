import React , { useState, useEffect } from 'react'
import Item from "./Item"
import { useParams } from "react-router-dom"
import {getFirestore} from '../../firebase/index'
import {Spinner} from 'react-bootstrap'
import request  from 'superagent';

const CategoryContainer = ({}) => { 
  
 const { categoria } = useParams()
 const [items, setItems] = useState({})
 const [loading,setLoading] = useState(false) 


  useEffect(() => {
  setLoading(true)  
  request.get(`http://localhost:8080/productos/cat/${categoria}`)
  .end((err,res)=>{
    const productos =JSON.parse(res.text)
    setItems(productos)
   })


    },[categoria])

    useEffect(()=>{
      items.length && setLoading(false)
      },[items])

    return (
      <React.Fragment>
        <div className="container-fluid row m-0 p-0 px-3">
        { 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
       items.length && items.map((item) => {
             return <Item key = {item.id} item = {item} > </Item>
            })) }  
        </div>
      </React.Fragment>
    )

}
export default CategoryContainer
