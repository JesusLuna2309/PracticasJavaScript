// Generando arrays en JavaScript
// Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable
// Se pueden crear de varias formas, aquí algunos ejemplos:
// 1. Usando la sintaxis de corchetes []
// 2. Usando el constructor Array()

const frutas = ['manzana', 'banana', 'pera'];
// ANÁLISIS DETALLADO de la sintaxis literal []:
// - Es la forma MÁS RECOMENDADA y ampliamente usada
// - Sintaxis limpia y legible
// - Permite crear arrays con elementos de cualquier tipo
// - Los elementos se separan por comas
// - Puede contener tipos mixtos: ['texto', 42, true, null]
// - Crea automáticamente índices: 0, 1, 2...
// - Es más eficiente que el constructor Array()
console.log(frutas); // ['manzana', 'banana', 'pera']
console.log("Longitud:", frutas.length); // 3
console.log("Primer elemento:", frutas[0]); // 'manzana'

const numeros = new Array(1, 2, 3, 4, 5);
// ANÁLISIS DETALLADO del constructor Array():
// - Menos común que la sintaxis literal
// - CUIDADO: Comportamiento inconsistente con un solo argumento
// - new Array(5) crea array vacío de longitud 5: [empty × 5]
// - new Array(1, 2, 3) crea array con elementos: [1, 2, 3]
// - Se puede usar sin 'new': Array(1, 2, 3) (mismo resultado)
// - Útil en situaciones específicas (programación funcional)
console.log(numeros); // [1, 2, 3, 4, 5]

// EJEMPLOS COMPARATIVOS del constructor Array():
const arrayVacio1 = new Array(3);         // [empty × 3] - 3 espacios vacíos
const arrayVacio2 = new Array();          // [] - array completamente vacío
const arrayConElementos = new Array(1, 2, 3); // [1, 2, 3] - elementos normales

console.log("Array vacío de 3 elementos:", arrayVacio1);
console.log("Array vacío:", arrayVacio2);
console.log("Array con elementos:", arrayConElementos);

// DIFERENCIA importante: empty vs undefined
const arrayConUndefined = [undefined, undefined, undefined]; // [undefined, undefined, undefined]
const arrayConEmpty = new Array(3);                          // [empty × 3]

console.log("Con undefined:", arrayConUndefined.map(x => x + "!")); // ['undefined!', 'undefined!', 'undefined!']
console.log("Con empty:", arrayConEmpty.map(x => x + "!"));         // [empty × 3] - map() ignora elementos empty

const resultado = Array.from('mira el cielo', 
(caracter) => caracter.toUpperCase());
// ANÁLISIS DETALLADO de Array.from():
// - Método estático de la clase Array (ES6+)
// - Convierte objetos array-like o iterables en arrays reales
// - Primer parámetro: objeto a convertir (string, NodeList, Set, Map, etc.)
// - Segundo parámetro OPCIONAL: función de mapeo (como map())
// - Tercer parámetro OPCIONAL: valor de 'this' para la función de mapeo
// - MUY ÚTIL para convertir strings, NodeLists, arguments, etc.
console.log(resultado); 
// ['M', 'I', 'R', 'A', ' ', 'E', 'L', ' ', 'C', 'I', 'E', 'L', 'O']

// EJEMPLOS ADICIONALES de Array.from():

// Con diferentes tipos de datos iterables:
const setDatos = new Set([1, 2, 3, 2, 1]); // Set elimina duplicados
const arrayDesdeSet = Array.from(setDatos);
console.log("Desde Set:", arrayDesdeSet); // [1, 2, 3]

// Con NodeList (simulado):
const textoHTML = "Hola";
const caracteresArray = Array.from(textoHTML);
console.log("Caracteres:", caracteresArray); // ['H', 'o', 'l', 'a']

// Con función de mapeo más compleja:
const numerosDesdeIndices = Array.from({length: 5}, (_, indice) => indice * 2);
console.log("Números generados:", numerosDesdeIndices); // [0, 2, 4, 6, 8]

// Creando rangos de números:
const rango = Array.from({length: 10}, (_, i) => i + 1);
console.log("Rango 1-10:", rango); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Con objetos array-like:
const objetoArrayLike = {
    0: 'primer',
    1: 'segundo', 
    2: 'tercero',
    length: 3
};
const arrayDesdeObjeto = Array.from(objetoArrayLike);
console.log("Desde objeto:", arrayDesdeObjeto); // ['primer', 'segundo', 'tercero']

const colores = ['rojo', 'verde', ...['azul', 'amarillo']];
// ANÁLISIS DETALLADO del spread operator (...):
// - Operador de propagación introducido en ES6
// - "Expande" elementos de un array iterable
// - Útil para combinar arrays, clonar, agregar elementos
// - Crea un array NUEVO (no modifica los originales)
// - Más legible que concat() para operaciones simples
// - Funciona con cualquier iterable (arrays, strings, Sets, etc.)
console.log(colores); // ['rojo', 'verde', 'azul', 'amarillo']

// EJEMPLOS AVANZADOS del spread operator:

// Combinar múltiples arrays:
const primarios = ['rojo', 'azul', 'amarillo'];
const secundarios = ['verde', 'morado', 'naranja'];
const neutros = ['blanco', 'negro', 'gris'];
const todosLosColores = [...primarios, ...secundarios, ...neutros];
console.log("Todos los colores:", todosLosColores);

// Clonar un array (copia superficial):
const original = [1, 2, 3];
const copia = [...original];
console.log("Original:", original);
console.log("Copia:", copia);
console.log("Son el mismo objeto:", original === copia); // false

// Agregar elementos al inicio, medio y final:
const base = ['b', 'c'];
const expandido = ['a', ...base, 'd', 'e'];
console.log("Expandido:", expandido); // ['a', 'b', 'c', 'd', 'e']

// Con strings (convierte a array de caracteres):
const palabra = "Hola";
const letras = [...palabra];
console.log("Letras:", letras); // ['H', 'o', 'l', 'a']

// Encontrar max/min de un array:
const numeros2 = [10, 5, 8, 3, 9];
const maximo = Math.max(...numeros2);
const minimo = Math.min(...numeros2);
console.log("Máximo:", maximo); // 10
console.log("Mínimo:", minimo);  // 3

// MÉTODOS ADICIONALES para crear arrays:

// 1. Array.of() - siempre crea array con los argumentos como elementos:
const arrayOf1 = Array.of(3);        // [3] - NO crea array de longitud 3
const arrayOf2 = Array.of(1, 2, 3);  // [1, 2, 3]
console.log("Array.of(3):", arrayOf1);
console.log("Array.of(1,2,3):", arrayOf2);

// 2. fill() - crear array con valores repetidos:
const arrayLleno = new Array(5).fill('x');
console.log("Array lleno:", arrayLleno); // ['x', 'x', 'x', 'x', 'x']

// Con valores diferentes:
const arrayProgresivo = new Array(3).fill(0).map((_, i) => i + 1);
console.log("Array progresivo:", arrayProgresivo); // [1, 2, 3]

// 3. Destructuring para crear arrays:
const [primero, segundo, ...resto] = ['a', 'b', 'c', 'd', 'e'];
const nuevoArray = [primero, segundo];
console.log("Nuevo array:", nuevoArray); // ['a', 'b']
console.log("Resto:", resto); // ['c', 'd', 'e']

// CASOS DE USO PRÁCTICOS:

// 1. Crear arrays de configuración:
const configuracionInicial = {
    colores: ['#FF0000', '#00FF00', '#0000FF'],
    tamaños: [10, 20, 30],
    activo: true
};

// 2. Generar datos de prueba:
function generarDatosPrueba(cantidad) {
    return Array.from({length: cantidad}, (_, i) => ({
        id: i + 1,
        nombre: `Usuario ${i + 1}`,
        activo: Math.random() > 0.5
    }));
}
const usuarios = generarDatosPrueba(3);
console.log("Usuarios de prueba:", usuarios);

// 3. Convertir argumentos de función a array:
function ejemplo() {
    const args = Array.from(arguments); // En ES5
    const argsModernos = [...arguments]; // En ES6+
    console.log("Argumentos:", args);
    return args.map(arg => arg * 2);
}
ejemplo(1, 2, 3, 4);

// 4. Crear matrices (arrays bidimensionales):
const matriz = Array.from({length: 3}, () => 
    Array.from({length: 3}, () => 0)
);
console.log("Matriz 3x3:", matriz);
// [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

// PERFORMANCE Y BUENAS PRÁCTICAS:

// ✅ BUENO: Usar literal para arrays conocidos
const bueno = [1, 2, 3, 4, 5];

// ❌ EVITAR: Constructor con un argumento numérico si no es intencional
// const malo = new Array(5); // Crea [empty × 5], probablemente no deseado

// ✅ BUENO: Array.from() para convertir iterables
const nodeList = document.querySelectorAll('div'); // En el navegador
const arrayDeNodes = Array.from(nodeList);

// ✅ BUENO: Spread para operaciones simples
const combinado = [...array1, ...array2];

// ❌ MENOS EFICIENTE: concat() para operaciones simples (aunque más compatible)
const combinadoOld = array1.concat(array2);

// VALIDACIÓN de arrays:
function esArray(valor) {
    return Array.isArray(valor);
}

console.log("Es array:", esArray([1, 2, 3])); // true
console.log("Es array:", esArray("texto"));   // false

// RESUMEN de cuándo usar cada método:
// - [] : Casos generales, arrays conocidos (MÁS COMÚN)
// - new Array() : Crear arrays vacíos de longitud específica
// - Array.from() : Convertir iterables, generar secuencias
// - [...] : Combinar arrays, clonar, expandir
// - Array.of() : Cuando necesitas evitar el comportamiento especial de Array()
