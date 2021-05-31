numerosrandom = (cant) =>{
let numeros={1:0}
let numero
for (let i = 0; i < cant || i< 100000000 ; i++) {
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
process.on('message',()=>{
  const numeros = numerosrandom()
  process.send(numeros)
})
