let miVariable = 10; // Declaración de una variable con let y asignación de un número
console.log("Tipo de variable miVariable:", typeof miVariable); // Imprime "number"

miVariable = "Hola"; // Reasignación de la variable a un tipo string
console.log("Nuevo tipo de variable miVariable:", typeof miVariable); // Imprime "string"

miVariable = true; // Reasignación de la variable a un tipo booleano
console.log("Nuevo tipo de variable miVariable:", typeof miVariable); // Imprime "boolean"

miVariable = null; // Reasignación de la variable a null
console.log("Nuevo tipo de variable miVariable:", typeof miVariable); // Imprime "object" (así lo define JavaScript)

miVariable = undefined; // Reasignación de la variable a undefined
console.log("Nuevo tipo de variable miVariable:", typeof miVariable); // Imprime "undefined"

miVariable = Symbol("miSimbolo"); // Reasignación de la variable a un símbolo
console.log("Nuevo tipo de variable miVariable:", typeof miVariable); // Imprime "symbol"

miVariable = BigInt(12345678901234567890); // Reasignación de la variable a un BigInt
console.log("Nuevo tipo de variable miVariable:", typeof miVariable); // Imprime "bigint"

let nombre = "Jesus"; // Declaración de una variable de tipo string
let apellido = "Luna"; // Declaración de otra variable de tipo string
let nombreCompleto = nombre + " " + apellido; // Concatenación de cadenas para formar el nombre completo
console.log("Nombre completo:", nombreCompleto); // Imprime "Jesus Luna"

let numero = 5; // Declaración de una variable de tipo number
let numeroString = "10"; // Declaración de una variable de tipo string que representa un número
let resultado = numero + numeroString; // Suma de un número y un string (se realiza concatenación)
console.log("Resultado de la suma:", resultado); // Imprime "510" (concatenación de cadenas)

// Para realizar una suma correcta, convertimos el string a number
// usando parseInt o parseFloat
// dependiendo de si queremos un entero o un número con decimales.
let resultadoSuma = numero + parseInt(numeroString); // Suma de un número y un string convertido a número
console.log("Resultado de la suma:", resultadoSuma);