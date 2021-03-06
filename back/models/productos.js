
var mongoose = require('mongoose');

const productosCollection='productos'
const productosSchema = new mongoose.Schema({

    nombre:{type:String,require:true},
    descripcion:{type:String,require:true},
    codigo:{type:String,require:true,unique:true},
    url: {type:String, require:true},
    precio:{type:Number,require:true},
    stock:{type:Number,require:true},
    categoria:{type:String,Require:true}

})

module.exports = mongoose.model(productosCollection,productosSchema)
