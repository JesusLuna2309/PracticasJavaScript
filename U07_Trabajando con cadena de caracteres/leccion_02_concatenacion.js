//Concatenacion de cadenas de caracteres
let string1 = "lorem ipsum dolor sit amet, consectetur adipiscing elit"; // Primer string
let string2 = "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"; // Segundo string
let string3 = "ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"; // Tercer string

// 1. Concatenación simple usando el operador + 
let concatenacionSimple = string1 + " " + string2 + " " + string3;
// IMPORTANTE: El operador + crea una nueva cadena en cada operación
// JavaScript optimiza esto internamente, pero para muchas concatenaciones puede ser ineficiente
// Funciona de izquierda a derecha: ((string1 + " ") + string2) + " " + string3
// Cada paso crea una nueva cadena temporal en memoria
console.log("Concatenación simple:", concatenacionSimple);

// 2. Concatenación usando template literals (ES6)
let concatenacionTemplate = `${string1} ${string2} ${string3}`;
// VENTAJAS de template literals:
// - Más legible que múltiples operadores +
// - Permite saltos de línea naturales
// - Soporta expresiones complejas dentro de ${}
// - Mejor rendimiento que múltiples concatenaciones con +
// - Escapado automático (útil para prevenir inyección de código)
console.log("Concatenación con template literals:", concatenacionTemplate);

// EJEMPLO AVANZADO de template literals:
let nombre = "Juan";
let edad = 30;
let mensaje = `Hola ${nombre}, 
tienes ${edad} años.
El año que viene tendrás ${edad + 1} años.
Hoy es: ${new Date().toLocaleDateString()}`;
console.log("Template literal avanzado:", mensaje);

// 3. Concatenación usando el método concat()
let concatenacionConcat = string1.concat(" ", string2, " ", string3);
// CARACTERÍSTICAS del método concat():
// - Es un método de la clase String
// - Puede recibir múltiples argumentos
// - Retorna una nueva cadena (inmutabilidad)
// - Menos popular que + o template literals
// - Útil cuando se concatenan programáticamente muchos valores
console.log("Concatenación con concat():", concatenacionConcat);

// EJEMPLO más práctico de concat():
let baseUrl = "https://api.ejemplo.com";
let endpoint = baseUrl.concat("/usuarios/", "123", "/perfil");
console.log("URL construida:", endpoint); // "https://api.ejemplo.com/usuarios/123/perfil"

// 4. Concatenación con join() (usando un array)
let arrayStrings = [string1, string2, string3];
let concatenacionJoin = arrayStrings.join(" ");
// VENTAJAS de join():
// - MUY eficiente para unir muchos elementos
// - Un solo separador para todos los elementos
// - Internamente optimizado por el motor de JavaScript
// - Ideal cuando ya tienes los datos en un array
// - Maneja automáticamente elementos null/undefined (los convierte a cadena vacía)
console.log("Concatenación con join():", concatenacionJoin);

// EJEMPLOS prácticos de join():
let palabras = ["JavaScript", "es", "genial"];
console.log("Con espacios:", palabras.join(" ")); // "JavaScript es genial"
console.log("Con guiones:", palabras.join("-")); // "JavaScript-es-genial"
console.log("Sin separador:", palabras.join("")); // "JavaScriptesgenial"

// join() con elementos mixtos:
let elementos = ["Hola", null, "mundo", undefined, "!"]; 
console.log("Elementos mixtos:", elementos.join(" ")); // "Hola  mundo  !"

// 5. Concatenación con reduce() (usando un array)
let concatenacionReduce = arrayStrings.reduce((acumulador, valorActual) => {
    return acumulador + " " + valorActual;
}, "");
// ANÁLISIS de reduce() para concatenación:
// - Más complejo que join() para este caso simple
// - Útil cuando necesitas lógica personalizada durante la concatenación
// - Permite transformaciones complejas en cada paso
// - El valor inicial "" es importante para evitar concatenar con undefined
console.log("Concatenación con reduce():", concatenacionReduce);

// EJEMPLO más útil de reduce() para concatenación:
let frases = ["hola mundo", "javascript es genial", "programar es divertido"];
let frasesCAPITALIZADAS = frases.reduce((acumulador, frase, indice) => {
    // Capitalizar primera letra de cada frase
    let fraseCapitalizada = frase.charAt(0).toUpperCase() + frase.slice(1);
    // Agregar numeración
    let fraseNumerada = `${indice + 1}. ${fraseCapitalizada}`;
    return acumulador + fraseNumerada + "\n";
}, "");
console.log("Frases procesadas con reduce():", frasesCAPITALIZADAS);

// 6. Concatenación con un bucle for
let concatenacionFor = "";
for (let i = 0; i < arrayStrings.length; i++) {
    concatenacionFor += arrayStrings[i] + " ";
    // IMPORTANTE: El operador += crea una nueva cadena en cada iteración
    // Para arrays grandes, esto puede ser ineficiente
    // Cada iteración: concatenacionFor = concatenacionFor + arrayStrings[i] + " "
}
console.log("Concatenación con bucle for:", concatenacionFor.trim());
// NOTA: trim() elimina el espacio extra al final

// EJEMPLO mejorado del bucle for con control de separadores:
let concatenacionForMejorada = "";
for (let i = 0; i < arrayStrings.length; i++) {
    concatenacionForMejorada += arrayStrings[i];
    // Solo agregar espacio si no es el último elemento
    if (i < arrayStrings.length - 1) {
        concatenacionForMejorada += " ";
    }
}
console.log("Bucle for mejorado:", concatenacionForMejorada);

// COMPARACIÓN DE RENDIMIENTO Y CASOS DE USO:

// 1. Para 2-3 cadenas simples: Operador +
let simple = "Hola" + " " + "mundo";

// 2. Para interpolación con variables: Template literals
let nombre2 = "María";
let saludo = `Hola ${nombre2}, ¿cómo estás?`;

// 3. Para muchas cadenas en un array: join()
let muchasCadenas = ["a", "b", "c", "d", "e", "f", "g"];
let resultado = muchasCadenas.join("");

// 4. Para construcción dinámica compleja: reduce() o bucles
let numeros = [1, 2, 3, 4, 5];
let listaHTML = numeros.reduce((html, num) => {
    return html + `<li>Número: ${num}</li>`;
}, "<ul>") + "</ul>";

// MÉTODOS A EVITAR para rendimiento:

// ❌ MALO: Concatenación repetitiva en bucle grande
function concatenacionIneficiente(array) {
    let resultado = "";
    for (let item of array) {
        resultado += item + " "; // Cada += crea nueva cadena
    }
    return resultado.trim();
}

// ✅ BUENO: Usar join() para arrays grandes
function concatenacionEficiente(array) {
    return array.join(" ");
}

// CASO ESPECIAL: StringBuilder pattern para concatenaciones muy complejas
class StringBuilder {
    constructor() {
        this.parts = [];
    }
    
    append(text) {
        this.parts.push(text);
        return this; // Para method chaining
    }
    
    toString() {
        return this.parts.join("");
    }
}

// Uso del StringBuilder:
let sb = new StringBuilder();
sb.append("Hola ")
  .append("mundo ")
  .append("desde ")
  .append("StringBuilder");
console.log("StringBuilder:", sb.toString());

// CONCATENACIÓN CON DIFERENTES TIPOS DE DATOS:
let numero = 42;
let booleano = true;
let objeto = { nombre: "Juan" };

// JavaScript convierte automáticamente a string:
console.log("Número: " + numero); // "Número: 42"
console.log("Booleano: " + booleano); // "Booleano: true"
console.log("Objeto: " + objeto); // "Objeto: [object Object]"

// Para objetos, mejor usar JSON.stringify o toString():
console.log("Objeto JSON: " + JSON.stringify(objeto)); // "Objeto JSON: {"nombre":"Juan"}"

// CONCATENACIÓN SEGURA (manejando null/undefined):
function concatenacionSegura(...elementos) {
    return elementos
        .filter(elemento => elemento != null) // Elimina null/undefined
        .map(elemento => String(elemento))    // Convierte todo a string
        .join(" ");
}

console.log(concatenacionSegura("Hola", null, "mundo", undefined, 123)); // "Hola mundo 123"