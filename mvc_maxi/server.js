
const express = require('express'); 
const app = express(); 
var cors = require('cors')
const path = require('path');
// 1 base mongo local
// 2 base mongo DBaas
let elegirbase = 2
const ecommerceRoutes = require('./routes/ecommerceRoutes'); 
const conectarDB = require('./config/db')
const http = require('http'); 
const server = http.createServer(app); 
const port = process.env.PORT || '8080';
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');
ecommerceRoutes(app);
conectarDB(elegirbase) 
app.set('port', port);
server.listen(port);
console.log('Server listening on port ' + port);
