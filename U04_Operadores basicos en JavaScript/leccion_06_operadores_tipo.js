//Operadores de tipo en JavaScript

// typeof y instanceof son operadores que permiten determinar el tipo de una variable o un objeto en JavaScript.
// Aquí hay ejemplos de cómo se utilizan ambos operadores:
// Ejemplos de uso de typeof e instanceof

//typeof el operador typeof devuelve una cadena que indica el tipo de la variable o expresión.
let tipoNumero = typeof 42; // "number"
let tipoCadena = typeof "Hola"; // "string"
let tipoBooleano = typeof true; // "boolean"
let tipoObjeto = typeof { nombre: "Juan", edad: 30 }; // "object"
let tipoArreglo = typeof [1, 2, 3]; // "object" (los arreglos son objetos en JavaScript)
let tipoFuncion = typeof function() {}; // "function"

console.log("Tipo de 42:", tipoNumero);
console.log("Tipo de 'Hola':", tipoCadena);
console.log("Tipo de true:", tipoBooleano);
console.log("Tipo de objeto:", tipoObjeto);
console.log("Tipo de arreglo:", tipoArreglo);
console.log("Tipo de función:", tipoFuncion);

//typeof también se puede usar para verificar si una variable es undefined o null
let variableNoDefinida;
let variableNula = null;

console.log("Tipo de variable no definida:", typeof variableNoDefinida); // "undefined"
console.log("Tipo de variable nula:", typeof variableNula); // "object"


//instanceof el operador instanceof permite comprobar si un objeto es una instancia de una clase o constructor específico.
let esArreglo = [1, 2, 3] instanceof Array; // true
let esFecha = new Date() instanceof Date; // true
let esExpReg = /ab+c/ instanceof RegExp; // true

console.log("Es un arreglo:", esArreglo);
console.log("Es una fecha:", esFecha);
console.log("Es una expresión regular:", esExpReg);

// También se puede usar instanceof con clases personalizadas
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
let juan = new Persona("Juan");
let esPersona = juan instanceof Persona; // true
console.log("Es una instancia de Persona:", esPersona);
// En resumen, typeof se utiliza para obtener el tipo primitivo de una variable, 
// mientras que instanceof se utiliza para verificar si un objeto es una instancia de una clase o constructor específico.
// Ambos son útiles para realizar comprobaciones de tipo en JavaScript y pueden ser utilizados en diferentes contextos según las necesidades del código.
// Recuerda que typeof devuelve un tipo primitivo como "number", "string", "boolean", "object", "function", etc., 
// mientras que instanceof devuelve un valor booleano que indica si el objeto es una instancia de un constructor específico.
// Estos operadores son fundamentales para la programación en JavaScript y ayudan a garantizar que el código func