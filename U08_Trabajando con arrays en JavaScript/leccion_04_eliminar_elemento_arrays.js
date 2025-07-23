// Eliminar un elemento de un array

// Usando el metodo pop()
let frutas = ['manzana', 'banana', 'naranja', 'fresa'];
console.log('Array original:', frutas);

// Elimina el último elemento del array
frutas.pop();
// ANÁLISIS DETALLADO de pop():
// - MUTA el array original (modifica directamente)
// - Retorna el elemento ELIMINADO (no undefined)
// - Reduce la longitud del array en 1
// - Complejidad temporal: O(1) - muy eficiente
// - Si el array está vacío, retorna undefined
// - Es la operación inversa de push()
// - Ideal para implementar estructuras de datos tipo pila (LIFO)
console.log('Array después de pop():', frutas);

// EJEMPLOS ADICIONALES de pop():
const pila = [1, 2, 3, 4, 5];
console.log("Elementos en la pila:", pila);

while (pila.length > 0) {
    const elementoEliminado = pila.pop();
    console.log(`Eliminado: ${elementoEliminado}, Restantes: [${pila}]`);
}

// pop() en array vacío:
const vacio = [];
const resultado = vacio.pop();
console.log("pop() en array vacío retorna:", resultado); // undefined

//Usando el método shift()
let verduras = ['lechuga', 'tomate', 'pepino', 'zanahoria'];
console.log('Array original:', verduras);

// Elimina el primer elemento del array
verduras.shift();
// ANÁLISIS DETALLADO de shift():
// - MUTA el array original
// - Retorna el elemento ELIMINADO del principio
// - MENOS EFICIENTE que pop() porque debe reasignar todos los índices
// - Complejidad temporal: O(n) - debe mover todos los elementos
// - Reduce la longitud del array en 1
// - Operación inversa de unshift()
// - Útil para implementar colas (FIFO)
console.log('Array después de shift():', verduras);

// EJEMPLOS ADICIONALES de shift():
const cola = ['primero', 'segundo', 'tercero'];
console.log("Cola inicial:", cola);

// Simulando una cola FIFO:
while (cola.length > 0) {
    const atendido = cola.shift();
    console.log(`Atendiendo: ${atendido}, En espera: [${cola}]`);
}

// Comparación de rendimiento shift() vs pop():
console.time("shift() 10000 elementos");
const arrayShift = Array.from({length: 10000}, (_, i) => i);
while (arrayShift.length > 0) {
    arrayShift.shift();
}
console.timeEnd("shift() 10000 elementos");

console.time("pop() 10000 elementos");
const arrayPop = Array.from({length: 10000}, (_, i) => i);
while (arrayPop.length > 0) {
    arrayPop.pop();
}
console.timeEnd("pop() 10000 elementos");

// Usando el método splice()
// Elimina un elemento específico del array
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
console.log('Array original:', colores);

// Elimina el segundo elemento del array
colores.splice(1, 1);
// ANÁLISIS DETALLADO de splice():
// - MUTA el array original
// - Sintaxis: array.splice(inicio, cantidadAEliminar, ...elementosAInsertar)
// - Retorna un ARRAY con los elementos eliminados
// - Puede eliminar E insertar simultáneamente
// - Complejidad temporal: O(n) para eliminaciones en el medio
// - Más versátil pero menos eficiente que pop()/shift()
// - Permite operaciones complejas en una sola llamada
console.log('Array después de splice():', colores);

// Eliminando varios elementos con splice()
let numeros = [1, 2, 3, 4, 5];
console.log('Array original:', numeros);

// Elimina los dos primeros elementos del array
numeros.splice(0, 2);
console.log('Array después de splice() con varios elementos eliminados:', numeros);

// EJEMPLOS AVANZADOS de splice():

// Eliminar elemento por valor (no por índice):
function eliminarPorValor(array, valor) {
    const indice = array.indexOf(valor);
    if (indice > -1) {
        return array.splice(indice, 1)[0]; // Retorna el elemento eliminado
    }
    return null; // No encontrado
}

const frutas2 = ['manzana', 'banana', 'pera', 'uva'];
const eliminado = eliminarPorValor(frutas2, 'banana');
console.log(`Eliminado: ${eliminado}`); // "banana"
console.log(`Array resultante:`, frutas2); // ['manzana', 'pera', 'uva']

// Eliminar múltiples elementos por condición:
function eliminarPorCondicion(array, condicion) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (condicion(array[i], i)) {
            array.splice(i, 1);
        }
    }
}

const numerosParaLimpiar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
eliminarPorCondicion(numerosParaLimpiar, num => num % 2 === 0); // Eliminar pares
console.log("Sin números pares:", numerosParaLimpiar); // [1, 3, 5, 7, 9]

// Reemplazar elementos usando splice():
const letras = ['a', 'b', 'x', 'y', 'd'];
const reemplazados = letras.splice(2, 2, 'c'); // Elimina 'x', 'y' e inserta 'c'
console.log("Elementos reemplazados:", reemplazados); // ['x', 'y']
console.log("Array después del reemplazo:", letras); // ['a', 'b', 'c', 'd']

//Usando el metodo slice()
//Elimina un rango de elementos sin modificar el array original
let ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];
console.log('Array original:', ciudades);

// Elimina el primer elemento del array y devuelve un nuevo array sin ese elemento
let nuevoCiudades = ciudades.slice(1);
// ANÁLISIS DETALLADO de slice():
// - NO MUTA el array original (INMUTABLE)
// - Sintaxis: array.slice(inicio?, fin?)
// - Retorna un NUEVO array con los elementos copiados
// - Si inicio es negativo, cuenta desde el final
// - Si fin se omite, va hasta el final del array
// - Fin es EXCLUSIVO (no incluye el elemento en esa posición)
// - Útil para programación funcional
console.log('Nuevo array después de slice():', nuevoCiudades);

//Elimina el segundo elemento del array y devuelve un nuevo array sin ese elemento
nuevoCiudades = ciudades.slice(0, 2).concat(ciudades.slice(3));
console.log('Nuevo array después de eliminar el segundo elemento con slice():', nuevoCiudades);

// Nota: slice() no modifica el array original
console.log('Array original después de slice():', ciudades);

// EJEMPLOS AVANZADOS de slice():

// Con índices negativos:
const abecedario = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log("Últimos 3 elementos:", abecedario.slice(-3)); // ['d', 'e', 'f']
console.log("Todos menos los últimos 2:", abecedario.slice(0, -2)); // ['a', 'b', 'c', 'd']

// Clonar un array:
const original = [1, 2, 3, 4, 5];
const clon = original.slice(); // Copia completa
console.log("Original:", original);
console.log("Clon:", clon);
console.log("Son diferentes objetos:", original !== clon); // true

// Función inmutable para eliminar por índice:
function eliminarEnIndice(array, indice) {
    return array.slice(0, indice).concat(array.slice(indice + 1));
}

const numeros2 = [10, 20, 30, 40, 50];
const sinTercero = eliminarEnIndice(numeros2, 2); // Elimina índice 2 (30)
console.log("Original:", numeros2); // [10, 20, 30, 40, 50]
console.log("Sin tercero:", sinTercero); // [10, 20, 40, 50]

// Función inmutable para eliminar por rango:
function eliminarRango(array, inicio, cantidad) {
    return array.slice(0, inicio).concat(array.slice(inicio + cantidad));
}

const letras2 = ['a', 'b', 'c', 'd', 'e', 'f'];
const sinMedio = eliminarRango(letras2, 2, 2); // Elimina 2 elementos desde índice 2
console.log("Sin elementos del medio:", sinMedio); // ['a', 'b', 'e', 'f']

// Usando el método delete
let animales = ['gato', 'perro', 'pájaro', 'pez'];
console.log('Array original:', animales);

// Elimina el segundo elemento del array
delete animales[1];
// ANÁLISIS DETALLADO de delete:
// - NO es un método de array, es un operador de JavaScript
// - DEJA UN HUECO en el array (sparse array)
// - NO cambia la longitud del array
// - El elemento se vuelve undefined pero la posición existe
// - GENERALMENTE NO RECOMENDADO para arrays
// - Puede causar problemas con iteración
// - Útil solo en casos muy específicos
console.log('Array después de delete:', animales);

// Nota: El método delete no cambia la longitud del array, deja un "hueco" en su lugar
console.log('Array con hueco:', animales);
console.log('Longitud del array después de delete:', animales.length);

// PROBLEMAS con delete:
const problemasDelete = [1, 2, 3, 4, 5];
delete problemasDelete[2];

console.log("Array con delete:", problemasDelete); // [1, 2, empty, 4, 5]
console.log("Longitud:", problemasDelete.length); // 5 (no cambió)
console.log("Elemento eliminado:", problemasDelete[2]); // undefined

// Problemas en iteración:
console.log("Iteración con for...in:");
for (const indice in problemasDelete) {
    console.log(`Índice ${indice}: ${problemasDelete[indice]}`);
} // Salta el índice 2

console.log("Iteración con forEach:");
problemasDelete.forEach((valor, indice) => {
    console.log(`Índice ${indice}: ${valor}`);
}); // También salta el índice 2

// Verificar elementos sparse:
console.log("Tiene propiedad índice 2:", problemasDelete.hasOwnProperty(2)); // false
console.log("Índice 2 existe en array:", 2 in problemasDelete); // false

// Arreglar array sparse:
function compactarArray(array) {
    return array.filter(() => true); // Elimina elementos sparse
}

const arreglado = compactarArray(problemasDelete);
console.log("Array compactado:", arreglado); // [1, 2, 4, 5]

// Usando el método filter()
let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Array original:', numerosArray);

// Elimina los números pares del array
let numerosImpares = numerosArray.filter(num => num % 2 !== 0);
// ANÁLISIS DETALLADO de filter():
// - NO MUTA el array original (INMUTABLE)
// - Retorna un NUEVO array con elementos que cumplen la condición
// - Función callback recibe (elemento, índice, arrayCompleto)
// - Si ningún elemento cumple la condición, retorna array vacío []
// - Muy útil para eliminación condicional
// - Complejidad temporal: O(n) - recorre todo el array
// - Ideal para programación funcional
console.log('Array después de filter() eliminando números pares:', numerosImpares);

// EJEMPLOS AVANZADOS de filter():

// Eliminar elementos null/undefined/vacíos:
const conVacios = [1, '', null, 2, undefined, 3, 0, false, 4];
const sinVacios = conVacios.filter(Boolean); // Elimina valores falsy
console.log("Sin valores falsy:", sinVacios); // [1, 2, 3, 4]

// Eliminar duplicados:
const conDuplicados = [1, 2, 2, 3, 3, 3, 4, 4, 5];
const sinDuplicados = conDuplicados.filter((valor, indice, array) => 
    array.indexOf(valor) === indice
);
console.log("Sin duplicados:", sinDuplicados); // [1, 2, 3, 4, 5]

// Eliminar objetos por propiedad:
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Luis', edad: 16 }
];

const adultos = personas.filter(persona => persona.edad >= 18);
console.log("Solo adultos:", adultos);

// Función reutilizable para eliminar por condición:
function eliminarSi(array, condicion) {
    return array.filter((...args) => !condicion(...args));
}

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sinPares = eliminarSi(numeros3, num => num % 2 === 0);
console.log("Sin números pares (con eliminarSi):", sinPares);

// MÉTODOS ADICIONALES para eliminar elementos:

// 1. Usando findIndex() + splice() para eliminar primer elemento que cumple condición:
function eliminarPrimeroQueCoincida(array, condicion) {
    const indice = array.findIndex(condicion);
    if (indice !== -1) {
        return array.splice(indice, 1)[0];
    }
    return null;
}

const colores2 = ['rojo', 'verde', 'azul', 'verde', 'amarillo'];
const primerVerde = eliminarPrimeroQueCoincida(colores2, color => color === 'verde');
console.log("Primer verde eliminado:", primerVerde); // 'verde'
console.log("Array resultante:", colores2); // ['rojo', 'azul', 'verde', 'amarillo']

// 2. Usando reduce() para filtrado complejo:
function eliminarConReduce(array, condicion) {
    return array.reduce((acumulador, elemento, indice) => {
        if (!condicion(elemento, indice)) {
            acumulador.push(elemento);
        }
        return acumulador;
    }, []);
}

const mixed = [1, 'a', 2, 'b', 3, 'c'];
const soloNumeros = eliminarConReduce(mixed, elemento => typeof elemento === 'string');
console.log("Solo números:", soloNumeros); // [1, 2, 3]

// COMPARACIÓN DE RENDIMIENTO:
function compararRendimientoEliminacion() {
    const tamaño = 100000;
    
    // Test splice() (mutable):
    console.time("splice() eliminando del final");
    const arrayMutable = Array.from({length: tamaño}, (_, i) => i);
    while (arrayMutable.length > 0) {
        arrayMutable.splice(-1, 1); // Eliminar último
    }
    console.timeEnd("splice() eliminando del final");
    
    // Test filter() (inmutable):
    console.time("filter() eliminando pares");
    const arrayInmutable = Array.from({length: tamaño}, (_, i) => i);
    const filtrado = arrayInmutable.filter(num => num % 2 !== 0);
    console.timeEnd("filter() eliminando pares");
}

// CASOS DE USO RECOMENDADOS:

// ✅ Usar pop() cuando:
// - Eliminas frecuentemente del final
// - Implementas pilas (LIFO)
// - Necesitas máximo rendimiento

// ✅ Usar shift() cuando:
// - Implementas colas (FIFO)
// - Necesitas eliminar del principio ocasionalmente
// - No es crítico el rendimiento

// ✅ Usar splice() cuando:
// - Necesitas eliminar en posiciones específicas
// - Quieres eliminar e insertar simultáneamente
// - Trabajas con arrays que cambian frecuentemente

// ✅ Usar slice() cuando:
// - Prefieres inmutabilidad
// - Necesitas el array original intacto
// - Trabajas con programación funcional

// ❌ EVITAR delete porque:
// - Crea arrays sparse problemáticos
// - No reduce la longitud del array
// - Causa problemas en iteración

// ✅ Usar filter() cuando:
// - Eliminas por condiciones complejas
// - Trabajas con programación funcional
// - Quieres un código declarativo y legible

// FUNCIONES UTILITARIAS avanzadas:
class ArrayUtils {
    // Eliminar elemento por valor (inmutable):
    static removeByValue(array, value) {
        return array.filter(item => item !== value);
    }
    
    // Eliminar múltiples valores (inmutable):
    static removeValues(array, values) {
        const valuesSet = new Set(values);
        return array.filter(item => !valuesSet.has(item));
    }
    
    // Eliminar por índices (inmutable):
    static removeByIndices(array, indices) {
        const indicesSet = new Set(indices);
        return array.filter((_, index) => !indicesSet.has(index));
    }
    
    // Eliminar elemento por valor (mutable):
    static removeByValueMutable(array, value) {
        const index = array.indexOf(value);
        if (index > -1) {
            return array.splice(index, 1)[0];
        }
        return null;
    }
}

// Ejemplos de uso:
const testArray = [1, 2, 3, 2, 4, 5, 2];
console.log("Remover 2 (inmutable):", ArrayUtils.removeByValue(testArray, 2)); // [1, 3, 4, 5]
console.log("Remover múltiples valores:", ArrayUtils.removeValues(testArray, [2, 4])); // [1, 3, 5]
console.log("Remover por índices:", ArrayUtils.removeByIndices(testArray, [0, 2, 4])); // [2, 2, 5]

const mutableTest = [1, 2, 3, 2, 4];
console.log("Eliminado:", ArrayUtils.removeByValueMutable(mutableTest, 2)); // 2
console.log("Array después:", mutableTest); // [1, 3, 2, 4]

