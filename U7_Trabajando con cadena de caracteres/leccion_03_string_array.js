//Convertir un string a un array

const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
In lacus velit, convallis quis velit at, sagittis dignissim turpis. 
Fusce id sodales sapien. 
Maecenas congue, sem non convallis tincidunt, augue nisi egestas sem, non dapibus mauris elit et est. 
Aenean quis molestie leo. Aliquam porttitor nisl at lorem pharetra finibus vitae in quam. 
Nunc mollis augue at urna elementum, viverra rhoncus tellus tempus. 
Quisque est dui, rhoncus id tortor faucibus, sagittis faucibus tellus. Curabitur eget magna nibh. 
Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas et lorem augue.`;

const array = string.split(" "); // Divide el string en un array de palabras
// FUNCIONAMIENTO DETALLADO de split():
// 1. Busca todas las ocurrencias del delimitador (" ") en el string
// 2. Corta el string en esos puntos
// 3. Retorna un array con los fragmentos resultantes
// 4. El delimitador NO se incluye en los elementos del array resultante
// IMPORTANTE: split() es case-sensitive (distingue mayúsculas/minúsculas)
// NOTA: Los saltos de línea en template literals se convierten en espacios cuando se unen
console.log("Array de palabras:", array); 
console.log("Número de palabras:", array.length);
// Imprime: Array de palabras: ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", ...]

const arrayPorPuntuacion = string.split(". "); // Divide el string en un array de oraciones
// ANÁLISIS del delimitador ". ":
// - Busca específicamente punto seguido de espacio
// - NO divide en puntos que no tengan espacio después
// - La última oración conservará el punto final porque termina sin ". "
// CONSIDERACIÓN: Los saltos de línea en el template literal crean espacios extra
console.log("Array de oraciones:", arrayPorPuntuacion); 
console.log("Número de oraciones:", arrayPorPuntuacion.length);

// EJEMPLOS ADICIONALES para entender mejor split():

// 1. Split sin parámetro - convierte cada carácter en un elemento
const caracteres = "Hola".split("");
console.log("Caracteres individuales:", caracteres); // ["H", "o", "l", "a"]

// 2. Split con delimitador que no existe - retorna array con el string completo
const noEncontrado = "Hola mundo".split("xyz");
console.log("Delimitador inexistente:", noEncontrado); // ["Hola mundo"]

// 3. Split con expresiones regulares (más potente)
const textoMixto = "uno,dos;tres:cuatro|cinco";
const multiDelimitador = textoMixto.split(/[,:;|]/); // Divide por múltiples delimitadores
console.log("Múltiples delimitadores:", multiDelimitador); // ["uno", "dos", "tres", "cuatro", "cinco"]

// 4. Split con límite de elementos
const limitado = "a-b-c-d-e-f".split("-", 3); // Solo los primeros 3 elementos
console.log("Con límite:", limitado); // ["a", "b", "c"]

// 5. Manejo de espacios múltiples
const textoConEspacios = "palabra1    palabra2  palabra3";
const arrayConEspacios = textoConEspacios.split(" ");
console.log("Con espacios múltiples:", arrayConEspacios); // ["palabra1", "", "", "", "palabra2", "", "palabra3"]

// Solución para espacios múltiples:
const arraySinEspaciosVacios = textoConEspacios.split(/\s+/); // \s+ = uno o más espacios
console.log("Sin espacios vacíos:", arraySinEspaciosVacios); // ["palabra1", "palabra2", "palabra3"]

//Como reemplazar una palabra

const textoSplit = string.split(" "); // Convierte el string en un array de palabras
// VENTAJAS de trabajar con arrays después de split():
// - Arrays son mutables (a diferencia de strings que son inmutables)
// - Acceso directo por índice O(1)
// - Disponibilidad de todos los métodos de array (map, filter, forEach, etc.)
// - Facilita operaciones complejas de manipulación de texto

textoSplit[3] = "REEMPLAZADO"; // Reemplaza la cuarta palabra (índice 3)
// IMPORTANTE: Los índices en arrays empiezan en 0
// Por lo tanto, índice 3 = cuarta palabra
// Esta operación modifica el array original (mutación)

const textoReemplazado = textoSplit.join(" "); // Une el array de nuevo en un string
// join() es el proceso inverso a split():
// - Toma cada elemento del array
// - Los une con el separador especificado (" ")
// - Retorna una nueva cadena
console.log("Texto con reemplazo:", textoReemplazado);

// MÉTODOS ALTERNATIVOS PARA REEMPLAZAR TEXTO:

// Método 1: Usando replace() (más directo para reemplazos simples)
const reemplazoDirecto = string.replace("sit", "REEMPLAZADO");
console.log("Reemplazo con replace():", reemplazoDirecto);
// LIMITACIÓN: replace() solo reemplaza la PRIMERA ocurrencia

// Método 2: Usando replaceAll() (ES2021) para todas las ocurrencias
const reemplazoTodas = string.replaceAll("et", "Y");
console.log("Reemplazar todas las ocurrencias:", reemplazoTodas);

// Método 3: Usando map() para transformaciones complejas
const palabrasTransformadas = string.split(" ").map((palabra, indice) => {
    if (indice === 3) {
        return "REEMPLAZADO";
    } else if (palabra.length > 5) {
        return palabra.toUpperCase(); // Convertir palabras largas a mayúsculas
    } else {
        return palabra.toLowerCase(); // Convertir palabras cortas a minúsculas
    }
}).join(" ");
console.log("Transformación compleja:", palabrasTransformadas);

// Método 4: Usando filter() para remover palabras
const sinPalabrasCortas = string.split(" ")
    .filter(palabra => palabra.length > 3) // Solo palabras de más de 3 caracteres
    .join(" ");
console.log("Sin palabras cortas:", sinPalabrasCortas);

// CASOS DE USO PRÁCTICOS:

// 1. Análisis de frecuencia de palabras
function analizarFrecuencia(texto) {
    const palabras = texto.toLowerCase()
        .replace(/[.,!?;]/g, "") // Eliminar puntuación
        .split(/\s+/)            // Dividir por espacios
        .filter(palabra => palabra.length > 0); // Eliminar elementos vacíos
    
    const frecuencia = {};
    palabras.forEach(palabra => {
        frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
    });
    
    return frecuencia;
}

console.log("Frecuencia de palabras:", analizarFrecuencia(string));

// 2. Censura de palabras
function censurarPalabras(texto, palabrasProhibidas) {
    return texto.split(" ").map(palabra => {
        const palabraLimpia = palabra.toLowerCase().replace(/[.,!?;]/g, "");
        return palabrasProhibidas.includes(palabraLimpia) ? "*".repeat(palabra.length) : palabra;
    }).join(" ");
}

const textoCensurado = censurarPalabras(string, ["dolor", "lorem"]);
console.log("Texto censurado:", textoCensurado);

// 3. Extraer información específica
function extraerPalabrasLargas(texto, longitudMinima = 6) {
    return texto.split(/\s+/)
        .map(palabra => palabra.replace(/[.,!?;]/g, "")) // Limpiar puntuación
        .filter(palabra => palabra.length >= longitudMinima)
        .map(palabra => palabra.toLowerCase())
        .filter((palabra, indice, array) => array.indexOf(palabra) === indice); // Eliminar duplicados
}

console.log("Palabras largas únicas:", extraerPalabrasLargas(string, 7));

// COMPARACIÓN DE RENDIMIENTO:
// Usar split() es eficiente para convertir un string a un array, especialmente con delimitadores
// Alternativas como forEach() o map() son menos eficientes para este caso específico

// RENDIMIENTO comparado:
console.time("Split method");
for (let i = 0; i < 10000; i++) {
    string.split(" ");
}
console.timeEnd("Split method");

// Método menos eficiente (solo para demostración):
console.time("Manual method");
for (let i = 0; i < 10000; i++) {
    let array = [];
    let palabra = "";
    for (let char of string) {
        if (char === " ") {
            if (palabra) array.push(palabra);
            palabra = "";
        } else {
            palabra += char;
        }
    }
    if (palabra) array.push(palabra);
}
console.timeEnd("Manual method");

// CONSIDERACIONES IMPORTANTES:

// 1. Manejo de caracteres Unicode
const textoUnicode = "Café 咖啡 🔥";
console.log("Unicode split:", textoUnicode.split(" ")); // Maneja correctamente caracteres especiales

// 2. Manejo de casos edge
const textoVacio = "";
console.log("String vacío:", textoVacio.split(" ")); // [""]

const soloEspacios = "   ";
console.log("Solo espacios:", soloEspacios.split(" ")); // ["", "", "", ""]

// 3. Inmutabilidad de strings vs mutabilidad de arrays
console.log("String original después de split:", string); // Sin cambios
console.log("Array después de modificación:", textoSplit); // Modificado

// PATRÓN COMÚN: Split -> Transform -> Join
function procesarTexto(texto) {
    return texto
        .split(" ")                    // String a Array
        .map(word => word.toLowerCase()) // Transformar
        .filter(word => word.length > 2) // Filtrar
        .join("-");                    // Array a String
}

console.log("Texto procesado:", procesarTexto("Hola Mundo En JavaScript"));



