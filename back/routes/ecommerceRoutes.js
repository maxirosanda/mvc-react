const ProductosController = require('../controllers/productosController');
const CarritoController = require('../controllers/carritoController');
const MensajesController = require('../controllers/mensajesController');
const middlewareAdmin = require('../middlewares/middlewareAdmin')
const sessionController = require('../controllers/sessionController')
const loggerInfo=require('pino')();
const loggerWarn=require('pino')('warn.log');
const loggerError=require('pino')('error.log')
const passport = require("passport");  
const {fork} = require("child_process")
module.exports = app => {
  
  app.get("/info",(req,res)=>{
    argumentos=process.argv
    res.status(200).send(
      `</br> Port :${process.argv[2]}
       </br> Id de proceso: ${process.pid}
       </br> fecha: ${new Date()}
` )
  })

  app.get("/random/:cant",(req,res)=>{
  const numeros = fork("./desafio28.js")
  let cantidad = req.params.cant
    numeros.send({cantidad})
    numeros.on('message',num =>{
      res.status(200).send(num)
    })
   })

  app.get("/random",(req,res)=>{
    const numeros = fork("./desafio28.js")
    numeros.send("start")
    numeros.on('message',num =>{
      res.status(200).send(num)
    })
   
   })
   app.get('*',(req,res)=>{
     let {url,method}=req;
     loggerWarn.warn(`Ruta ${method} -> ${url} no implementada`)
     res.send(`Ruta ${method} ->${url} no implementada`)
   })
   
  app.get("/failLogin", (req, res) => { res.send("falla al logear")});
  app.post("/login", passport.authenticate('login', {failureRedirect: 'failLogin'}), sessionController.login);
  app.get("/failRegister", (req, res) => { res.send("falla al registrar")});
  app.post("/register", passport.authenticate('register', {failureRedirect: 'failRegister'}), sessionController.register);
  app.get("/logout", sessionController.logout);
  app.get("/facebook", passport.authenticate("facebook"));
  app.get("/facebook/callback", passport.authenticate('facebook', {successRedirect: 'http://localhost:3000', failureRedirect: 'http://localhost:3000/error'}));

  app.get('/contenido',middlewareAdmin.auth,(req,res) =>{
    res.send("contenido para ver")
})
  app.get('/productos/vista-test/:cant', ProductosController.getProductosFake);
  app.get('/productos',ProductosController.getProductos);
  app.get('/productos/:id',ProductosController.getProducto);
  app.get('/productos/cat/:categoria',ProductosController.getProductosCategoria);
  app.post('/productos', ProductosController.createProductos);
  app.put('/productos/:id', ProductosController.updateProducto);
  app.delete('/productos/:id', ProductosController.deleteProductos);

  app.get('/carritos', CarritoController.getCarritos);
  app.post('/carrito', CarritoController.createCarrito);
  app.put('/carrito/:id',CarritoController.updateCarrito);
  app.delete('/carrito/:id', CarritoController.deleteCarrito);

  app.get('/mensajes', MensajesController.getMensajes);
  app.post('/mensajes', MensajesController.createMensajes);
};