//Bucles for...of en JavaScript
// El bucle for...of itera sobre objetos iterables (arrays, strings, etc.)
// A diferencia de for...in, for...of devuelve los VALORES, no los ÍNDICES
// Es útil para recorrer arrays y otros objetos iterables de manera sencilla

// EJEMPLO BÁSICO CON UN ARRAY
// for...of es la forma más limpia y moderna de iterar sobre arrays
const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    // 'numero' contendrá cada valor del array en cada iteración
    // Internamente, JavaScript usa el protocolo de iteración (Symbol.iterator)
    // Es equivalente a: numeros[0], numeros[1], numeros[2], etc.
    // Pero sin necesidad de manejar índices manualmente
    console.log("Número:", numero);
    // Imprime: Número: 1, Número: 2, Número: 3, Número: 4, Número: 5
}

// EJEMPLO CON UN STRING
// Los strings implementan el protocolo de iteración por defecto
// Cada carácter es tratado como un elemento individual
const texto = "Hola";
for (let caracter of texto) {
    // 'caracter' contendrá cada carácter del string en cada iteración
    // Esto incluye caracteres especiales, emojis, y caracteres Unicode
    // Es más seguro que usar texto[i] porque maneja correctamente caracteres multibyte
    console.log("Carácter:", caracter);
    // Imprime: Carácter: H, Carácter: o, Carácter: l, Carácter: a
}

// EJEMPLO CON UN OBJETO ITERABLE (MAP)
// Map es una estructura de datos que mantiene pares clave-valor
// A diferencia de los objetos, las claves pueden ser de cualquier tipo
const mapa = new Map([
    ["clave1", "valor1"],    // Array con [clave, valor]
    ["clave2", "valor2"],    // Cada elemento es un par clave-valor
    ["clave3", "valor3"]
]);

// DESTRUCTURING EN EL BUCLE for...of
// [clave, valor] extrae automáticamente los elementos del array
// Sin destructuring sería: for (let entrada of mapa) { let clave = entrada[0]; let valor = entrada[1]; }
for (let [clave, valor] of mapa) {
    // 'clave' y 'valor' contendrán cada par clave-valor del Map
    // El Map mantiene el orden de inserción (a diferencia de objetos en versiones antiguas de JS)
    console.log("Clave:", clave, "Valor:", valor);
    // Imprime: Clave: clave1 Valor: valor1, Clave: clave2 Valor: valor2, etc.
}

// EJEMPLO CON UN SET
// Set es una colección de valores únicos (sin duplicados)
// Mantiene el orden de inserción y es iterable por defecto
const conjunto = new Set([10, 20, 30]);
for (let valor of conjunto) {
    // 'valor' contendrá cada elemento del Set
    // Los Sets no tienen claves, solo valores únicos
    // Si intentaras agregar un valor duplicado, sería ignorado
    console.log("Valor del Set:", valor);
    // Imprime: Valor del Set: 10, Valor del Set: 20, Valor del Set: 30
}

// FOR...OF CON OBJETOS ITERABLES - EJEMPLO ADICIONAL
// Repetimos el ejemplo de Map para enfatizar las buenas prácticas
const miMapa = new Map([
    ["a", 1],               // Clave string, valor number
    ["b", 2],               // Map puede tener claves de diferentes tipos
    ["c", 3]                // Es más flexible que los objetos literales
]);

for (let [clave, valor] of miMapa) {
    // Esta sintaxis es específica de for...of con Maps
    // El destructuring hace el código más legible que mapa.get(clave)
    console.log("Clave:", clave, "Valor:", valor);
    // Imprime: Clave: a Valor: 1, Clave: b Valor: 2, Clave: c Valor: 3
}

// DISCLAIMER: for...of NO FUNCIONA CON OBJETOS SIMPLES (LITERALES)
// Los objetos literales NO implementan el protocolo de iteración por defecto
// Solo son "enumerables", no "iterables"
const objeto = { x: 1, y: 2, z: 3 };

// EJEMPLO INCORRECTO (COMENTADO PARA EVITAR ERROR)
// for (let valor of objeto) { // TypeError: objeto is not iterable
//     console.log(valor); // Error: objeto no implementa Symbol.iterator
// }

// SOLUCIÓN 1: Usar for...in para objetos literales
// for...in itera sobre las CLAVES enumerables del objeto
for (let clave in objeto) {
    // 'clave' será "x", "y", "z" (strings)
    // objeto[clave] accede al valor usando la clave
    console.log("Clave:", clave, "Valor:", objeto[clave]);
    // Imprime: Clave: x Valor: 1, Clave: y Valor: 2, Clave: z Valor: 3
}

// SOLUCIONES ALTERNATIVAS PARA USAR for...of CON OBJETOS:
// Object.keys(objeto) - retorna array de claves
// Object.values(objeto) - retorna array de valores  
// Object.entries(objeto) - retorna array de [clave, valor]

// Ejemplo con Object.entries():
for (let [clave, valor] of Object.entries(objeto)) {
    console.log("Clave:", clave, "Valor:", valor);
    // Funciona porque Object.entries() retorna un array (que es iterable)
}

// DIFERENCIAS FUNDAMENTALES ENTRE for...in Y for...of:

// 1. PROPÓSITO:
// for...in: Itera sobre PROPIEDADES ENUMERABLES (claves/índices)
// for...of: Itera sobre VALORES de objetos ITERABLES

// 2. COMPATIBILIDAD:
// for...in: Funciona con cualquier objeto (incluye propiedades heredadas)
// for...of: Solo funciona con objetos que implementan Symbol.iterator

// 3. RESULTADO:
// for...in: Te da las CLAVES para que accedas a los valores
// for...of: Te da directamente los VALORES

// EJEMPLO COMPARATIVO (necesitaría definir 'usuario' primero):
const usuario = { nombre: "Carlos", edad: 30 };

// Con for...in (itera sobre claves):
for (let clave in usuario) {
    console.log("Clave:", clave, "Valor:", usuario[clave]);
    // Imprime: Clave: nombre Valor: Carlos, Clave: edad Valor: 30
}

// Con for...of (requiere conversión a iterable):
for (let [clave, valor] of Object.entries(usuario)) {
    console.log("Clave:", clave, "Valor:", valor);
    // Mismo resultado, pero usando for...of con Object.entries()
}

// CUÁNDO USAR CADA UNO:
// Usa for...of cuando:
// - Trabajas con arrays, strings, Maps, Sets
// - Solo necesitas los valores, no las posiciones
// - Quieres código más limpio y legible
// - Trabajas con estructuras de datos modernas

// Usa for...in cuando:
// - Trabajas con objetos literales
// - Necesitas acceso a las claves/propiedades
// - Quieres iterar sobre propiedades de objetos
// - Necesitas compatibilidad con código más antiguo