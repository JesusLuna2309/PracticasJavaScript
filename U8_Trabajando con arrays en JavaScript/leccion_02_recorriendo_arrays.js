//Recorrer arrays en JavaScript
// Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable
// Se pueden recorrer de varias formas, aquí algunos ejemplos:

const numeros = [1, 2, 3, 4, 5];

// 1. Usando un bucle for clásico
for (let i = 0; i < numeros.length; i++) {
    console.log("Bucle for clásico:", numeros[i]); // Imprime cada número
}
// ANÁLISIS DETALLADO del bucle for clásico:
// - VENTAJAS:
//   * Control total del índice (puedes saltarte elementos, ir de 2 en 2, etc.)
//   * Compatibilidad universal (funciona en todos los entornos)
//   * Permite modificar el array durante la iteración de forma segura
//   * Mejor performance en arrays muy grandes
//   * Puedes usar break y continue
// - DESVENTAJAS:
//   * Sintaxis más verbosa
//   * Más propenso a errores (índices fuera de rango)
//   * Requires manual index management

// EJEMPLOS ADICIONALES del bucle for clásico:

// Saltando elementos (cada 2):
console.log("Elementos pares por posición:");
for (let i = 0; i < numeros.length; i += 2) {
    console.log(`Posición ${i}:`, numeros[i]);
}

// Recorriendo solo una parte del array:
console.log("Solo los 3 primeros:");
for (let i = 0; i < Math.min(3, numeros.length); i++) {
    console.log(numeros[i]);
}

// Con break y continue:
console.log("Detener en el primer número mayor a 3:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] <= 2) continue; // Salta números <= 2
    if (numeros[i] > 3) break;     // Para en números > 3
    console.log("Encontrado:", numeros[i]);
}

// 2. Usando un bucle for...of (ES6+)
for (const numero of numeros) {
    console.log("Bucle for...of:", numero); // Imprime cada número
}
// ANÁLISIS DETALLADO del bucle for...of:
// - VENTAJAS:
//   * Sintaxis limpia y legible
//   * Menos propenso a errores (no maneja índices)
//   * Funciona con cualquier iterable (arrays, strings, Maps, Sets, etc.)
//   * Acceso directo al valor
//   * Puede usar break y continue
// - DESVENTAJAS:
//   * No proporciona el índice directamente
//   * No permite modificar el array durante la iteración
//   * ES6+ (puede necesitar transpilación en entornos antiguos)

// EJEMPLOS ADICIONALES del bucle for...of:

// Con diferentes tipos de iterables:
const palabra = "Hola";
console.log("Recorriendo string con for...of:");
for (const letra of palabra) {
    console.log(letra);
}

const conjunto = new Set([1, 2, 3, 2, 1]); // Set elimina duplicados
console.log("Recorriendo Set con for...of:");
for (const valor of conjunto) {
    console.log(valor); // 1, 2, 3
}

// Obteniendo índice manualmente:
console.log("for...of con índices:");
for (const [indice, valor] of numeros.entries()) {
    console.log(`Índice ${indice}: ${valor}`);
}

// Con break y continue:
console.log("for...of con control de flujo:");
for (const numero of numeros) {
    if (numero === 3) continue;
    if (numero === 5) break;
    console.log("Procesando:", numero);
}

// 3. Usando forEach() (método de array)
numeros.forEach((numero, indice) => {
    console.log(`forEach - Índice ${indice}:`, numero); // Imprime cada número con su índice
});
// ANÁLISIS DETALLADO del método forEach():
// - VENTAJAS:
//   * Sintaxis funcional y expresiva
//   * Proporciona valor, índice y array completo como parámetros
//   * Ideal para programación funcional
//   * Inmutable por diseño (no debe modificar el array original)
//   * Método nativo optimizado
// - DESVENTAJAS:
//   * NO se puede usar break o continue (usar return para simular continue)
//   * NO se puede detener la iteración prematuramente
//   * Ligeramente menos eficiente que for clásico en arrays muy grandes
//   * No retorna valor (void)

// EJEMPLOS ADICIONALES del método forEach():

// Con todos los parámetros disponibles:
console.log("forEach con todos los parámetros:");
numeros.forEach((valor, indice, arrayCompleto) => {
    console.log(`Valor: ${valor}, Índice: ${indice}, Array: [${arrayCompleto}]`);
});

// Simulando continue (saltando elementos):
console.log("forEach simulando continue:");
numeros.forEach((numero, indice) => {
    if (numero % 2 === 0) return; // Simula continue (salta números pares)
    console.log(`Número impar: ${numero} en posición ${indice}`);
});

// Operaciones complejas:
const resultados = [];
numeros.forEach((numero, indice) => {
    const resultado = numero * indice;
    resultados.push(resultado);
    console.log(`${numero} × ${indice} = ${resultado}`);
});
console.log("Resultados:", resultados);

// forEach con context (this):
const objeto = {
    multiplicador: 10,
    procesar: function(array) {
        array.forEach(function(numero) {
            console.log(numero * this.multiplicador);
        }, this); // Pasamos 'this' como contexto
    }
};
objeto.procesar([1, 2, 3]);

// 4. Usando un bucle for...in (NO recomendado para arrays)
// for...in recorre las propiedades enumerables de un objeto, no es ideal para arrays
for (const indice in numeros) {
    console.log("Bucle for...in - Índice:", indice, "Valor:", numeros[indice]); // Imprime índice y valor
}
// ANÁLISIS DETALLADO del bucle for...in y por qué NO usarlo en arrays:
// - PROBLEMAS con arrays:
//   * Los índices se devuelven como STRINGS, no números
//   * Puede incluir propiedades adicionales del array (métodos personalizados)
//   * No garantiza el orden de iteración
//   * Incluye propiedades heredadas del prototipo
// - CUÁNDO SÍ usarlo:
//   * Para recorrer propiedades de objetos (su propósito original)
//   * Cuando necesitas las claves de un objeto

// DEMOSTRACIÓN de los problemas:
const arrayConPropiedades = [1, 2, 3];
arrayConPropiedades.propiedadPersonalizada = "valor extra";

console.log("Problemas de for...in con arrays:");
for (const clave in arrayConPropiedades) {
    console.log(`Clave: "${clave}" (tipo: ${typeof clave}), Valor: ${arrayConPropiedades[clave]}`);
}
// Salida incluye: "propiedadPersonalizada" y las claves son strings

// USO CORRECTO de for...in con objetos:
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log("for...in correcto con objetos:");
for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//5. Recorrerlo al revés con un bucle for clásico
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log("Bucle for clásico al revés:", numeros[i]); // Imprime cada número en orden inverso
}
// ANÁLISIS DETALLADO del bucle for inverso:
// - CUÁNDO usarlo:
//   * Cuando necesitas procesar elementos de atrás hacia adelante
//   * Al eliminar elementos (evita problemas de índices)
//   * Algoritmos que requieren orden inverso
//   * Cuando el orden de procesamiento importa
// - VENTAJAS:
//   * Útil para eliminar elementos sin afectar índices posteriores
//   * Procesamiento en orden reverso sin crear nuevo array
//   * Eficiente para búsquedas desde el final

// EJEMPLOS ADICIONALES de iteración inversa:

// Eliminando elementos de forma segura:
const numerosParaEliminar = [1, 2, 3, 4, 5, 6];
console.log("Eliminando números pares (hacia atrás):");
for (let i = numerosParaEliminar.length - 1; i >= 0; i--) {
    if (numerosParaEliminar[i] % 2 === 0) {
        console.log("Eliminando:", numerosParaEliminar[i]);
        numerosParaEliminar.splice(i, 1);
    }
}
console.log("Array después de eliminar pares:", numerosParaEliminar);

// MÉTODOS ALTERNATIVOS para recorrer arrays:

// 6. Usando map() (cuando necesitas transformar elementos):
console.log("Usando map() para transformar:");
const numerosDoblados = numeros.map((numero, indice) => {
    console.log(`Doblando ${numero} en posición ${indice}`);
    return numero * 2;
});
console.log("Números doblados:", numerosDoblados);

// 7. Usando filter() (cuando necesitas elementos que cumplan condición):
console.log("Usando filter() para filtrar:");
const numerosPares = numeros.filter((numero, indice) => {
    const esPar = numero % 2 === 0;
    console.log(`${numero} es par: ${esPar}`);
    return esPar;
});
console.log("Números pares:", numerosPares);

// 8. Usando reduce() (cuando necesitas acumular un resultado):
console.log("Usando reduce() para sumar:");
const suma = numeros.reduce((acumulador, numero, indice) => {
    console.log(`Sumando ${numero} al acumulador ${acumulador}`);
    return acumulador + numero;
}, 0);
console.log("Suma total:", suma);

// 9. Usando some() y every() (para verificaciones):
console.log("Usando some() - ¿hay algún número > 3?");
const hayMayorTres = numeros.some((numero, indice) => {
    const esMayor = numero > 3;
    console.log(`${numero} > 3: ${esMayor}`);
    return esMayor;
});
console.log("Resultado some():", hayMayorTres);

console.log("Usando every() - ¿todos los números son > 0?");
const todosMayorCero = numeros.every((numero, indice) => {
    const esMayor = numero > 0;
    console.log(`${numero} > 0: ${esMayor}`);
    return esMayor;
});
console.log("Resultado every():", todosMayorCero);

// 10. Usando find() y findIndex() (para búsquedas):
console.log("Usando find() - encontrar primer número > 3:");
const primerMayorTres = numeros.find((numero, indice) => {
    console.log(`Verificando ${numero}`);
    return numero > 3;
});
console.log("Primer número > 3:", primerMayorTres);

console.log("Usando findIndex() - índice del primer número > 3:");
const indicePrimerMayorTres = numeros.findIndex((numero, indice) => {
    console.log(`Verificando índice ${indice}: ${numero}`);
    return numero > 3;
});
console.log("Índice del primer número > 3:", indicePrimerMayorTres);

// COMPARACIÓN DE PERFORMANCE:
function medirTiempo(nombre, funcion) {
    console.time(nombre);
    funcion();
    console.timeEnd(nombre);
}

const arrayGrande = Array.from({length: 1000000}, (_, i) => i);

medirTiempo("for clásico", () => {
    for (let i = 0; i < arrayGrande.length; i++) {
        arrayGrande[i] * 2;
    }
});

medirTiempo("for...of", () => {
    for (const num of arrayGrande) {
        num * 2;
    }
});

medirTiempo("forEach", () => {
    arrayGrande.forEach(num => num * 2);
});

// CASOS DE USO RECOMENDADOS:

// ✅ Usar for clásico cuando:
// - Necesitas control total del índice
// - Vas a modificar el array durante la iteración
// - Necesitas máximo rendimiento
// - Usas break/continue frecuentemente

// ✅ Usar for...of cuando:
// - Solo necesitas los valores
// - Trabajas con diferentes tipos de iterables
// - Prefieres sintaxis limpia
// - No necesitas el índice

// ✅ Usar forEach() cuando:
// - Realizas operaciones secundarias (logging, DOM, etc.)
// - Usas programación funcional
// - Necesitas índice y valor
// - No necesitas controlar el flujo (break/continue)

// ✅ Usar métodos funcionales (map, filter, etc.) cuando:
// - Transformas datos (map)
// - Filtras elementos (filter)
// - Reduces a un valor (reduce)
// - Haces búsquedas (find, findIndex)

// ❌ EVITAR for...in para arrays siempre
