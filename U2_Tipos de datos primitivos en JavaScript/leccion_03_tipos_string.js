const stringEjemplo = 'Hola, mundo!'; // Esto es un String
console.log("Ejemplo de String:", stringEjemplo); //Salida: Hola, mundo!

// También se pueden usar comillas dobles
const stringEjemploDoble = "Hola, mundo con comillas dobles!"; // String usando comillas dobles
console.log("Ejemplo de String con comillas dobles:", stringEjemploDoble); //Salida: Hola, mundo con comillas dobles!

let stringEjemploComillasSimples = 'Este es un string con comillas "simples"'; // Comillas dobles dentro de comillas simples
console.log("Ejemplo de String con comillas simples:", stringEjemploComillasSimples); //Salida: Este es un string con comillas "simples"

// También se pueden usar comillas simples dentro de comillas dobles
stringEjemploComillasDobles = "Este es un string con comillas 'dobles'"; // Comillas simples dentro de comillas dobles
console.log("Ejemplo de String con comillas dobles:", stringEjemploComillasDobles); //Salida: Este es un string con comillas 'dobles'

// Se pueden usar comillas invertidas (template literals) para crear strings multilínea o interpolar variables
const nombre = "Natalia"; // Variable para interpolar
const stringTemplate = `Hola, ${nombre}!`; // Interpolación de variables con template literals
console.log("Ejemplo de String con template literals:", stringTemplate); //Salida: Hola, Natalia!

// También se pueden crear strings multilínea
const stringMultilinea = `Este es un string
multilínea que se extiende por varias líneas.`; // String en varias líneas usando template literals
console.log("Ejemplo de String multilínea:", stringMultilinea); 
//Salida: Este es un string multilínea que se extiende por varias líneas.

// También se pueden usar caracteres de escape para incluir comillas dentro de un string
const stringConEscape = 'Este es un string con comillas \'simples\' y "dobles"'; // Uso de caracteres de escape
console.log("Ejemplo de String con caracteres de escape:", stringConEscape);    //Salida: Este es un string con comillas 'simples' y "dobles"   

// También se pueden usar caracteres especiales como el salto de línea
const stringConSaltoDeLinea = "Este es un string con un salto de línea.\nAquí continúa en una nueva línea."; // Uso de \n para salto de línea
console.log("Ejemplo de String con salto de línea:", stringConSaltoDeLinea);    //Salida: Este es un string con un salto de línea.
                                                                                // Aquí continúa en una nueva línea.
// También se pueden usar caracteres Unicode
const stringConUnicode = "Aquí hay un emoji: \u{1F600}"; // Uso de Unicode para mostrar un emoji
console.log("Ejemplo de String con Unicode:", stringConUnicode); //Salida: Aquí hay un emoji: 😀

/* Métodos de String */
const stringMetodo = "JavaScript es genial!"; // String de ejemplo
console.log("Longitud del string:", stringMetodo.length); //Salida: Longitud del string: 22
console.log("String en mayúsculas:", stringMetodo.toUpperCase()); //Salida: String en mayúsculas: JAVASCRIPT ES GENIAL!
console.log("String en minúsculas:", stringMetodo.toLowerCase()); //Salida: String en minúsculas: javascript es genial!

// Concatenación de strings
const string1 = "Hola"; // Primer string
const string2 = "mundo!"; // Segundo string
const stringConcatenado = string1 + " " + string2; // Concatenación usando +
console.log("Ejemplo de concatenación de strings:", stringConcatenado); //Salida: Ejemplo de concatenación de strings: Hola mundo!

// Verificación de igualdad de strings
const stringA = "JavaScript"; // Primer string para comparar
const stringB = "JavaScript"; // Segundo string para comparar
console.log("¿Son iguales los strings?", stringA === stringB); //Salida: ¿Son iguales los strings? true 

// Comparación de strings
const stringC = "A"; // Primer string para comparar
const stringD = "B"; // Segundo string para comparar
console.log("¿Es stringC menor que stringD?", stringC < stringD); //Salida: ¿Es stringC menor que stringD? true

// Verificación de si un string contiene otro string
const stringBusqueda = "JavaScript es genial!"; // String donde buscar
console.log("¿Contiene 'JavaScript'?", stringBusqueda.includes("JavaScript")); //Salida: ¿Contiene 'JavaScript'? true   

// Verificación de si un string comienza o termina con otro string
console.log("¿Comienza con 'JavaScript'?", stringBusqueda.startsWith("JavaScript")); //Salida: ¿Comienza con 'JavaScript'? true
console.log("¿Termina con 'genial!'?", stringBusqueda.endsWith("genial!")); //Salida: ¿Termina con 'genial!'? true

