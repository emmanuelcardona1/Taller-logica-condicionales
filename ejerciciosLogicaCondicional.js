//  (EJERCICIO 1)Comparar edad

let edad1 = prompt("Ingrese su edad");

if (edad1 >= 18) {
  document.write("Eres mayor de edad puedes, ingresar");
} else if (edad1 < 18) {
  document.write("Eres menor de edad, no puedes ingresar");
}
document.write("<br>");

// EJERCICIO 2 nuemro negativo o positivo

let numeroIngresado = prompt(
  "ingrsus un numero para saber si es negativo o positivo"
);
if (numeroIngresado >= 0) {
  document.write(" El numero es positivo");
} else if (numeroIngresado < 0) {
  document.write(" El numero es negativo");
}
document.write("<br>");

// EJERCICIO 3 numero par o impar
let numeroParOImpar = prompt("ingrese un nuemro para saber si es par o impar ");

if (numeroParOImpar % 2 == 0) {
  document.write("Es par");
} else {
  document.write(" es impar");
}
document.write("<br>");

// EJERCICIO 4  calculo descuento
let valorCompra = prompt("valor de su compra:");

let descuento = 0.1;
let volorDescuento = valorCompra * descuento;
let precioFinal = valorCompra - volorDescuento;
if (valorCompra >= 100) {
  document.write("su compra  es de:", precioFinal);
} else {
  document.write("su compra no tiene descuento");
}

document.write("<br>");

// EJERCICIO 5 comparar dos numeros

let numeroUNO = prompt("Ingrese el numero uno");
let numeroDos = prompt("Ingrese el nuemro dos ");

if (numeroUNO === numeroDos) {
  document.write("los nuemros son iguales");
} else if (numeroUNO > numeroDos) {
  document.write(" el numero uno es mayor que el numero dos");
} else {
  document.write("el numero dos es mayor que el numero uno ");
}

document.write("<br>");

// EJERCICIO 6 calificacion por edad
let edad = prompt(" Ingrese su edad");

if (edad < 12) {
  document.write("Eres un niño");
} else if (edad >= 12 && edad <= 17) {
  document.write("Eres un adolecente ");
} else if (edad >= 18 && edad <= 64) {
  document.write("eres un adulto ");
} else {
  document.write("Eres un adulto mayor ");
}
document.write("<br>");

// EJERCICIO 7 clasificacion de nota
let nota = prompt(" Ingrese una nota de 0 a 100");

if (nota >= 90) {
  document.write("Exelente");
} else if (nota >= 70) {
  document.write("Bueno");
} else if (nota >= 50) {
  document.write("Regular ");
} else {
  document.write(" Insuficiente ");
}
document.write("<br>");

// EJERCICIO 8 eleccion de menu

let menu = prompt("Ingrese un numero del 1 al 3 para el menu");

switch (menu) {
  case "1":
    document.write("Pizza");
    break;
  case "2":
    document.write("Hambuerguesa");
    break;
  case "3":
    document.write("Tacos");
    break;

  default:
    document.write("opcion no validad");
    break;
}

document.write("<br>");

// EJERCICIO 9  tipo de triangulo
let ladoUno = prompt("Ingrese lado uno");
let ladoDos = prompt("Ingrese lado dos");
let ladoTres = prompt("Ingrese lado tres");

if (ladoUno === ladoDos && ladoDos === ladoTres) {
  document.write("triangulo tipo: Equilatero");
} else if (
  ladoUno === ladoDos ||
  ladoDos === ladoTres ||
  ladoUno === ladoTres
) {
  document.write("triangulo tipo: Isosceles");
} else {
  document.write("triangulo tipo: Escaleno");
}
document.write("<br>");

// EJERCICIO 10 adivina un numero
let random = Math.random();
random = random * 10 + 1;
random = Math.trunc(random);

let numeroAleatorio = prompt("ingrese un numero del 1 al 10");
if (numeroAleatorio == random) {
  document.write("Has acertado ¡execlente!");
} else {
  document.write("El numero es: " + random, " ¡Intenta de nuevo!");
}
document.write("<br>");

// EJERCICIO 11 calcula precio final

let precioBase = prompt("valor de su compra:");

if (precioBase > 500) {
  let descuento = 0.15;
  let volorDescuento = precioBase * descuento;
  let precioFinal = precioBase - volorDescuento;

  document.write("su compra  es de:", precioFinal);
} else if (precioBase > 300) {
  let descuento = 0.1;
  let volorDescuento = precioBase * descuento;
  let precioFinal = precioBase - volorDescuento;

  document.write("su compra  es de:", precioFinal);
} else if (precioBase > 300) {
  let descuento = 0.05;
  let volorDescuento = precioBase * descuento;
  let precioFinal = precioBase - volorDescuento;

  document.write("su compra  es de:", precioFinal);
} else {
  document.write("su compra no tiene descuento");
}
document.write("<br>");

// EJERCICIO 12 verificacion de año bisiesto

let anoBisiesto = prompt("Ingrse un año para verificar si es bisiesto:");

if (anoBisiesto % 400 == 0) {
  document.write("Es año Bisiesto");
} else if (anoBisiesto % 100 == 0) {
  document.write("No es una año Bisiesto");
} else if (anoBisiesto % 4 == 0) {
  document.write("Es año Bisiesto");
} else {
  document.write("No es un año Bisiesto");
}
document.write("<br>");

// EJERCICIO 13 autenticacion de usuario
let ingresoUsuario = prompt("Ingrese su nombre de usuario:");
let ingresoContrsaseño = prompt("Ingrese su contraseña ");

if (ingresoUsuario === "admin" && ingresoContrsaseño === "1234") {
  document.write("Acceso concedido");
} else {
  document.write("Acceso denegado");
}
document.write("<br>");

// EJERCICIO 14 determinar horario del dia

let hora = prompt(" Ingrese una hora del 0 al 23 ");

if (hora > 6 && hora < 12) {
  document.write("Buenos dias");
} else if (hora >= 12 && hora < 18) {
  document.write("Buenas tardes");
} else if (hora >= 18 && hora <= 24) {
  document.write("Buenas noches ");
} else if (hora >= 0 && hora <= 6) {
  document.write(" Buenas noches ");
} else {
  document.write("Hora ingresada no ¡VALIDA!");
}

document.write("<br>");

// EJERCICIO 15 clasificacion de masa coporal
let peso = parseFloat(prompt("Ingrese su Peso:"));
let altura = parseFloat(prompt("Ingrese su Altura:"));

let imc = peso / altura ** 2;
if (imc < 18.5) {
  document.write("Bajo peso ");
} else if (imc >= 18.5 && imc <= 24.9) {
  document.write("Peso Normal");
} else if (imc >= 25 && imc <= 29.9) {
  document.write("Sobrepeso");
}
document.write("<br>");
