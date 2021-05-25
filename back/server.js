
const express = require('express');  
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
const port = process.env.PORT || '8080';
const MongoStore =require('connect-mongo')
const advancedOptions= {useNewUrlParser:true,useUnifiedTopology:true}
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.disable('x-powered-by');
ecommerceRoutes(app);
conectarDB() 
app.set('port', port);
server.listen(port);
console.log('Server listening on port ' + port);
