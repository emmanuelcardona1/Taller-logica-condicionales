//  (EJERCICIO 1)Comparar edad

let edad = prompt("Ingrese su edad");

if (edad >= 18) {
  document.write("Eres mayor de edad puedes, ingresar");
} else if (edad < 18) {
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
