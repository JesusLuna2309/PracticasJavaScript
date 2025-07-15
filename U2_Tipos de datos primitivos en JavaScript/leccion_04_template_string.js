let nombre = "Natalia";
let edad = 30;
let ciudad = "Madrid";

let saludo = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
console.log(saludo); // Salida: Hola, mi nombre es Natalia, tengo 30 años y vivo en Madrid.

// También se pueden usar expresiones dentro de los template literals
const a = 5;
const b = 10;
let resultado = `La suma de ${a} y ${b} es ${a + b}.`;
console.log(resultado); // Salida: La suma de 5 y 10 es 15.

// Template literals permiten crear strings multilínea
let multilinea = `Este es un string
multilínea que se extiende por varias líneas.`;
console.log(multilinea); // Salida: Este es un string
// multilínea que se extiende por varias líneas.    