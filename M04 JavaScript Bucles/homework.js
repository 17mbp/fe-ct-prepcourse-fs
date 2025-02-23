/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   if(parseInt(x) > parseInt(y)){
      return x;
   }
   else if(parseInt(x) < parseInt(y)){
      return y;
   }
   else if(parseInt(x) === parseInt(y)){
      return y;
   }
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   if(parseInt(edad) >= 18){
      return  "Allowed";
   }
   else{
      return "Not allowed";
   }
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   if(parseInt(status) === 1){
      return  "Online";
   }
   else  if(parseInt(status) === 2){
      return "Away";
   }
   else{
      return "Offline";
   }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   if(String(idioma) === "aleman"){
      return "Guten Tag!";
   }
else if(String(idioma) === "mandarin"){
   return "Ni Hao!"
}
else if(String(idioma) === "ingles"){
   return "Hello!"
}
else {
   return "Hola!"
} 
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   if(String(color) === "blue"){
      return "This is blue";
   }
else if(String(color) === "red"){
   return "This is red"
}
else if(String(color) === "green"){
   return "This is green"
}
else if(String(color) === "orange"){
   return "This is orange"
}
else {
   return "Color not found"
} 
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   if(num === 10 || num === 5){
      return true;
   }
   else  { 
      return false;
   }
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   if(parseInt(num) < 50 & parseInt(num) > 20){
      return true;
   }
   else
      return false;
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.   
   if (typeof num === 'number') {     
      return Number.isInteger(num);
   }
   return false;   
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   if(parseInt(num) % 15 === 0){
      return "fizzbuzz";
   }
   if(parseInt(num) % 3 === 0){
      return "fizz";
   }
   else if(parseInt(num) % 5 === 0){
      return "buzz";
   } 
   else  {
      return false;
   }
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   if (parseInt(num1) === 0 || parseInt(num2) === 0 || parseInt(num3) === 0 ) {
      return "Error"
   }
   else if(parseInt(num1) < 0 || parseInt(num2) < 0 || parseInt(num3) < 0 && Math.sign(parseInt(num1)) === -1 && Math.sign(parseInt(num2)) === -1 && Math.sign(parseInt(num3)) === -1){
      return "Hay negativos";
   }
   else if(parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3) && Math.sign(num1) === 1) {
      return "Numero 1 es mayor y positivo";
   } 
   else if(parseInt(num3) > parseInt(num1) && parseInt(num3) > parseInt(num2)){      
      num3 += 1;
      return num3;
   }  
   else {
      return false;
   }
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   if (num <= 1) {
      return false;
   }
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;  
      } 
   }
   return true;  // Retorna true si el número no es divisible por otro número. 
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   if(valor){
      return "Soy verdadero";
   }
   else{
      return "Soy falso";
   }
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   if(parseInt(num) > 99 && parseInt(num) < 1000){
      return true;
   }
   else {
      return false;
   }
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   let con = 0;
   do{
       num += 5;
       con++;
   }
   while( con < 8 );       
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
