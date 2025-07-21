//Para buscar datos en un array, podemos usar diferentes métodos.
// `find` devuelve el primer elemento que cumple con la condición dada.
// `findIndex` devuelve el índice del primer elemento que cumple con la condición.
// `filter` devuelve un nuevo array con todos los elementos que cumplen con la condición.
// `includes` verifica si un elemento está presente en el array.
// `indexOf` devuelve el índice del primer elemento encontrado, o -1 si no se encuentra.
// `lastIndexOf` devuelve el índice del último elemento encontrado, o -1 si no se encuentra.
// `some` verifica si al menos un elemento cumple con la condición.
// `every` verifica si todos los elementos cumplen con la condición.
// Entre otros métodos, `find` y `filter` son los más comunes para buscar datos en un array.

const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 35 },
    { nombre: 'María', edad: 28 },
    { nombre: 'Luis', edad: 22 },
    { nombre: 'Ana', edad: 25 }
];

let frutas = ['manzana', 'banana', 'naranja', 'kiwi', 'uva', 'banana'];

// Métodos indexOf y lastIndexOf: retorna el primer o el último índice 
// que coincida con la búsqueda
// retorna -1 si no se encuentra el elemento
const indiceManzana = frutas.indexOf('manzana');
console.log("Índice de 'manzana':", indiceManzana); // 0

const indiceAna = personas.indexOf({ nombre: 'Ana', edad: 25 });
console.log("Índice de { nombre: 'Ana', edad: 25 }:", indiceAna); // -1 (no se encuentra porque es un objeto nuevo) 

//Para buscar un elemento en el arrya con indexOf, usamos el valor directamente
const indiceAnaDirecto = personas.indexOf(personas[1]);
console.log("Índice de Ana directamente:", indiceAnaDirecto); // 1 (porque es el mismo objeto en memoria)

const indiceBanana = frutas.indexOf('banana');
console.log("Índice de 'banana':", indiceBanana); // 1

const indiceNaranja = frutas.indexOf('naranja');
console.log("Índice de 'naranja':", indiceNaranja); // 2

const indiceKiwi = frutas.indexOf('kiwi');
console.log("Índice de 'kiwi':", indiceKiwi); // 3

const indiceUva = frutas.indexOf('uva');
console.log("Índice de 'uva':", indiceUva); // 4

const indiceBananaUltimo = frutas.lastIndexOf('banana');
console.log("Último índice de 'banana':", indiceBananaUltimo); // 5

const indicePera = frutas.indexOf('pera');
console.log("Índice de 'pera':", indicePera); // -1 (no se encuentra)

// Método includes: verifica si un elemento está presente en el array
const tieneManzana = frutas.includes('manzana');
console.log("¿Frutas incluye 'manzana'?:", tieneManzana); // true

const tienePera = frutas.includes('pera');
console.log("¿Frutas incluye 'pera'?:", tienePera); // false

const tieneAna = personas.includes({ nombre: 'Ana', edad: 25 });
console.log("¿Personas incluye { nombre: 'Ana', edad: 25 }?:", tieneAna); // false (no se encuentra porque es un objeto nuevo)  

const tieneAnaDirecto = personas.includes(personas[1]);
console.log("¿Personas incluye Ana directamente?:", tieneAnaDirecto); // true (porque es el mismo objeto en memoria)


// Método find: devuelve el primer elemento que cumple con la condición
const personaEncontrada = personas.find(p => p.nombre === 'Ana');
console.log("Persona encontrada (nombre 'Ana'):", personaEncontrada); // { nombre: 'Ana', edad: 25 }
const personaMenorDe30 = personas.find(p => p.edad < 30);
console.log("Primera persona menor de 30 años:", personaMenorDe30); // { nombre: 'Ana', edad: 25 }
const frutaEncontrada = frutas.find(f => f.startsWith('n'));
console.log("Fruta encontrada (empieza con 'n'):", frutaEncontrada); // 'naranja'
const frutaNoEncontrada = frutas.find(f => f.startsWith('x'));
console.log("Fruta no encontrada (empieza con 'x'):", frutaNoEncontrada); // undefined

//Método findIndex: devuelve el índice del primer elemento que cumple con la condición
const indicePersonaAna = personas.findIndex(p => p.nombre === 'Ana');
// ANÁLISIS DETALLADO de findIndex():
// - NO MUTA el array original (inmutable)
// - Retorna el ÍNDICE del primer elemento que cumple la condición
// - Retorna -1 si NINGÚN elemento cumple la condición
// - Complejidad temporal: O(n) en el peor caso
// - Se detiene en la PRIMERA coincidencia
// - Callback recibe (elemento, índice, arrayCompleto)
// - Ideal cuando necesitas la POSICIÓN, no el elemento
console.log("Índice de la primera persona con nombre 'Ana':", indicePersonaAna); // 1

const indicePersonaMenorDe30 = personas.findIndex(p => p.edad < 30);
console.log("Índice de la primera persona menor de 30 años:", indicePersonaMenorDe30); // 1

const indiceFrutaNaranja = frutas.findIndex(f => f.startsWith('n'));
console.log("Índice de la primera fruta que empieza con 'n':", indiceFrutaNaranja); // 2

// EJEMPLOS ADICIONALES de findIndex():

// Con todos los parámetros del callback:
const indiceConDetalles = personas.findIndex((persona, indice, arrayCompleto) => {
    console.log(`Evaluando persona ${indice}: ${persona.nombre} (total: ${arrayCompleto.length})`);
    return persona.edad > 30;
});
console.log("Índice de primera persona > 30:", indiceConDetalles); // 2 (Pedro)

// Cuando no encuentra nada:
const indiceNoEncontrado = personas.findIndex(p => p.edad > 100);
console.log("Índice de persona > 100 años:", indiceNoEncontrado); // -1

// Buscar en arrays de primitivos:
const numeros = [10, 20, 30, 40, 50];
const indicePrimerPar = numeros.findIndex(num => num % 2 === 0 && num > 15);
console.log("Índice del primer par > 15:", indicePrimerPar); // 1 (20)

// Buscar objetos por múltiples criterios:
const productos = [
    { nombre: 'Laptop', precio: 1000, disponible: true },
    { nombre: 'Mouse', precio: 25, disponible: false },
    { nombre: 'Teclado', precio: 75, disponible: true },
    { nombre: 'Monitor', precio: 300, disponible: true }
];

const indiceProductoBaratoDisponible = productos.findIndex(p => 
    p.precio < 100 && p.disponible
);
console.log("Índice de producto barato disponible:", indiceProductoBaratoDisponible); // 2 (Teclado)

// Diferencia entre findIndex() e indexOf():
const colores = ['rojo', 'verde', 'azul', 'verde'];

// indexOf busca valor exacto:
const indiceVerde1 = colores.indexOf('verde');
console.log("indexOf 'verde':", indiceVerde1); // 1

// findIndex permite condiciones complejas:
const indiceVerde2 = colores.findIndex(color => color === 'verde');
console.log("findIndex 'verde':", indiceVerde2); // 1 (mismo resultado)

// Pero findIndex es más flexible:
const indiceLargo = colores.findIndex(color => color.length > 4);
console.log("Primer color con más de 4 letras:", indiceLargo); // 1 ('verde')

// Método filter: devuelve un nuevo array con todos los elementos que cumplen con la condición
const personasFiltradas = personas.filter(p => p.edad < 30);
// ANÁLISIS DETALLADO de filter():
// - NO MUTA el array original (INMUTABLE)
// - Retorna un NUEVO ARRAY con elementos que cumplen la condición
// - Si NO hay coincidencias, retorna array VACÍO []
// - Complejidad temporal: O(n) - siempre recorre todo el array
// - NO se detiene en la primera coincidencia (a diferencia de find/findIndex)
// - Callback recibe (elemento, índice, arrayCompleto)
// - Ideal para obtener MÚLTIPLES elementos
console.log("Personas filtradas (edad < 30):", personasFiltradas);
// [{ nombre: 'Ana', edad: 25 }, { nombre: 'María', edad: 28 }, { nombre: 'Luis', edad: 22 }, { nombre: 'Ana', edad: 25 }]

const frutasFiltradas = frutas.filter(f => f.startsWith('b'));
console.log("Frutas filtradas (empiezan con 'b'):", frutasFiltradas);
// ['banana', 'banana']

// EJEMPLOS AVANZADOS de filter():

// Filtrar con índice (remover duplicados):
const sinDuplicados = personas.filter((persona, indice, array) => 
    array.findIndex(p => p.nombre === persona.nombre) === indice
);
console.log("Sin duplicados:", sinDuplicados);

// Filtrar por múltiples condiciones:
const filtroComplejo = personas.filter(p => 
    p.edad >= 25 && p.edad <= 30 && p.nombre.length <= 4
);
console.log("Filtro complejo (edad 25-30 y nombre <= 4 letras):", filtroComplejo);

// Filtrar objetos anidados:
const empleados = [
    { nombre: 'Juan', departamento: { nombre: 'IT', presupuesto: 50000 } },
    { nombre: 'Ana', departamento: { nombre: 'HR', presupuesto: 30000 } },
    { nombre: 'Pedro', departamento: { nombre: 'IT', presupuesto: 50000 } }
];

const empleadosIT = empleados.filter(emp => emp.departamento.nombre === 'IT');
console.log("Empleados de IT:", empleadosIT);

// Filtrar por fechas:
const eventos = [
    { nombre: 'Evento A', fecha: new Date('2024-01-15') },
    { nombre: 'Evento B', fecha: new Date('2024-06-20') },
    { nombre: 'Evento C', fecha: new Date('2024-12-10') }
];

const eventosDelAño = eventos.filter(evento => 
    evento.fecha.getFullYear() === 2024
);
console.log("Eventos de 2024:", eventosDelAño);

// Filtrar con búsqueda de texto:
const libros = [
    { titulo: 'JavaScript: The Good Parts', autor: 'Douglas Crockford' },
    { titulo: 'Clean Code', autor: 'Robert Martin' },
    { titulo: 'JavaScript Patterns', autor: 'Stoyan Stefanov' }
];

function buscarLibros(termino) {
    const terminoLower = termino.toLowerCase();
    return libros.filter(libro => 
        libro.titulo.toLowerCase().includes(terminoLower) ||
        libro.autor.toLowerCase().includes(terminoLower)
    );
}

const resultadosBusqueda = buscarLibros('javascript');
console.log("Libros con 'javascript':", resultadosBusqueda);

// Encadenar filter con otros métodos:
const numerosComplejos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = numerosComplejos
    .filter(n => n % 2 === 0)     // Solo pares: [2, 4, 6, 8, 10]
    .filter(n => n > 5)           // Mayores que 5: [6, 8, 10]
    .map(n => n * 2)              // Multiplicar por 2: [12, 16, 20]
    .reduce((sum, n) => sum + n, 0); // Sumar todo: 48
console.log("Resultado encadenado:", resultado);

// Utilizando un loop for para buscar un elemento
let encontrado = false;
for (let i = 0; i < personas.length; i++) {
    if (personas[i].nombre === 'Ana') {
        console.log("Encontrada con loop for:", personas[i]); // { nombre: 'Ana', edad: 25 }
        encontrado = true;
        break; // Salimos del loop una vez encontrado
    }
}
if (!encontrado) {
    console.log("No se encontró a Ana con loop for");
}

// ANÁLISIS DETALLADO del bucle for tradicional:
// - Control TOTAL sobre la iteración
// - Puedes usar break/continue para control de flujo
// - MÁS EFICIENTE en memoria (no crea funciones callback)
// - Menos legible que métodos funcionales
// - Útil para lógica compleja o cuando necesitas el índice frecuentemente
// - Permite múltiples operaciones en la misma iteración

// EJEMPLOS ADICIONALES de bucles tradicionales:

// Buscar múltiples elementos con for:
function buscarTodosConFor(array, condicion) {
    const resultados = [];
    for (let i = 0; i < array.length; i++) {
        if (condicion(array[i], i)) {
            resultados.push({
                elemento: array[i],
                indice: i
            });
        }
    }
    return resultados;
}

const todasLasAnas = buscarTodosConFor(personas, p => p.nombre === 'Ana');
console.log("Todas las Anas con for:", todasLasAnas);

// Buscar con múltiples condiciones y early exit:
function buscarConCondicionesComplejas(array) {
    for (let i = 0; i < array.length; i++) {
        const persona = array[i];
        
        // Múltiples verificaciones:
        if (persona.edad > 25) {
            if (persona.nombre.startsWith('P')) {
                console.log(`Encontrada persona especial: ${persona.nombre}`);
                return { elemento: persona, indice: i };
            }
        }
        
        // Logging condicional:
        if (i % 2 === 0) {
            console.log(`Revisando posición par ${i}: ${persona.nombre}`);
        }
    }
    return null;
}

const personaEspecial = buscarConCondicionesComplejas(personas);
console.log("Persona especial encontrada:", personaEspecial);

// Comparación de rendimiento:
function compararRendimientoBusqueda() {
    const arrayGrande = Array.from({length: 100000}, (_, i) => ({
        id: i,
        nombre: `Persona${i}`,
        edad: Math.floor(Math.random() * 80) + 18
    }));
    
    console.time("for loop");
    let encontradoFor = null;
    for (let i = 0; i < arrayGrande.length; i++) {
        if (arrayGrande[i].edad > 70) {
            encontradoFor = arrayGrande[i];
            break;
        }
    }
    console.timeEnd("for loop");
    
    console.time("find()");
    const encontradoFind = arrayGrande.find(p => p.edad > 70);
    console.timeEnd("find()");
    
    console.time("filter()");
    const todosEncontrados = arrayGrande.filter(p => p.edad > 70);
    console.timeEnd("filter()");
    
    console.log("Resultados similares:", 
        encontradoFor?.edad === encontradoFind?.edad,
        "Total filtrados:", todosEncontrados.length
    );
}

// MÉTODOS ADICIONALES de búsqueda:

// some(): Verifica si AL MENOS UNO cumple la condición
const hayMenoresDe25 = personas.some(p => p.edad < 25);
console.log("¿Hay menores de 25?:", hayMenoresDe25); // true

// every(): Verifica si TODOS cumplen la condición
const todosMayoresDe20 = personas.every(p => p.edad > 20);
console.log("¿Todos mayores de 20?:", todosMayoresDe20); // true

// ANÁLISIS de some() y every():
// - some(): Se detiene en la PRIMERA coincidencia (true)
// - every(): Se detiene en la PRIMERA no-coincidencia (false)
// - Ambos retornan boolean
// - Muy eficientes para validaciones

// Ejemplos avanzados de some() y every():
const productos2 = [
    { nombre: 'Laptop', precio: 1000, stock: 5 },
    { nombre: 'Mouse', precio: 25, stock: 0 },
    { nombre: 'Teclado', precio: 75, stock: 3 }
];

const hayProductosSinStock = productos2.some(p => p.stock === 0);
console.log("¿Hay productos sin stock?:", hayProductosSinStock); // true

const todosProductosCaros = productos2.every(p => p.precio > 50);
console.log("¿Todos los productos son caros?:", todosProductosCaros); // false

// FUNCIONES UTILITARIAS combinadas:
class BuscadorArray {
    // Buscar con múltiples criterios:
    static buscarPor(array, criterios) {
        return array.filter(item => {
            return Object.entries(criterios).every(([key, value]) => {
                if (typeof value === 'function') {
                    return value(item[key]);
                }
                return item[key] === value;
            });
        });
    }
    
    // Buscar con texto fuzzy:
    static buscarTexto(array, campo, texto) {
        const textoLower = texto.toLowerCase();
        return array.filter(item => 
            item[campo].toLowerCase().includes(textoLower)
        );
    }
    
    // Buscar en rango:
    static buscarEnRango(array, campo, min, max) {
        return array.filter(item => 
            item[campo] >= min && item[campo] <= max
        );
    }
    
    // Estadísticas de búsqueda:
    static estadisticasBusqueda(array, condicion) {
        const coincidencias = array.filter(condicion);
        return {
            total: array.length,
            coincidencias: coincidencias.length,
            porcentaje: (coincidencias.length / array.length * 100).toFixed(2),
            elementos: coincidencias
        };
    }
}

// Ejemplos de uso:
const stats = BuscadorArray.estadisticasBusqueda(
    personas, 
    p => p.edad < 30
);
console.log("Estadísticas de búsqueda:", stats);

const busquedaCompleja = BuscadorArray.buscarPor(personas, {
    edad: valor => valor >= 25 && valor <= 30,
    nombre: 'Ana'
});
console.log("Búsqueda compleja:", busquedaCompleja);

// CASOS DE USO RECOMENDADOS:

// ✅ Usar findIndex() cuando:
// - Necesitas la POSICIÓN del elemento
// - Solo quieres la PRIMERA coincidencia
// - Vas a usar el índice para operaciones posteriores

// ✅ Usar filter() cuando:
// - Necesitas TODOS los elementos que coinciden
// - Vas a procesar múltiples resultados
// - Quieres encadenar con otros métodos

// ✅ Usar bucle for cuando:
// - Necesitas control total del flujo
// - Realizas múltiples operaciones por iteración
// - El rendimiento es crítico
// - Necesitas break/continue complejo

// ✅ Usar some()/every() cuando:
// - Solo necesitas validar (boolean)
// - Quieres optimizar (se detienen early)
// - Haces validaciones de datos

// ❌ EVITAR cuando:
// - findIndex(): Necesitas el elemento Y el índice (usar find() + indexOf())
// - filter(): Solo necesitas el primero (usar find())
// - for: El código es simple y legible con métodos funcionales
// - some()/every(): Necesitas los elementos, no solo validación