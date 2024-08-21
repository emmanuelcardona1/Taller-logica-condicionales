//  (EJERCICIO 1)Comparar edad

let edad1 = prompt("Ingrese su edad");

if (edad1 >= 18) {
  document.write("Eres mayor de edad puedes, ingresar");
} else if (edad1 < 18) {
  document.write("Eres menor de edad, no puedes ingresar");
}
document.write ('<br>')

// EJERCICIO 2 nuemro negativo o positivo

let numeroIngresado = prompt('ingrsus un numero para saber si es negativo o positivo');
if( numeroIngresado >= 0){
document.write (' El numero es positivo')
}else if (numeroIngresado < 0 ){
document.write ( ' El numero es negativo')
}
document.write ('<br>')

// EJERCICIO 3 numero par o impar
let numeroParOImpar = prompt ('ingrese un nuemro para saber si es par o impar ')

if (numeroParOImpar % 2 == 0){
    document.write( 'Es par')
}else {
document.write (' es impar')
}
document.write ('<br>')

// EJERCICIO 4  calculo descuento
let valorCompra = prompt("valor de su compra:");

let descuento = 0.1;
let volorDescuento = valorCompra * descuento;
let precioFinal = valorCompra - volorDescuento;
if (valorCompra >= 100) {

  document.write("su compra  es de:", precioFinal);
}
else {
  document.write ('su compra no tiene descuento');
}

document.write ('<br>')

// EJERCICIO 5 comparar dos numeros

let numeroUNO = prompt('Ingrese el numero uno')
let numeroDos = prompt('Ingrese el nuemro dos ')

if (numeroUNO === numeroDos ){
document.write ('los nuemros son iguales')
}else if (numeroUNO > numeroDos){
  document.write (' el numero uno es mayor que el numero dos')
}else{
  document.write ('el numero dos es mayor que el numero uno ')
}

document.write ('<br>')

// EJERCICIO 6 calificacion por edad
 let edad = prompt (' Ingrese su edad')

 if (edad < 12){
  document.write ('Eres un niño')
 }else if (edad >= 12 && edad <= 17   ){
document.write ('Eres un adolecente ')
 }else if (edad  >=18 &&  edad <=64  ){
  document.write('eres un adulto ')
 }else {
  document.write ('Eres un adulto mayor ')
 }
document.write ('<br>')

// EJERCICIO 7 clasificacion de nota
let nota = prompt (' Ingrese una nota de 0 a 100')

 if (nota  >= 90){
  document.write ('Exelente')
 }else if (nota >= 70  ){
document.write ('Bueno')
 }else if (nota >= 50 ){
  document.write('Regular ')
 }else {
  document.write (' Insuficiente ')
 }
 document.write ('<br>')

 // EJERCICIO 8 eleccion de menu

let menu =  prompt ('Ingrese un numero del 1 al 3 para el menu')

switch (menu) {
  case '1':
    document.write('Pizza')
    break;
  case '2':
    document.write('Hambuerguesa')
  break;
  case '3':
    document.write('Tacos')
    break;

  default: document.write('opcion no validad')
    break;
}

document.write ('<br>')

// EJERCICIO 9  tipo de triangulo
let ladoUno = prompt('Ingrese lado uno')
let ladoDos = prompt('Ingrese lado dos')
let ladoTres = prompt('Ingrese lado tres')

if (ladoUno === ladoDos && ladoDos === ladoTres) {
  document.write('triangulo tipo: Equilatero')
}else if (ladoUno === ladoDos || ladoDos === ladoTres || ladoUno === ladoTres){
document.write('triangulo tipo: Isosceles')
}else {
document.write('triangulo tipo: Escaleno')
}
document.write ('<br>')

