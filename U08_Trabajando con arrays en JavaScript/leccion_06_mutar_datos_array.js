// Metodos reverse: invierte el orden de los elementos de un array
let array = [1, 2, 3, 4, 5];
console.log(array.reverse()); // [5, 4, 3, 2, 1]
// ANÁLISIS DETALLADO de reverse():
// - MUTA el array original (modifica directamente)
// - Retorna el MISMO array modificado (no una copia)
// - Complejidad temporal: O(n) - debe recorrer todo el array
// - MUY EFICIENTE en memoria (no crea nuevos elementos)
// - Intercambia elementos desde los extremos hacia el centro
// - Funciona con cualquier tipo de datos

// EJEMPLOS ADICIONALES de reverse():

// Verificar que muta el original:
const original = ['a', 'b', 'c', 'd'];
const resultadoReversa = original.reverse();
console.log("Original después de reverse:", original); // ['d', 'c', 'b', 'a']
console.log("Resultado es el mismo objeto:", original === resultadoReversa); // true

// Reverse inmutable (sin mutar el original):
function reverseInmutable(array) {
    return array.slice().reverse(); // slice() crea una copia primero
}

const inmutable = [1, 2, 3, 4];
const invertido = reverseInmutable(inmutable);
console.log("Original inmutable:", inmutable); // [1, 2, 3, 4]
console.log("Invertido:", invertido); // [4, 3, 2, 1]

// Reverse con spread operator (también inmutable):
const conSpread = [10, 20, 30];
const spreadInvertido = [...conSpread].reverse();
console.log("Original con spread:", conSpread); // [10, 20, 30]
console.log("Spread invertido:", spreadInvertido); // [30, 20, 10]

// Implementación manual de reverse:
function reverseManual(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

const manual = [5, 10, 15, 20];
reverseManual(manual);
console.log("Reverse manual:", manual); // [20, 15, 10, 5]

// Método sort: ordena los elementos en el arreglo
/**
 * La función callback debe retornar un valor dependiendo del caso:
 * - Un valor negativo si el primer parámetro es menor que el segundo
 * - Cero si son iguales
 * - Un valor positivo si el primer parámetro es mayor que el segundo
 * Si la función se omite, los elementos se ordenan ascendentemente
 * según el orden de caracteres ASCII.
 */

let array2 = [5, 3, 8, 1, 2];
console.log(array2.sort()); // [1, 2, 3, 5, 8]
// ANÁLISIS DETALLADO de sort():
// - MUTA el array original
// - Sin parámetros: convierte elementos a STRING y ordena por ASCII
// - Complejidad temporal: O(n log n) típicamente
// - Algoritmo de ordenamiento dependiente del motor JavaScript
// - Chrome/V8 usa Timsort (híbrido merge sort + insertion sort)
// - CUIDADO: ordenamiento lexicográfico por defecto

let array3 = ['banana', 'apple', 'cherry'];
console.log(array3.sort()); // ['apple', 'banana', 'cherry']

let array4 = [5, 3, 8, 1, 2];
console.log(array4.sort((a, b) => a - b)); // [1, 2, 3, 5, 8]

let array5 = [5, 3, 8, 1, 2];
console.log(array5.sort((a, b) => b - a)); // [8, 5, 3, 2, 1]

// EJEMPLOS AVANZADOS de sort():

// PROBLEMA común: ordenar números sin función compare:
const problemaNumericos = [10, 2, 1, 20, 100];
console.log("Sin función compare:", problemaNumericos.sort()); 
// ['1', '10', '100', '2', '20'] - ¡Orden lexicográfico!

console.log("Con función compare:", problemaNumericos.sort((a, b) => a - b)); 
// [1, 2, 10, 20, 100] - Orden numérico correcto

// Ordenamiento por múltiples criterios:
const empleados = [
    { nombre: 'Juan', edad: 30, salario: 50000 },
    { nombre: 'Ana', edad: 25, salario: 60000 },
    { nombre: 'Pedro', edad: 30, salario: 45000 },
    { nombre: 'María', edad: 25, salario: 55000 }
];

// Primero por edad, luego por salario descendente:
empleados.sort((a, b) => {
    if (a.edad !== b.edad) {
        return a.edad - b.edad; // Por edad ascendente
    }
    return b.salario - a.salario; // Por salario descendente
});
console.log("Empleados ordenados:", empleados);

// Ordenamiento estable vs inestable:
const conIndices = [
    { valor: 1, indice: 'a' },
    { valor: 2, indice: 'b' },
    { valor: 1, indice: 'c' },
    { valor: 2, indice: 'd' }
];

conIndices.sort((a, b) => a.valor - b.valor);
console.log("Ordenamiento (debería preservar orden original para valores iguales):", conIndices);

// Ordenamiento por strings con consideraciones especiales:
const conAcentos = ['café', 'casa', 'árbol', 'ñandú'];
console.log("Ordenamiento básico:", conAcentos.sort()); // Puede no manejar acentos correctamente

// Ordenamiento con localización:
const conLocale = ['café', 'casa', 'árbol', 'ñandú'];
console.log("Con localización:", conLocale.sort((a, b) => a.localeCompare(b, 'es')));

// Ordenamiento case-insensitive:
const mixedCase = ['Banana', 'apple', 'Cherry', 'date'];
console.log("Case-sensitive:", mixedCase.sort()); // ['Banana', 'Cherry', 'apple', 'date']

const caseInsensitive = ['Banana', 'apple', 'Cherry', 'date'];
console.log("Case-insensitive:", caseInsensitive.sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
)); // ['apple', 'Banana', 'Cherry', 'date']

const categorias = ['categoria3', 'categoria1', 'categoria2', 'categoria3', 'categoria2', 'categoria2', 'categoria1'];
categorias.sort((catA, catB) => {
  if (catA === 'categoria3') {
    return 1;
  } else if (catA === 'categoria1') {
    return -1;
  } else if (catA === 'categoria2' && catB === 'categoria3') {
    return -1;
  } else {
    return 1;
  }
});
// ANÁLISIS del ordenamiento personalizado de categorías:
// - Prioridad: categoria1 > categoria2 > categoria3
// - La lógica podría simplificarse usando un mapa de prioridades
// - Ejemplo de ordenamiento no alfabético/numérico

// VERSIÓN MEJORADA del ordenamiento de categorías:
const categoriasMap = { 'categoria1': 1, 'categoria2': 2, 'categoria3': 3 };
const categorias2 = ['categoria3', 'categoria1', 'categoria2', 'categoria3', 'categoria2'];
categorias2.sort((a, b) => categoriasMap[a] - categoriasMap[b]);
console.log("Categorías ordenadas (mejorada):", categorias2);

// Funciones utilitarias para ordenamiento:
class SortUtils {
    // Ordenamiento numérico:
    static numericAsc = (a, b) => a - b;
    static numericDesc = (a, b) => b - a;
    
    // Ordenamiento de strings:
    static stringAsc = (a, b) => a.localeCompare(b);
    static stringDesc = (a, b) => b.localeCompare(a);
    
    // Ordenamiento por propiedad de objeto:
    static byProperty(property, ascending = true) {
        return (a, b) => {
            const valorA = a[property];
            const valorB = b[property];
            
            if (typeof valorA === 'string') {
                return ascending ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
            }
            return ascending ? valorA - valorB : valorB - valorA;
        };
    }
    
    // Ordenamiento por múltiples criterios:
    static multiCriteria(...criteria) {
        return (a, b) => {
            for (const criterion of criteria) {
                const result = criterion(a, b);
                if (result !== 0) return result;
            }
            return 0;
        };
    }
}

// Ejemplos de uso de SortUtils:
const productos = [
    { nombre: 'Laptop', precio: 1000, categoria: 'electrónicos' },
    { nombre: 'Mouse', precio: 25, categoria: 'electrónicos' },
    { nombre: 'Libro', precio: 15, categoria: 'educación' },
    { nombre: 'Auriculares', precio: 75, categoria: 'electrónicos' }
];

// Ordenar por precio:
productos.sort(SortUtils.byProperty('precio'));
console.log("Por precio:", productos);

// Ordenar por categoría y luego por precio:
productos.sort(SortUtils.multiCriteria(
    SortUtils.byProperty('categoria'),
    SortUtils.byProperty('precio', false) // Precio descendente
));
console.log("Por categoría y precio:", productos);

// Sort inmutable:
function sortInmutable(array, compareFunction) {
    return array.slice().sort(compareFunction);
}

const paraOrdenar = [3, 1, 4, 1, 5, 9, 2, 6];
const ordenado = sortInmutable(paraOrdenar, (a, b) => a - b);
console.log("Original para ordenar:", paraOrdenar); // [3, 1, 4, 1, 5, 9, 2, 6]
console.log("Ordenado inmutable:", ordenado); // [1, 1, 2, 3, 4, 5, 6, 9]

//Metodo Map: crea un nuevo array con los resultados de la llamada a la función proporcionada aplicada a cada elemento del array
let numeros = [1, 2, 3, 4, 5];
let numerosDoblados = numeros.map(num => num * 2);
// ANÁLISIS DETALLADO de map():
// - NO MUTA el array original (INMUTABLE)
// - Retorna un NUEVO array de la MISMA longitud
// - Aplica la función a CADA elemento
// - Callback recibe (elemento, índice, arrayCompleto)
// - Si no retornas nada, el elemento será undefined
// - Complejidad temporal: O(n)
// - Ideal para TRANSFORMACIONES de datos
console.log(numerosDoblados); // [2, 4, 6, 8, 10]

const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 20 }
];
const nombres = personas.map(persona => persona.nombre.toUpperCase());
console.log(nombres); // ['JUAN', 'ANA', 'PEDRO']

// EJEMPLOS AVANZADOS de map():

// Con todos los parámetros del callback:
const conIndicesDetallados = ['a', 'b', 'c'];
const resultado = conIndicesDetallados.map((elemento, indice, arrayCompleto) => {
    return `${elemento}-${indice} de ${arrayCompleto.length}`;
});
console.log("Con detalles:", resultado); // ['a-0 de 3', 'b-1 de 3', 'c-2 de 3']

// Transformaciones complejas:
const ventas = [
    { producto: 'Laptop', cantidad: 2, precio: 1000 },
    { producto: 'Mouse', cantidad: 5, precio: 25 },
    { producto: 'Teclado', cantidad: 3, precio: 75 }
];

const ventasConTotal = ventas.map(venta => ({
    ...venta, // Spread del objeto original
    total: venta.cantidad * venta.precio,
    fechaVenta: new Date().toISOString()
}));
console.log("Ventas con total:", ventasConTotal);

// CUIDADO: map() siempre retorna array de la misma longitud:
const conElementosVacios = [1, 2, 3, 4, 5];
const filtradoIncorrecto = conElementosVacios.map(num => {
    if (num % 2 === 0) {
        return num * 2;
    }
    // No retorna nada para números impares = undefined
});
console.log("Filtrado incorrecto con map:", filtradoIncorrecto); 
// [undefined, 4, undefined, 8, undefined]

// CORRECTO: usar filter() seguido de map():
const filtradoCorrecto = conElementosVacios
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
console.log("Filtrado correcto:", filtradoCorrecto); // [4, 8]

// Convertir tipos de datos:
const stringNumbers = ['1', '2', '3', '4', '5'];
const actualNumbers = stringNumbers.map(Number); // Equivale a map(str => Number(str))
console.log("Convertidos a números:", actualNumbers); // [1, 2, 3, 4, 5]

// Extraer propiedades específicas:
const usuarios = [
    { id: 1, nombre: 'Juan', email: 'juan@email.com', activo: true },
    { id: 2, nombre: 'Ana', email: 'ana@email.com', activo: false },
    { id: 3, nombre: 'Pedro', email: 'pedro@email.com', activo: true }
];

const resumenUsuarios = usuarios.map(({ id, nombre, activo }) => ({
    id,
    nombre,
    activo,
    estado: activo ? 'Activo' : 'Inactivo'
}));
console.log("Resumen usuarios:", resumenUsuarios);

// Encadenar transformaciones:
const datos = [1, 2, 3, 4, 5];
const procesados = datos
    .map(x => x * 2)           // [2, 4, 6, 8, 10]
    .map(x => x + 1)           // [3, 5, 7, 9, 11]
    .map(x => `número: ${x}`); // ['número: 3', 'número: 5', ...]
console.log("Procesados en cadena:", procesados);

// map() con async/await (requiere Promise.all):
const urls = ['url1', 'url2', 'url3'];

// INCORRECTO (retorna array de Promises):
// const responses = urls.map(async url => await fetch(url));

// CORRECTO:
async function procesarUrls(urls) {
    const promises = urls.map(url => 
        // Simulamos una llamada async
        new Promise(resolve => 
            setTimeout(() => resolve(`Datos de ${url}`), 100)
        )
    );
    return await Promise.all(promises);
}

// Uso:
// const resultados = await procesarUrls(urls);

// Comparación de rendimiento map() vs for:
function compararRendimientoMap() {
    const tamaño = 1000000;
    const array = Array.from({length: tamaño}, (_, i) => i);
    
    console.time("map()");
    const resultadoMap = array.map(x => x * 2);
    console.timeEnd("map()");
    
    console.time("for loop");
    const resultadoFor = [];
    for (let i = 0; i < array.length; i++) {
        resultadoFor[i] = array[i] * 2;
    }
    console.timeEnd("for loop");
    
    console.time("for...of");
    const resultadoForOf = [];
    for (const item of array) {
        resultadoForOf.push(item * 2);
    }
    console.timeEnd("for...of");
}

// CASOS DE USO RECOMENDADOS:

// ✅ Usar reverse() cuando:
// - Necesitas invertir el orden definitivamente
// - El array no se usa en otro lugar
// - La mutación no es problemática

// ✅ Usar sort() cuando:
// - Necesitas ordenar datos permanentemente
// - Trabajas con arrays que no se usan en otro lugar
// - La mutación es aceptable

// ✅ Usar map() cuando:
// - Transformas cada elemento del array
// - Necesitas un array de la misma longitud
// - Prefieres programación funcional inmutable

// ❌ EVITAR cuando:
// - reverse()/sort(): Necesitas el array original intacto
// - map(): Solo quieres filtrar elementos (usar filter())
// - map(): Solo quieres efectos secundarios (usar forEach())

// FUNCIONES UTILITARIAS combinadas:
class ArrayProcessor {
    static transform(array, operations) {
        let result = array.slice(); // Copia para no mutar original
        
        for (const operation of operations) {
            switch (operation.type) {
                case 'reverse':
                    result = result.reverse();
                    break;
                case 'sort':
                    result = result.sort(operation.compareFn);
                    break;
                case 'map':
                    result = result.map(operation.mapFn);
                    break;
                case 'filter':
                    result = result.filter(operation.filterFn);
                    break;
            }
        }
        
        return result;
    }
}

// Ejemplo de uso:
const datosOriginales = [3, 1, 4, 1, 5, 9, 2, 6];
const procesado = ArrayProcessor.transform(datosOriginales, [
    { type: 'filter', filterFn: x => x > 2 },
    { type: 'sort', compareFn: (a, b) => a - b },
    { type: 'map', mapFn: x => x * 10 },
    { type: 'reverse' }
]);

console.log("Original:", datosOriginales); // [3, 1, 4, 1, 5, 9, 2, 6]
console.log("Procesado:", procesado); // [90, 60, 50, 40, 30] (filtrado > 2, ordenado, *10, invertido)