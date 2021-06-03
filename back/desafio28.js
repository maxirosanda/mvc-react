numerosrandom = (cant) =>{
let numeros={1:0}
let numero
if(!cant) cant = 100000000
for (let i = 0; i < cant  ; i++) {
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
return numeros
}
process.on('message',(data)=>{
  const numeros = numerosrandom(data.cantidad)
  process.send(numeros)
})
