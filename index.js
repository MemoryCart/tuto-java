//CONSTANTES Y VARIABLES

var miVariable = 24;
//console.log("mi edad es " + miVariable)


miVariable = 12
//console.log('mi edad ahora es' + miVariable)

const miConstante = 3;
console.log("el valor de mi constante ahora es " + miConstante)

//OPERACIONES CON VARIABLES

var op1 = 2
var op2 = 3

var resultado = op1 + op2 ; 
console.log ('resultado vale: ' + resultado )  

//OTRA OPCION DE OPERACIONES CON VARIABLES
//pueden ser + - / - (-) - *

var resultado = 2 + 2 ; 
console.log ('resultado vale: ' + resultado )

//CONDICIONADRES
// =: Asignacion
// ==: Comparacion
// ===: 
let miNumero = 6 
let miNombre = "David"

//let resultadoPregunta = miNumero == 8
//console.log(resultadoPregunta)

//if (miNumero >2 || miNombre == "david" ) {
//    console.log("Si");
//} else {
//    console.log("No tu nombre es David")
//}

//PREGUNTA CON RESPUESTA CON DOBLE FUNCION

//let miNumero2 = 0
//if(miNumero2 > 0) {
  //  console.log("Mi numero es positivo")
//} else if (miNumero2 == 0){
 //   console.log("Mi numero es zero");
//}else{
//    console.log("Mi numero es negativo");
//}

//BUCLES
//podemos configurarlo hasta el num que queramos

//let contador = 0
//while(contador < 5){
//   console.log("hola a todos")

//    contador = contador + 1
//}

//for (let i = 1000000; i >= 0; i-- ) {
 //   console.log(i);
//}

//FUNCIONES

function saludar(nombre, edad) {
    console.log ("hola. Mi nombre es : " + nombre)
    console.log ("hola. Mi edad es : " + edad)
}

saludar("David", 29)