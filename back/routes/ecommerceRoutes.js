const ProductosController = require('../controllers/productosController');
const CarritoController = require('../controllers/carritoController');
const MensajesController = require('../controllers/mensajesController');
const middlewareAdmin = require('../middlewares/middlewareAdmin')
const sessionController = require('../controllers/sessionController')
const passport = require("passport");  
const {fork} = require("child_process")
const numCpu = require("os").cpus().length;
module.exports = app => {
  let forma = process.argv[3] || "FORK"
  app.get("/info",(req,res)=>{
    if(forma =="FORK"){
    const calculo = fork("./desafio28.js");
    calculo.send('start');
    calculo.on('message',sum =>{
      res.status(200).send(
        `</br> Puerto :${process.argv[2]}
         </br> Id de proceso: ${process.pid}
         </br> fecha: ${new Date()}
         </br>Numero de CPUs: ${numCpu}
  ` )
    })
  console.log("pasa por fork")
  }else{
      res.status(200).send(
        `</br> Puerto :${process.argv[2]}
         </br> Id de proceso: ${process.pid}
         </br> fecha: ${new Date()}
         </br>Numero de CPUs: ${numCpu}
  ` )
    }
  })
/*
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
*/
   
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