## Ecommerce de venta de componentes y periféricos de computadoras



#### Alumno: Maximiliano Rosanda

#### Curso: React lunes y miércoles 20:30 hs



### Instalación

1. Forkeá y cloná este repositorio.
2. En tu terminal, posiciónate sobre el root y corré `npm i`
3. Al finalizar la instalación, corre `npm-start`. El proyecto será visible desde 

###  Incluye

(1) Navbar y Componente carrito (colocado dentro el navbar)

(2) Componente “ItemContainer” que renderiza el componente de presentación “Item” en el que se encuentra precio, foto y botón de compra del respectivo producto

(3) Filtrado por categorías ej: motherboards, placas de video, etc

(4) Componente “ItemDetailContainer” que rederiza el componente de presentación “ItermDetail” al que se accede al hacer click en comprar en el componente “Item” incluidos en la lista de productos

(5) Dentro del componente “ItemDetail” se incorporó el componente “ContadorCotainer” que renderiza el componente de presentación “Contador” que incrementa y decrementa la cantidad requerida de ítems

(6)Todos los items estan alojados en firebase y se acede a travez del metodo get

(7) Componente “CartContainer” que rederiza el componente de presentación “CartDetail” al que se accede al hacer click en terminar en el componente “ItemDetail” que se encuentra dentro de ItemContainer

en cart encontramos todos los datos de los item que agregamos al carrito junto con el precio total a abonar ,tambien en cart podemos finalizar la compra (cuando finalizamos la compra se genera una orden de compra que se guarda en firebase en order)

### Techs

React React-Bootstrap 

Firebase

