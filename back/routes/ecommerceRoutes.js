const ProductosController = require('../controllers/productosController');
const CarritoController = require('../controllers/carritoController');
const MensajesController = require('../controllers/mensajesController');
const middlewareAdmin = require('../middlewares/middlewareAdmin')
const controllerSession = require('../controllers/controllerSession')  

module.exports = app => {
  
  app.get('/logout',controllerSession.sessionLogout),
  app.get('/login',controllerSession.login)
  app.get('/contenido',middlewareAdmin.auth,(req,res) =>{
    res.send("contenido para ver")
})
  app.get('/productos/vista-test/:cant', ProductosController.getProductosFake);
  app.get('/productos',middlewareAdmin.auth, ProductosController.getProductos);
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