let nombre = "Natalia"; // Variable con el nombre
let edad = 30; // Variable con la edad
let ciudad = "Madrid"; // Variable con la ciudad

// Uso de template literal para crear un string con variables interpoladas
let saludo = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
console.log(saludo); // Salida: Hola, mi nombre es Natalia, tengo 30 años y vivo en Madrid.

// También se pueden usar expresiones dentro de los template literals
const a = 5; // Primer número
const b = 10; // Segundo número
let resultado = `La suma de ${a} y ${b} es ${a + b}.`; // Interpolación de expresión matemática
console.log(resultado); // Salida: La suma de 5 y 10 es 15.

// Template literals permiten crear strings multilínea
let multilinea = `Este es un string
multilínea que se extiende por varias líneas.`; // String en múltiples líneas
console.log(multilinea); // Salida: Este es un string
// multilínea que se extiende por varias líneas.