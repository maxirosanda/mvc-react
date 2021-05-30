const ProductosController = require('../controllers/productosController');
const CarritoController = require('../controllers/carritoController');
const MensajesController = require('../controllers/mensajesController');
const middlewareAdmin = require('../middlewares/middlewareAdmin')
const sessionController = require('../controllers/sessionController')
const passport = require("passport");  

module.exports = app => {
  
  app.get("/info",(req,res)=>{
    argumentos=process.argv
    res.status(200).send(
      `Primer Argumento de entrada: ${argumentos[0]}
      </br> segundo argumento de entrada ${argumentos[1]}
      </br> Sistema Operativo:${process.platform} 
      </br> Version de node:${process.version}
      </br> Uso de memoria: ${process.memoryUsage()}
      </br> path: ${process.execPath}
      </br> Id de proceso: ${process.pid}
      </br> Carpera corriente: ${process.cwd()}` )
  })

  app.get("/random/:cant",(req,res)=>{
    let numeros={1:0}
    let numero
    for (let i = 0; i < req.params.cant ; i++) {
    numero = Math.floor((Math.random() * 999))
    if(!numeros[numero]){
      numeros[numero]= 0
    }
    for (let index in numeros) {
      if(numero == index){
       numeros[index] = numeros[index] + 1
      }
    }
    }
   res.status(200).send(numeros)
   })

  app.get("/random",(req,res)=>{
    let numeros={1:0}
    let numero
    for (let i = 0; i < 100000000 ; i++) {
    numero = Math.floor((Math.random() * 999))
    if(!numeros[numero]){
      numeros[numero]= 0
    }
    for (let index in numeros) {
      if(numero == index){
       numeros[index] = numeros[index] + 1
      }
    }
    }
   res.status(200).send(numeros)
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