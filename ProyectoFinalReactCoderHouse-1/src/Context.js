import React, { useContext, useState, useEffect} from "react"

export  const CartContext = React.createContext([])
export  const useCartContext= ()=> useContext(CartContext)
export const Context= ({children}) => {

const [llevar,setLlevar] = useState([])
const [sumar,setSumar] = useState(0);
const [terminar, setTerminar] = useState(false)
const [preciofinal,setPreciofinal] = useState(0)
const [userDatos, setUserDatos] = useState("")

useEffect(() => {
  setPreciofinal(0)
  llevar.length &&
    llevar.map((itenes) => {
      setPreciofinal((preciofinal)=>{ 
        return preciofinal + itenes.item.precio * itenes.cantidad})
    })
}, [llevar])


const addItem = (item,cantidad) =>{
  setLlevar([...llevar, {item,cantidad}])
  setTerminar(true)
 }

const removeItem = (id) =>{

 const newItem = llevar.filter((itenes) => itenes.item._id !== id )
 setLlevar(newItem)
 setTerminar(false)
 }

 const clearItems = () =>{
   setTerminar(false)
   setLlevar([])
   }


     useEffect(() => {
          setSumar(0)
          llevar.length &&
            llevar.map((itenes) => {
              setSumar((sumar) => {return sumar + itenes.cantidad})
            })
        }, [llevar]) 
         
 
    return (
     <CartContext.Provider value={{llevar,setLlevar,sumar,addItem,removeItem,clearItems,terminar,setTerminar,preciofinal,setPreciofinal,userDatos,setUserDatos}}>
            {children}
     </CartContext.Provider>
     )
   }

