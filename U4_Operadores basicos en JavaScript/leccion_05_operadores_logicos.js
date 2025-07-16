// Operadores lógicos en JavaScript

// Declaración de variables numéricas para demostrar los operadores
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// AND (&&): Devuelve true si ambas condiciones son verdaderas
let resultadoAndNumeros = (a < b) && (c < d); // true, porque 5 < 10 Y 15 < 20
console.log("Resultado AND:", resultadoAndNumeros);

// OR (||): Devuelve true si al menos una condición es verdadera
let resultadoOrNumeros = (a > b) || (c < d); // true, porque aunque 5 NO > 10, sí 15 < 20
console.log("Resultado OR:", resultadoOrNumeros);

// NOT (!): Niega el valor de la condición (invierte true/false)
let resultadoNotNumeros = !(a < b); // false, porque (5 < 10) es true, y !true = false
console.log("Resultado NOT:", resultadoNotNumeros);

// Combinación de operadores lógicos con precedencia
let resultadoCombinadoNumeros = (a < b && c < d) || !(d > c); 
// true, porque (true && true) || !(true) = true || false = true
console.log("Resultado Combinado:", resultadoCombinadoNumeros);

// Uso de operadores lógicos en estructuras de control
if (resultadoCombinadoNumeros) {
    console.log("La condición combinada es verdadera.");
} else {
    console.log("La condición combinada es falsa.");
}

// Ejemplo de operadores lógicos con variables booleanas directas
let x = true;
let y = false;

// AND (&&): Solo es true si ambos operandos son true
let resultadoAndBooleanos = x && y; // false, porque true && false = false
console.log("Resultado AND con booleanos:", resultadoAndBooleanos);

// OR (||): Es true si al menos uno de los operandos es true
let resultadoOrBooleanos = x || y; // true, porque true || false = true
console.log("Resultado OR con booleanos:", resultadoOrBooleanos);

// NOT (!): Invierte el valor booleano
let resultadoNotBooleanos = !x; // false, porque !true = false
console.log("Resultado NOT con booleanos:", resultadoNotBooleanos);

// Combinación de operadores lógicos con booleanos
let resultadoCombinadoBooleanos = (x && y) || !y; 
// true, porque (true && false) || !false = false || true = true
console.log("Resultado Combinado con booleanos:", resultadoCombinadoBooleanos);

// Uso de operadores lógicos en una condición con booleanos
if (resultadoCombinadoBooleanos) {
    console.log("La condición combinada con booleanos es verdadera.");
} else {
    console.log("La condición combinada con booleanos es falsa.");
}

// Ejemplo de operadores lógicos aplicados a comparaciones de cadenas
let str1 = "Hola";
let str2 = "Mundo";

// AND (&&): Ambas comparaciones deben ser verdaderas
let resultadoAndCadenas = (str1 === "Hola") && (str2 === "Mundo"); // true && true = true
console.log("Resultado AND con cadenas:", resultadoAndCadenas);

// OR (||): Al menos una comparación debe ser verdadera
let resultadoOrCadenas = (str1 === "Hola") || (str2 === "Mundo!"); // true || false = true
console.log("Resultado OR con cadenas:", resultadoOrCadenas);

// NOT (!): Niega el resultado de la comparación
let resultadoNotCadenas = !(str1 === "Hola"); // !true = false
console.log("Resultado NOT con cadenas:", resultadoNotCadenas);

// Combinación compleja de operadores lógicos con cadenas
let resultadoCombinadoCadenas = (str1 === "Hola" && str2 === "Mundo") || !(str2 === "Mundo!"); 
// true, porque (true && true) || !(false) = true || true = true
console.log("Resultado Combinado con cadenas:", resultadoCombinadoCadenas);

// Uso práctico de operadores lógicos en estructuras de control
if (resultadoCombinadoCadenas) {
    // Si la condición combinada con cadenas es verdadera, se muestra este mensaje
    console.log("La condición combinada con cadenas es verdadera.");
} else {
    console.log("La condición combinada con cadenas es falsa.");
}
