//Se puede agregar elementos a un array de varias maneras en JavaScript.

// 1. Usando el método push() - Agrega uno o más elementos al final del array
const numeros = [1, 2, 3];
numeros.push(4, 5); // Agrega 4 y 5 al final
// ANÁLISIS DETALLADO de push():
// - MUTA el array original (modifica directamente)
// - Retorna la NUEVA longitud del array
// - Puede agregar múltiples elementos a la vez
// - Es el método MÁS EFICIENTE para agregar al final
// - Complejidad temporal: O(1) - tiempo constante
// - Equivale a: numeros[numeros.length] = elemento
console.log("Después de push:", numeros); // Salida: [1, 2, 3, 4, 5]

// EJEMPLOS ADICIONALES de push():
const frutas = ['manzana'];
const nuevaLongitud = frutas.push('banana', 'pera', 'uva');
console.log("Nueva longitud:", nuevaLongitud); // 4
console.log("Frutas:", frutas); // ['manzana', 'banana', 'pera', 'uva']

// push() con spread (agregar array completo):
const masNumerosParaPush = [11, 12, 13];
numeros.push(...masNumerosParaPush);
console.log("Después de push con spread:", numeros); // [1, 2, 3, 4, 5, 11, 12, 13]

// 2. Usando el método unshift() - Agrega uno o más elementos al inicio del array
numeros.unshift(0); // Agrega 0 al inicio
// ANÁLISIS DETALLADO de unshift():
// - MUTA el array original
// - Retorna la NUEVA longitud del array
// - MENOS EFICIENTE que push() porque debe reasignar índices
// - Complejidad temporal: O(n) - debe mover todos los elementos
// - Puede agregar múltiples elementos al inicio
// - Los elementos se agregan en el ORDEN especificado
console.log("Después de unshift:", numeros); // Salida: [0, 1, 2, 3, 4, 5, 11, 12, 13] 

// EJEMPLOS ADICIONALES de unshift():
const colores = ['rojo'];
const nuevaLongitudColores = colores.unshift('azul', 'verde');
console.log("Nueva longitud colores:", nuevaLongitudColores); // 3
console.log("Colores:", colores); // ['azul', 'verde', 'rojo']

// unshift() vs asignación manual:
const manual = [2, 3, 4];
manual.splice(0, 0, 1); // Alternativa más explícita
console.log("Manual con splice:", manual); // [1, 2, 3, 4]

// 3. Usando el método splice() - Agrega elementos en una posición específica
numeros.splice(2, 0, 1.5); // En la posición 2, agrega 1.5 sin eliminar nada
// ANÁLISIS DETALLADO de splice():
// - MUTA el array original
// - Parámetros: splice(inicio, cantidadAEliminar, elemento1, elemento2, ...)
// - Retorna un array con los elementos ELIMINADOS
// - Si cantidadAEliminar = 0, solo INSERTA elementos
// - Puede INSERTAR, ELIMINAR y REEMPLAZAR simultáneamente
// - Complejidad temporal: O(n) - puede necesitar mover elementos
console.log("Después de splice:", numeros); // Salida: [0, 1, 1.5, 2, 3, 4, 5, 11, 12, 13]

// EJEMPLOS ADICIONALES de splice():

// Insertar múltiples elementos en posición específica:
const letras = ['a', 'c', 'e'];
const elementosEliminados = letras.splice(1, 0, 'b'); // Inserta 'b' en posición 1
console.log("Elementos eliminados:", elementosEliminados); // [] (ninguno)
console.log("Letras después de insertar:", letras); // ['a', 'b', 'c', 'e']

// Reemplazar elementos:
letras.splice(3, 1, 'd', 'e'); // En posición 3, elimina 1 elemento y agrega 'd', 'e'
console.log("Letras después de reemplazar:", letras); // ['a', 'b', 'c', 'd', 'e']

// Insertar al final usando splice:
letras.splice(letras.length, 0, 'f');
console.log("Letras con f al final:", letras); // ['a', 'b', 'c', 'd', 'e', 'f']

// 4. Usando el operador spread (...) - Crea un nuevo array con elementos adicionales
const masNumeros = [...numeros, 6, 7]; // Crea un nuevo array con los elementos de 'numeros' más 6 y 7
// ANÁLISIS DETALLADO del operador spread:
// - NO MUTA el array original (INMUTABLE)
// - Crea un NUEVO array en memoria
// - Sintaxis ES6+ (requiere transpilación en entornos antiguos)
// - Permite combinar arrays y elementos individuales flexiblemente
// - Más LEGIBLE que concat() para operaciones complejas
// - Ligeramente menos eficiente que push() para arrays muy grandes
console.log("Nuevo array con spread:", masNumeros); // Salida: [0, 1, 1.5, 2, 3, 4, 5, 11, 12, 13, 6, 7]

// EJEMPLOS AVANZADOS del operador spread:

// Combinar múltiples arrays:
const inicio = [1, 2];
const medio = [3, 4];
const final = [5, 6];
const combinadoComplejo = [...inicio, 'separador', ...medio, ...final];
console.log("Combinado complejo:", combinadoComplejo); // [1, 2, 'separador', 3, 4, 5, 6]

// Insertar en el medio:
const base = [1, 4];
const conInsercionMedio = [...base.slice(0, 1), 2, 3, ...base.slice(1)];
console.log("Con inserción en medio:", conInsercionMedio); // [1, 2, 3, 4]

// Clonar y agregar:
const original = [1, 2, 3];
const clonMasElementos = [...original, 4, 5];
console.log("Original:", original); // [1, 2, 3] (sin cambios)
console.log("Clon + elementos:", clonMasElementos); // [1, 2, 3, 4, 5]

// 5. Usando el método concat() - Combina dos o más arrays
const otrosNumeros = [8, 9];
const numerosCombinados = numeros.concat(otrosNumeros); // Combina 'numeros' con 'otrosNumeros'
// ANÁLISIS DETALLADO de concat():
// - NO MUTA los arrays originales (INMUTABLE)
// - Retorna un NUEVO array con los elementos combinados
// - Puede aceptar múltiples arrays como argumentos
// - También acepta elementos individuales
// - Amplia compatibilidad (pre-ES6)
// - Hace copia superficial (shallow copy) de los elementos
console.log("Array combinado con concat:", numerosCombinados); // Salida: [0, 1, 1.5, 2, 3, 4, 5, 11, 12, 13, 8, 9] 

// EJEMPLOS ADICIONALES de concat():

// Múltiples arrays y elementos:
const a = [1, 2];
const b = [3, 4];
const c = [5, 6];
const resultado = a.concat(b, c, 7, 8);
console.log("Concat múltiple:", resultado); // [1, 2, 3, 4, 5, 6, 7, 8]

// concat() vs spread para compatibilidad:
const metodoAntiguo = [].concat(a, b, c);
const metodoModerno = [...a, ...b, ...c];
console.log("Método antiguo:", metodoAntiguo); // [1, 2, 3, 4, 5, 6]
console.log("Método moderno:", metodoModerno); // [1, 2, 3, 4, 5, 6]

// Aplastando arrays anidados (shallow):
const anidado = [1, [2, 3], 4];
const aplanado = [].concat(...anidado);
console.log("Aplanado 1 nivel:", aplanado); // [1, 2, 3, 4]

// 6. Usando el método length - Asignación directa para agregar un elemento al final
numeros[numeros.length] = 10; // Asigna 10 al final del array
// ANÁLISIS DETALLADO de asignación por índice:
// - MUTA el array original
// - MUY EFICIENTE (similar a push())
// - Permite crear "huecos" si usas índices no consecutivos
// - No retorna la nueva longitud (a diferencia de push())
// - Útil cuando ya tienes la longitud calculada
// - Puede crear arrays sparse si saltas índices
console.log("Después de asignación a length:", numeros); // Salida: [0, 1, 1.5, 2, 3, 4, 5, 11, 12, 13, 10]

// EJEMPLOS y CUIDADOS con asignación directa:

// Asignación normal:
const directa = [1, 2, 3];
directa[directa.length] = 4;
console.log("Asignación directa:", directa); // [1, 2, 3, 4]

// PELIGRO: Crear arrays sparse:
directa[10] = 'salto';
console.log("Array sparse:", directa); // [1, 2, 3, 4, empty × 6, 'salto']
console.log("Longitud sparse:", directa.length); // 11

// Verificar elementos vacíos:
console.log("Elemento vacío:", directa[5]); // undefined
console.log("Tiene propiedad 5:", directa.hasOwnProperty(5)); // false

// 7. Usando el método fill() - Rellena un array con un valor específico
const arrayRelleno = new Array(5).fill(42); // Crea un array de 5 elementos, todos con el valor 42
// ANÁLISIS DETALLADO de fill():
// - MUTA el array original (si se aplica a array existente)
// - Muy útil para INICIALIZACIÓN de arrays
// - Parámetros: fill(valor, inicio?, fin?)
// - Rellena con la MISMA REFERENCIA (cuidado con objetos)
// - Eficiente para crear arrays de valores por defecto
// - Puede rellenar solo una PORCIÓN del array
console.log("Array relleno:", arrayRelleno); // Salida: [42, 42, 42, 42, 42]

// EJEMPLOS AVANZADOS de fill():

// Rellenar porción específica:
const parcial = [1, 2, 3, 4, 5];
parcial.fill(0, 1, 3); // Rellena con 0 desde índice 1 hasta 3 (exclusivo)
console.log("Relleno parcial:", parcial); // [1, 0, 0, 4, 5]

// CUIDADO con objetos (referencia compartida):
const conObjetos = new Array(3).fill({valor: 0});
conObjetos[0].valor = 10;
console.log("Objetos compartidos:", conObjetos); // [{valor: 10}, {valor: 10}, {valor: 10}]

// SOLUCIÓN: Crear objetos únicos:
const objetosUnicos = Array.from({length: 3}, () => ({valor: 0}));
objetosUnicos[0].valor = 10;
console.log("Objetos únicos:", objetosUnicos); // [{valor: 10}, {valor: 0}, {valor: 0}]

// Casos de uso prácticos:
const matriz = Array.from({length: 3}, () => new Array(3).fill(0));
console.log("Matriz 3x3:", matriz); // [[0,0,0], [0,0,0], [0,0,0]]

// 8. Usando el método from() - Crea un array a partir de un iterable
const iterable = 'Hola';
const arrayDesdeIterable = Array.from(iterable); // Convierte el string en un array de caracteres
// ANÁLISIS DETALLADO de Array.from():
// - Método ESTÁTICO de Array (no es método de instancia)
// - NO muta nada (crea array completamente nuevo)
// - Primer parámetro: objeto iterable o array-like
// - Segundo parámetro OPCIONAL: función de mapeo
// - Tercer parámetro OPCIONAL: valor de 'this' para la función
// - MUY VERSÁTIL para conversiones y generación de datos
console.log("Array desde iterable:", arrayDesdeIterable); // Salida: ['H', 'o', 'l', 'a']

// EJEMPLOS AVANZADOS de Array.from():

// Con función de mapeo:
const numerosDesdeString = Array.from('12345', Number);
console.log("Números desde string:", numerosDesdeString); // [1, 2, 3, 4, 5]

// Generar secuencias:
const secuencia = Array.from({length: 5}, (_, i) => i * 2);
console.log("Secuencia de pares:", secuencia); // [0, 2, 4, 6, 8]

// Desde Set (elimina duplicados):
const setConDuplicados = new Set([1, 2, 2, 3, 3, 3]);
const sinDuplicados = Array.from(setConDuplicados);
console.log("Sin duplicados:", sinDuplicados); // [1, 2, 3]

// Desde NodeList (en el navegador):
// const elementos = document.querySelectorAll('div');
// const arrayElementos = Array.from(elementos);

// Desde Map:
const mapa = new Map([['a', 1], ['b', 2]]);
const arrayDesdeMapa = Array.from(mapa);
console.log("Desde Map:", arrayDesdeMapa); // [['a', 1], ['b', 2]]

// COMPARACIÓN DE RENDIMIENTO:
function compararRendimiento() {
    const tamaño = 100000;
    const array = new Array(tamaño);
    
    console.time('push()');
    for (let i = 0; i < tamaño; i++) {
        array.push(i);
    }
    console.timeEnd('push()');
    
    console.time('asignación directa');
    const array2 = [];
    for (let i = 0; i < tamaño; i++) {
        array2[i] = i;
    }
    console.timeEnd('asignación directa');
    
    console.time('Array.from()');
    const array3 = Array.from({length: tamaño}, (_, i) => i);
    console.timeEnd('Array.from()');
}

// CASOS DE USO RECOMENDADOS:

// ✅ Usar push() cuando:
// - Agregas elementos frecuentemente al final
// - El rendimiento es crítico
// - Trabajas con arrays que crecen dinámicamente

// ✅ Usar unshift() cuando:
// - Necesitas agregar al inicio (menos común)
// - Implementas estructuras como pilas o colas

// ✅ Usar splice() cuando:
// - Necesitas insertar en posición específica
// - Quieres combinar inserción/eliminación
// - Necesitas máximo control sobre la operación

// ✅ Usar spread (...) cuando:
// - Prefieres inmutabilidad
// - Combinas múltiples arrays/elementos
// - El código debe ser funcional/declarativo

// ✅ Usar concat() cuando:
// - Necesitas compatibilidad con navegadores antiguos
// - Combinas arrays de forma simple
// - Quieres evitar mutación

// ✅ Usar asignación directa cuando:
// - Tienes control total del índice
// - Necesitas máximo rendimiento
// - Implementas algoritmos específicos

// ✅ Usar fill() cuando:
// - Inicializas arrays con valores por defecto
// - Necesitas resetear porciones de un array
// - Creas estructuras de datos como matrices

// ✅ Usar Array.from() cuando:
// - Conviertes iterables a arrays
// - Generas secuencias de datos
// - Necesitas mapear durante la creación

// FUNCIONES UTILITARIAS combinando métodos:
function agregarElementos(array, elementos, posicion = 'final') {
    switch (posicion) {
        case 'inicio':
            return [elementos].flat().concat(array);
        case 'final':
            return array.concat([elementos].flat());
        case 'medio':
            const mitad = Math.floor(array.length / 2);
            return [...array.slice(0, mitad), ...([elementos].flat()), ...array.slice(mitad)];
        default:
            if (typeof posicion === 'number') {
                const resultado = [...array];
                resultado.splice(posicion, 0, ...([elementos].flat()));
                return resultado;
            }
            return array;
    }
}

// Ejemplos de uso:
const base1 = [1, 2, 3, 4, 5];
console.log("Al inicio:", agregarElementos(base1, [0], 'inicio'));
console.log("Al final:", agregarElementos(base1, [6, 7], 'final'));
console.log("En el medio:", agregarElementos(base1, [2.5], 'medio'));
console.log("En posición 2:", agregarElementos(base1, [1.5], 2));
