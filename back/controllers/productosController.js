const Producto = require('../models/productos');
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


 exports.getProductos = async (req, res, next) => {
  try{
     producto = await Producto.find({})
    await res.json(producto)  
  }
  catch (e) { console.log(e) } 
  }
  exports.getProducto = async (req, res, next) => {
    let id = req.params.id;
    try{
       producto = await Producto.find({_id: id})
      await res.json(producto[0])  
    }
    catch (e) { console.log(e) } 
    }

  exports.getProductosCategoria = async (req, res, next) => {
      let categoria = req.params.categoria;
      console.log(categoria)
      try{
         producto = await Producto.find({categoria:categoria})
        await res.json(producto)  
      }
      catch (e) { console.log(e) } 
      }
  exports.createProductos = async (req, res, next) => {  
    console.log(req.body)
    try{
      producto = new Producto(req.body)
      await producto.save()
      await res.status(200).json(producto)  
    }
  catch (e) { console.log(e) }
}
exports.updateProducto = async (req, res, next) => { 
  
  let id = req.params.id;
  const {nombre,codigo,descripcion,url,precio,stock}=req.body
  let nuevoproducto={}
  
  if(nombre) nuevoproducto.nombre=nombre
  if(codigo) nuevoproducto.codigo=codigo
  if(descripcion) nuevoproducto.descripcion=descripcion
  if(url) nuevoproducto.url=url
  if(precio) nuevoproducto.precio=precio
  if(stock) nuevoproducto.stock= stock

  console.log(`nombre: ${nombre}, nuevonombre ${nuevoproducto} `)
  try{
    let producto = await Producto.findOneAndUpdate(
    {_id: id},
    {$set:nuevoproducto},
    {new:true}
    )
    await res.status(200).json(producto)  
  }
  catch (e) { console.log(e) }

  },

  exports.deleteProductos = async (req, res, next) => {
    let id = req.params.id;
    try{
      producto = await  Producto.deleteOne({_id: id})
     await res.status(200).json(producto)  
    }
     catch (e) { console.log(e) } 

}
