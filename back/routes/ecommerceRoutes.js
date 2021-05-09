const ProductosController = require('../controllers/productosController');
const CarritoController = require('../controllers/carritoController');
const MensajesController = require('../controllers/mensajesController');
  
module.exports = app => {
  app.get('/productos/vista-test/:cant', ProductosController.getProductosFake);
  app.get('/productos', ProductosController.getProductos);
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