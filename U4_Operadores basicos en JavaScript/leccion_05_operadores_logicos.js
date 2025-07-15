// Operadores lógicos en JavaScript

// Declaración de variables numéricas
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// AND (&&): Devuelve true si ambas condiciones son verdaderas
let resultadoAndNumeros = (a < b) && (c < d); // true, porque ambas condiciones son verdaderas
console.log("Resultado AND:", resultadoAndNumeros);

// OR (||): Devuelve true si al menos una condición es verdadera
let resultadoOrNumeros = (a > b) || (c < d); // true, porque una de las condiciones es verdadera
console.log("Resultado OR:", resultadoOrNumeros);

// NOT (!): Niega el valor de la condición
let resultadoNotNumeros = !(a < b); // false, porque la condición es verdadera y se niega
console.log("Resultado NOT:", resultadoNotNumeros);

// Combinación de operadores lógicos
let resultadoCombinadoNumeros = (a < b && c < d) || !(d > c); 
// true, porque la primera parte es verdadera y la segunda parte es falsa
console.log("Resultado Combinado:", resultadoCombinadoNumeros);

// Uso de operadores lógicos en una condición
if (resultadoCombinadoNumeros) {
    console.log("La condición combinada es verdadera.");
} else {
    console.log("La condición combinada es falsa.");
}

// Ejemplo de operadores lógicos con variables booleanas
let x = true;
let y = false;

// AND (&&): Solo es true si ambos son true
let resultadoAndBooleanos = x && y; // false, porque una de las condiciones es falsa
console.log("Resultado AND con booleanos:", resultadoAndBooleanos);

// OR (||): Es true si al menos uno es true
let resultadoOrBooleanos = x || y; // true, porque una de las condiciones es verdadera
console.log("Resultado OR con booleanos:", resultadoOrBooleanos);

// NOT (!): Niega el valor booleano
let resultadoNotBooleanos = !x; // false, porque x es true y se niega
console.log("Resultado NOT con booleanos:", resultadoNotBooleanos);

// Combinación de operadores lógicos con booleanos
let resultadoCombinadoBooleanos = (x && y) || !y; 
// true, porque la primera parte es falsa y la segunda parte es verdadera
console.log("Resultado Combinado con booleanos:", resultadoCombinadoBooleanos);

// Uso de operadores lógicos en una condición con booleanos
if (resultadoCombinadoBooleanos) {
    console.log("La condición combinada con booleanos es verdadera.");
} else {
    console.log("La condición combinada con booleanos es falsa.");
}

// Ejemplo de operadores lógicos con cadenas de texto
let str1 = "Hola";
let str2 = "Mundo";

// AND (&&): Ambas comparaciones deben ser verdaderas
let resultadoAndCadenas = (str1 === "Hola") && (str2 === "Mundo"); // true
console.log("Resultado AND con cadenas:", resultadoAndCadenas);

// OR (||): Al menos una comparación debe ser verdadera
let resultadoOrCadenas = (str1 === "Hola") || (str2 === "Mundo!"); // true
console.log("Resultado OR con cadenas:", resultadoOrCadenas);

// NOT (!): Niega la comparación
let resultadoNotCadenas = !(str1 === "Hola"); // false
console.log("Resultado NOT con cadenas:", resultadoNotCadenas);

// Combinación de operadores lógicos con cadenas
let resultadoCombinadoCadenas = (str1 === "Hola" && str2 === "Mundo") || !(str2 === "Mundo!"); 
// true, porque la primera parte es verdadera y la segunda parte es verdadera (ya que str2 !== "Mundo!")
console.log("Resultado Combinado con cadenas:", resultadoCombinadoCadenas);

// Uso de operadores lógicos en una condición con cadenas
if (resultadoCombinadoCadenas) {
    // Si la condición combinada con cadenas es verdadera, se muestra este mensaje
    console.log("La condición combinada con cadenas es verdadera.");
} else {
    console.log("La condición combinada con cadenas es falsa.");
}
