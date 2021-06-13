
const express = require('express');
const loggerInfo=require('pino')();
const loggerWarn=require('pino')('warn.log');
const loggerError=require('pino')('error.log')
var cors = require('cors')
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require('express-session')
const path = require('path');
const app = express();
require("./passport/passport");
const ecommerceRoutes = require('./routes/ecommerceRoutes'); 
const conectarDB = require('./config/db')
const http = require('http'); 
const server = http.createServer(app); 
const MongoStore =require('connect-mongo')
const advancedOptions= {useNewUrlParser:true,useUnifiedTopology:true}
const compression = require("compression")
app.use(compression())
app.use(cookieParser());
app.use(session({
    secret:'secreto',
    resave:false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl:'mongodb+srv://maxirosanda:dalma123@cluster0.cawk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        mongoOptions:advancedOptions,
        collectionName:'sessions',
        ttl:10*60
    })
}))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.disable('x-powered-by');
ecommerceRoutes(app);
conectarDB()

const port = process.argv[2] || '8080';
app.set('port', port);
server.listen(port,()=>{
    loggerInfo.info('Server listening on port ' + port);
}).on('error',error=>{
    loggerError.error(`error en el servidor: ${error}`)
})

