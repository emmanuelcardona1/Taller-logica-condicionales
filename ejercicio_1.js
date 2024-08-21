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

