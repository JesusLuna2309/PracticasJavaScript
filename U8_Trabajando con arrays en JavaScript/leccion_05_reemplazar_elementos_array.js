//Reemplazar elementos de un array en JavaScript

// Utilizando el indice del array
let frutas = ['manzana', 'banana', 'naranja', 'kiwi'];
frutas[1] = 'fresa'; // Reemplaza 'banana' con 'fresa'
// ANÁLISIS DETALLADO de asignación por índice:
// - MUTA el array original directamente
// - MUY EFICIENTE: O(1) - acceso directo por índice
// - Requiere conocer la posición exacta del elemento
// - Si el índice no existe, EXTIENDE el array automáticamente
// - Puede crear arrays sparse si usas índices no consecutivos
// - Es la forma más directa y rápida de reemplazar
// - No hay validación automática de límites
console.log(frutas); // ['manzana', 'fresa', 'naranja', 'kiwi']

// EJEMPLOS ADICIONALES de asignación por índice:

// Reemplazo simple:
const numeros = [10, 20, 30, 40];
numeros[2] = 35;
console.log("Reemplazo simple:", numeros); // [10, 20, 35, 40]

// CUIDADO: Extensión automática del array:
const pequeño = [1, 2];
pequeño[5] = 6; // Crea elementos undefined en posiciones 2, 3, 4
console.log("Array extendido:", pequeño); // [1, 2, empty × 3, 6]
console.log("Longitud:", pequeño.length); // 6

// Verificar antes de reemplazar:
function reemplazarSeguro(array, indice, valor) {
    if (indice >= 0 && indice < array.length) {
        const valorAnterior = array[indice];
        array[indice] = valor;
        return valorAnterior;
    }
    return null; // Índice fuera de rango
}

const test = ['a', 'b', 'c'];
const anterior = reemplazarSeguro(test, 1, 'X');
console.log("Valor anterior:", anterior); // 'b'
console.log("Array modificado:", test); // ['a', 'X', 'c']

// Utilizando el método splice
let verduras = ['lechuga', 'tomate', 'cebolla', 'pepino'];
verduras.splice(2, 1, 'pimiento'); // Reemplaza 'cebolla' con 'pimiento'
// ANÁLISIS DETALLADO de splice() para reemplazo:
// - MUTA el array original
// - Sintaxis: array.splice(inicio, cantidadAEliminar, ...nuevosElementos)
// - Retorna array con elementos ELIMINADOS
// - Puede cambiar la longitud del array
// - Complejidad temporal: O(n) para posiciones en el medio
// - MÁS VERSÁTIL que asignación directa
// - Permite reemplazos complejos (1 por muchos, muchos por 1)
console.log(verduras); // ['lechuga', 'tomate', 'pimiento', 'pepino']

// Reemplazar múltiples elementos con splice
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
colores.splice(1, 2, 'morado', 'naranja'); // Reemplaza 'verde' y 'azul' con 'morado' y 'naranja'
console.log(colores); // ['rojo', 'morado', 'naranja', 'amarillo']

// EJEMPLOS AVANZADOS de splice() para reemplazo:

// Reemplazar 1 elemento con múltiples:
const expandir = ['inicio', 'medio', 'fin'];
const eliminados = expandir.splice(1, 1, 'paso1', 'paso2', 'paso3');
console.log("Eliminados:", eliminados); // ['medio']
console.log("Expandido:", expandir); // ['inicio', 'paso1', 'paso2', 'paso3', 'fin']

// Reemplazar múltiples con uno solo:
const contraer = ['a', 'b', 'c', 'd', 'e'];
contraer.splice(1, 3, 'X'); // Reemplaza 'b', 'c', 'd' con 'X'
console.log("Contraído:", contraer); // ['a', 'X', 'e']

// Reemplazar elementos por condición:
function reemplazarPorCondicion(array, condicion, nuevoValor) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (condicion(array[i], i)) {
            array.splice(i, 1, nuevoValor);
        }
    }
}

const mixto = [1, 2, 3, 4, 5, 6];
reemplazarPorCondicion(mixto, num => num % 2 === 0, 'PAR');
console.log("Números pares reemplazados:", mixto); // [1, 'PAR', 3, 'PAR', 5, 'PAR']

// Intercambiar elementos usando splice:
function intercambiar(array, indice1, indice2) {
    if (indice1 !== indice2 && 
        indice1 >= 0 && indice1 < array.length &&
        indice2 >= 0 && indice2 < array.length) {
        
        const temp = array[indice1];
        array[indice1] = array[indice2];
        array[indice2] = temp;
    }
}

const ordenar = ['c', 'a', 'b'];
intercambiar(ordenar, 0, 1); // Intercambia 'c' y 'a'
console.log("Después del intercambio:", ordenar); // ['a', 'c', 'b']

// Metodo fill para reemplazar todos los elementos
let numeros = [1, 2, 3, 4, 5];
numeros.fill(0); // Reemplaza todos los elementos con 0
// ANÁLISIS DETALLADO de fill():
// - MUTA el array original
// - Sintaxis: array.fill(valor, inicio?, fin?)
// - Reemplaza con el MISMO VALOR (o referencia)
// - Muy eficiente para reemplazos masivos
// - CUIDADO con objetos: comparte la misma referencia
// - Si inicio/fin se omiten, afecta todo el array
// - Fin es EXCLUSIVO (no incluye esa posición)
console.log(numeros); // [0, 0, 0, 0, 0]

// Reemplazar parte de un array con fill
let letras = ['a', 'b', 'c', 'd', 'e'];
letras.fill('x', 1, 4); // Reemplaza 'b', 'c', 'd' con 'x'
console.log(letras); // ['a', 'x', 'x', 'x', 'e']

// EJEMPLOS AVANZADOS de fill():

// Con índices negativos:
const conNegativos = [1, 2, 3, 4, 5, 6];
conNegativos.fill(99, -3, -1); // Reemplaza los últimos 3 elementos excepto el último
console.log("Con índices negativos:", conNegativos); // [1, 2, 3, 99, 99, 6]

// PELIGRO: fill() con objetos comparte referencias:
const objetosCompartidos = new Array(3).fill({valor: 0});
objetosCompartidos[0].valor = 10;
console.log("Objetos compartidos:", objetosCompartidos); 
// [{valor: 10}, {valor: 10}, {valor: 10}] - ¡Todos cambiaron!

// SOLUCIÓN: Crear objetos únicos:
const objetosUnicos = Array.from({length: 3}, () => ({valor: 0}));
objetosUnicos[0].valor = 10;
console.log("Objetos únicos:", objetosUnicos); 
// [{valor: 10}, {valor: 0}, {valor: 0}] - Solo el primero cambió

// Resetear array a valores por defecto:
function resetearArray(array, valor = null) {
    array.fill(valor);
    return array;
}

const paraResetear = [1, 2, 3, 4, 5];
resetearArray(paraResetear, 0);
console.log("Array reseteado:", paraResetear); // [0, 0, 0, 0, 0]

// Crear patrón con fill:
function crearPatron(longitud, valor1, valor2, tamaño1, tamaño2) {
    const array = new Array(longitud);
    let pos = 0;
    
    while (pos < longitud) {
        array.fill(valor1, pos, Math.min(pos + tamaño1, longitud));
        pos += tamaño1;
        if (pos < longitud) {
            array.fill(valor2, pos, Math.min(pos + tamaño2, longitud));
            pos += tamaño2;
        }
    }
    
    return array;
}

const patron = crearPatron(10, 'A', 'B', 2, 3);
console.log("Patrón creado:", patron); // ['A', 'A', 'B', 'B', 'B', 'A', 'A', 'B', 'B', 'B']

// Reemplazar un elemento específico con findIndex y splice
let animales = ['gato', 'perro', 'pájaro', 'pez'];
let index = animales.findIndex(animal => animal === 'pájaro');
if (index !== -1) {
    animales.splice(index, 1, 'hamster'); // Reemplaza 'pájaro' con 'hamster'
}
// ANÁLISIS DETALLADO de findIndex() + splice():
// - Combina búsqueda condicional con reemplazo
// - findIndex() retorna -1 si no encuentra el elemento
// - SIEMPRE verificar que index !== -1
// - Útil cuando no conoces la posición del elemento
// - Complejidad temporal: O(n) para findIndex + O(n) para splice
// - Más legible que buscar manualmente en bucles
console.log(animales); // ['gato', 'perro', 'hamster', 'pez']

// EJEMPLOS AVANZADOS de búsqueda + reemplazo:

// Reemplazar primer elemento que cumple condición:
function reemplazarPrimero(array, condicion, nuevoValor) {
    const indice = array.findIndex(condicion);
    if (indice !== -1) {
        const valorAnterior = array[indice];
        array[indice] = nuevoValor;
        return valorAnterior;
    }
    return null;
}

const productos = [
    {id: 1, nombre: 'Laptop', precio: 1000},
    {id: 2, nombre: 'Mouse', precio: 25},
    {id: 3, nombre: 'Teclado', precio: 75}
];

const reemplazado = reemplazarPrimero(
    productos, 
    producto => producto.id === 2,
    {id: 2, nombre: 'Mouse Gaming', precio: 50}
);

console.log("Producto reemplazado:", reemplazado);
console.log("Lista actualizada:", productos);

// Reemplazar TODOS los elementos que cumplen condición:
function reemplazarTodos(array, condicion, nuevoValor) {
    const reemplazados = [];
    for (let i = 0; i < array.length; i++) {
        if (condicion(array[i], i)) {
            reemplazados.push(array[i]);
            array[i] = nuevoValor;
        }
    }
    return reemplazados;
}

const calificaciones = [85, 65, 92, 45, 78, 35, 88];
const reprobados = reemplazarTodos(
    calificaciones, 
    nota => nota < 70, 
    'REPROBADO'
);

console.log("Calificaciones reprobadas:", reprobados); // [65, 45, 35]
console.log("Lista actualizada:", calificaciones); 
// [85, 'REPROBADO', 92, 'REPROBADO', 78, 'REPROBADO', 88]

// MÉTODOS INMUTABLES para reemplazo:

// 1. Usando map() para reemplazar por condición:
function reemplazarInmutable(array, condicion, nuevoValor) {
    return array.map(elemento => condicion(elemento) ? nuevoValor : elemento);
}

const original = [1, 2, 3, 4, 5];
const reemplazadoInmutable = reemplazarInmutable(original, num => num % 2 === 0, 'PAR');
console.log("Original:", original); // [1, 2, 3, 4, 5] (sin cambios)
console.log("Reemplazado:", reemplazadoInmutable); // [1, 'PAR', 3, 'PAR', 5]

// 2. Usando slice() + splice() para reemplazo inmutable:
function reemplazarEnIndiceInmutable(array, indice, nuevoValor) {
    if (indice < 0 || indice >= array.length) return array;
    
    const resultado = array.slice(); // Copia el array
    resultado[indice] = nuevoValor;
    return resultado;
}

const inmutable = ['a', 'b', 'c', 'd'];
const nuevoInmutable = reemplazarEnIndiceInmutable(inmutable, 2, 'X');
console.log("Original inmutable:", inmutable); // ['a', 'b', 'c', 'd']
console.log("Nuevo inmutable:", nuevoInmutable); // ['a', 'b', 'X', 'd']

// 3. Usando spread operator para reemplazo inmutable:
function reemplazarConSpread(array, indice, nuevoValor) {
    return [
        ...array.slice(0, indice),
        nuevoValor,
        ...array.slice(indice + 1)
    ];
}

const conSpread = [10, 20, 30, 40];
const nuevoConSpread = reemplazarConSpread(conSpread, 1, 99);
console.log("Original con spread:", conSpread); // [10, 20, 30, 40]
console.log("Nuevo con spread:", nuevoConSpread); // [10, 99, 30, 40]

// FUNCIONES UTILITARIAS avanzadas:

class ArrayReplacer {
    // Reemplazar por índice con validación:
    static replaceAtIndex(array, index, value, mutable = true) {
        if (index < 0 || index >= array.length) {
            throw new Error(`Índice ${index} fuera de rango [0, ${array.length - 1}]`);
        }
        
        if (mutable) {
            const old = array[index];
            array[index] = value;
            return old;
        } else {
            return reemplazarEnIndiceInmutable(array, index, value);
        }
    }
    
    // Reemplazar por valor:
    static replaceByValue(array, oldValue, newValue, mutable = true) {
        const index = array.indexOf(oldValue);
        if (index === -1) return null;
        
        return this.replaceAtIndex(array, index, newValue, mutable);
    }
    
    // Reemplazar múltiples valores:
    static replaceMultiple(array, replacements, mutable = true) {
        const result = mutable ? array : array.slice();
        const replaced = [];
        
        for (const {condition, newValue} of replacements) {
            for (let i = 0; i < result.length; i++) {
                if (condition(result[i], i)) {
                    replaced.push({index: i, oldValue: result[i], newValue});
                    result[i] = newValue;
                }
            }
        }
        
        return {array: result, replaced};
    }
    
    // Reemplazar por patrón:
    static replaceByPattern(array, pattern, replacement, mutable = true) {
        const result = mutable ? array : array.slice();
        const matches = [];
        
        for (let i = 0; i <= result.length - pattern.length; i++) {
            let match = true;
            for (let j = 0; j < pattern.length; j++) {
                if (result[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                matches.push(i);
                result.splice(i, pattern.length, ...replacement);
                i += replacement.length - 1; // Ajustar índice
            }
        }
        
        return {array: result, matches};
    }
}

// Ejemplos de uso de ArrayReplacer:

// Reemplazar por índice:
const test1 = [1, 2, 3, 4, 5];
const oldValue = ArrayReplacer.replaceAtIndex(test1, 2, 99);
console.log("Valor anterior:", oldValue); // 3
console.log("Array modificado:", test1); // [1, 2, 99, 4, 5]

// Reemplazar por valor:
const test2 = ['a', 'b', 'c', 'b', 'd'];
ArrayReplacer.replaceByValue(test2, 'b', 'X'); // Solo reemplaza el primer 'b'
console.log("Reemplazado por valor:", test2); // ['a', 'X', 'c', 'b', 'd']

// Reemplazar múltiples:
const test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = ArrayReplacer.replaceMultiple(test3, [
    {condition: x => x % 2 === 0, newValue: 'PAR'},
    {condition: x => x > 5, newValue: 'GRANDE'}
], false); // Inmutable

console.log("Original test3:", test3); // Sin cambios
console.log("Resultado múltiple:", resultado.array);
console.log("Elementos reemplazados:", resultado.replaced);

// COMPARACIÓN DE RENDIMIENTO:
function compararRendimientoReemplazo() {
    const tamaño = 100000;
    const array1 = Array.from({length: tamaño}, (_, i) => i);
    const array2 = Array.from({length: tamaño}, (_, i) => i);
    const array3 = Array.from({length: tamaño}, (_, i) => i);
    
    console.time("Asignación directa");
    for (let i = 0; i < tamaño; i++) {
        array1[i] = i * 2;
    }
    console.timeEnd("Asignación directa");
    
    console.time("splice() individual");
    for (let i = 0; i < tamaño; i++) {
        array2.splice(i, 1, i * 2);
    }
    console.timeEnd("splice() individual");
    
    console.time("fill() + map()");
    array3.fill(0).map((_, i) => i * 2);
    console.timeEnd("fill() + map()");
}

// CASOS DE USO RECOMENDADOS:

// ✅ Usar asignación directa cuando:
// - Conoces el índice exacto
// - Necesitas máximo rendimiento
// - Reemplazas elementos individuales

// ✅ Usar splice() cuando:
// - Reemplazas múltiples elementos
// - El número de elementos puede cambiar
// - Necesitas los elementos eliminados

// ✅ Usar fill() cuando:
// - Reemplazas con el mismo valor
// - Trabajas con rangos específicos
// - Inicializas arrays grandes

// ✅ Usar findIndex() + splice() cuando:
// - Buscas por contenido, no por posición
// - Trabajas con objetos complejos
// - La legibilidad es importante

// ✅ Usar métodos inmutables cuando:
// - Trabajas con programación funcional
// - Necesitas el array original intacto
// - Tienes múltiples referencias al array
