const numeros = [1, 2, 3, 4, 5];

//Metodo some: Comprueba si al menos un elemento cumple una condición
const tieneMayorQueTres = numeros.some(numero => numero > 3);
// ANÁLISIS DETALLADO de some():
// - NO MUTA el array original (inmutable)
// - Retorna BOOLEAN (true/false)
// - Se detiene en la PRIMERA coincidencia (optimización)
// - Complejidad temporal: O(n) en el peor caso, O(1) en el mejor
// - Si encuentra UN elemento que cumple, retorna true inmediatamente
// - Si NO encuentra ninguno, retorna false después de revisar todo
// - Callback recibe (elemento, índice, arrayCompleto)
// - Funciona como operador lógico OR distribuido
console.log("¿Hay algún número mayor que 3?", tieneMayorQueTres); // true

const tieneNumerosPares = numeros.some(numero => numero % 2 === 0);
console.log("¿Hay algún número par?", tieneNumerosPares); // true

// EJEMPLOS ADICIONALES de some():

// Con arrays vacíos (siempre false):
const vacio = [];
const tieneElementos = vacio.some(x => x > 0);
console.log("Array vacío tiene elementos:", tieneElementos); // false

// Con objetos complejos:
const personas = [
    { nombre: 'Juan', edad: 25, activo: false },
    { nombre: 'Ana', edad: 30, activo: true },
    { nombre: 'Pedro', edad: 35, activo: false }
];

const hayPersonasActivas = personas.some(p => p.activo);
console.log("¿Hay personas activas?", hayPersonasActivas); // true

const hayMenoresDe18 = personas.some(p => p.edad < 18);
console.log("¿Hay menores de edad?", hayMenoresDe18); // false

// Con todos los parámetros del callback:
const conDetalles = numeros.some((numero, indice, array) => {
    console.log(`Evaluando ${numero} en posición ${indice} de array [${array}]`);
    return numero > 4;
});
console.log("¿Hay números > 4?", conDetalles); // true (se detiene en el 5)

// Validaciones prácticas con some():
const emails = ['usuario@gmail.com', 'admin@empresa.com', 'test@hotmail.com'];
const tieneGmail = emails.some(email => email.includes('@gmail.com'));
console.log("¿Hay emails de Gmail?", tieneGmail); // true

const permisos = ['read', 'write', 'execute'];
const puedeEscribir = permisos.some(permiso => permiso === 'write');
console.log("¿Puede escribir?", puedeEscribir); // true

// some() vs includes() para arrays de primitivos:
const colores = ['rojo', 'verde', 'azul'];
const tieneRojo1 = colores.some(color => color === 'rojo');
const tieneRojo2 = colores.includes('rojo');
console.log("some() encuentra rojo:", tieneRojo1); // true
console.log("includes() encuentra rojo:", tieneRojo2); // true
// Para primitivos simples, includes() es más eficiente

//Metodo every: Comprueba si todos los elementos cumplen una condición
const todosMenoresQueSeis = numeros.every(numero => numero < 6);
// ANÁLISIS DETALLADO de every():
// - NO MUTA el array original (inmutable)
// - Retorna BOOLEAN (true/false)
// - Se detiene en la PRIMERA no-coincidencia (optimización)
// - Complejidad temporal: O(n) en el peor caso, O(1) en el mejor
// - Si encuentra UN elemento que NO cumple, retorna false inmediatamente
// - Si TODOS cumplen, retorna true después de revisar todo
// - Callback recibe (elemento, índice, arrayCompleto)
// - Funciona como operador lógico AND distribuido
console.log("¿Todos los números son menores que 6?", todosMenoresQueSeis); // true

const todosPares = numeros.every(numero => numero % 2 === 0);
console.log("¿Todos los números son pares?", todosPares); // false

// EJEMPLOS ADICIONALES de every():

// Con arrays vacíos (siempre true - vacuously true):
const vacio2 = [];
const todosPositivos = vacio2.every(x => x > 0);
console.log("Todos los elementos del array vacío son positivos:", todosPositivos); // true
// IMPORTANTE: every() en array vacío siempre retorna true

// Validación de datos con every():
const edades = [25, 30, 35, 40];
const todosMayoresDeEdad = edades.every(edad => edad >= 18);
console.log("¿Todos son mayores de edad?", todosMayoresDeEdad); // true

const productos = [
    { nombre: 'Laptop', precio: 1000, stock: 5 },
    { nombre: 'Mouse', precio: 25, stock: 10 },
    { nombre: 'Teclado', precio: 75, stock: 0 }
];

const todosConStock = productos.every(p => p.stock > 0);
console.log("¿Todos los productos tienen stock?", todosConStock); // false

const todosConPrecio = productos.every(p => p.precio > 0 && p.precio < 2000);
console.log("¿Todos tienen precios válidos?", todosConPrecio); // true

// every() para validación de formularios:
const camposFormulario = [
    { nombre: 'email', valor: 'test@example.com', requerido: true },
    { nombre: 'nombre', valor: 'Juan', requerido: true },
    { nombre: 'telefono', valor: '', requerido: false }
];

const formularioValido = camposFormulario.every(campo => 
    !campo.requerido || (campo.valor && campo.valor.trim().length > 0)
);
console.log("¿Formulario válido?", formularioValido); // true

// Comparación some() vs every():
const mixto = [1, 2, 3, 4, 5];
console.log("some() - ¿Alguno > 3?", mixto.some(n => n > 3)); // true
console.log("every() - ¿Todos > 3?", mixto.every(n => n > 3)); // false
console.log("some() - ¿Alguno > 10?", mixto.some(n => n > 10)); // false
console.log("every() - ¿Todos < 10?", mixto.every(n => n < 10)); // true

//Metodo reduce: Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor
const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// ANÁLISIS DETALLADO de reduce():
// - NO MUTA el array original (inmutable)
// - Retorna UN SOLO VALOR de cualquier tipo
// - Recorre TODO el array (no hay early exit)
// - Complejidad temporal: O(n) siempre
// - Callback recibe (acumulador, elemento, índice, arrayCompleto)
// - El valor inicial es CRUCIAL para evitar errores
// - Muy poderoso pero puede ser complejo de entender
// - Puede reemplazar muchos otros métodos de array
console.log("Suma total de números:", sumaTotal); // 15 

const productoTotal = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log("Producto total de números:", productoTotal); // 120

// EJEMPLOS AVANZADOS de reduce():

// reduce() paso a paso (suma):
const sumaDetallada = numeros.reduce((acc, num, indice) => {
    console.log(`Iteración ${indice}: acc=${acc}, num=${num}, resultado=${acc + num}`);
    return acc + num;
}, 0);
// Iteración 0: acc=0, num=1, resultado=1
// Iteración 1: acc=1, num=2, resultado=3
// Iteración 2: acc=3, num=3, resultado=6
// Iteración 3: acc=6, num=4, resultado=10
// Iteración 4: acc=10, num=5, resultado=15

// PELIGRO: reduce() sin valor inicial:
const sinValorInicial = [1, 2, 3].reduce((acc, num) => acc + num);
console.log("Sin valor inicial:", sinValorInicial); // 6 (funciona porque es suma)

// PROBLEMA con arrays vacíos sin valor inicial:
try {
    const error = [].reduce((acc, num) => acc + num);
} catch (e) {
    console.log("Error con array vacío:", e.message); // "Reduce of empty array with no initial value"
}

// PROBLEMA con operaciones que requieren valor inicial específico:
const problemaMult = [1, 2, 3].reduce((acc, num) => acc * num); // 6 (incorrecto para multiplicación)
const correctoMult = [1, 2, 3].reduce((acc, num) => acc * num, 1); // 6 (correcto)

// reduce() para encontrar máximo/mínimo:
const maximo = numeros.reduce((max, num) => num > max ? num : max, -Infinity);
console.log("Máximo:", maximo); // 5

const minimo = numeros.reduce((min, num) => num < min ? num : min, Infinity);
console.log("Mínimo:", minimo); // 1

// reduce() para contar elementos:
const letras = ['a', 'b', 'a', 'c', 'b', 'a'];
const conteo = letras.reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
}, {});
console.log("Conteo de letras:", conteo); // { a: 3, b: 2, c: 1 }

// reduce() para agrupar objetos:
const empleados = [
    { nombre: 'Juan', departamento: 'IT' },
    { nombre: 'Ana', departamento: 'HR' },
    { nombre: 'Pedro', departamento: 'IT' },
    { nombre: 'María', departamento: 'HR' }
];

const porDepartamento = empleados.reduce((acc, emp) => {
    if (!acc[emp.departamento]) {
        acc[emp.departamento] = [];
    }
    acc[emp.departamento].push(emp.nombre);
    return acc;
}, {});
console.log("Agrupados por departamento:", porDepartamento);
// { IT: ['Juan', 'Pedro'], HR: ['Ana', 'María'] }

// reduce() para transformar estructura de datos:
const ventas = [
    { producto: 'A', cantidad: 10, precio: 100 },
    { producto: 'B', cantidad: 5, precio: 200 },
    { producto: 'A', cantidad: 3, precio: 100 }
];

const resumenVentas = ventas.reduce((acc, venta) => {
    const key = venta.producto;
    if (!acc[key]) {
        acc[key] = { cantidadTotal: 0, ventaTotal: 0 };
    }
    acc[key].cantidadTotal += venta.cantidad;
    acc[key].ventaTotal += venta.cantidad * venta.precio;
    return acc;
}, {});
console.log("Resumen de ventas:", resumenVentas);

const strings = ['Hola', ', ', 'JavaScript', '!'];

const stringConcatenado = strings.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, '');
// ANÁLISIS de concatenación con reduce():
// - Valor inicial: string vacío ''
// - Cada iteración añade el siguiente string
// - Alternativa a join() para casos simples
// - Más flexible que join() para lógica compleja

console.log(stringConcatenado); // Salida: "Hola, JavaScript!"

// COMPARACIÓN: reduce() vs join() para concatenación:
const conJoin = strings.join('');
console.log("Con join():", conJoin); // "Hola, JavaScript!"

// reduce() para concatenación condicional:
const palabras = ['Hola', '', 'mundo', null, 'JavaScript', undefined];
const filtradoConcatenado = palabras.reduce((acc, palabra) => {
    if (palabra && typeof palabra === 'string' && palabra.trim()) {
        return acc + (acc ? ' ' : '') + palabra;
    }
    return acc;
}, '');
console.log("Concatenación filtrada:", filtradoConcatenado); // "Hola mundo JavaScript"

// reduce() para aplanar arrays (flatten):
const anidado = [[1, 2], [3, 4], [5, 6]];
const aplanado = anidado.reduce((acc, arr) => acc.concat(arr), []);
console.log("Array aplanado:", aplanado); // [1, 2, 3, 4, 5, 6]

// reduce() para crear pipeline de funciones:
const operaciones = [
    arr => arr.map(x => x * 2),
    arr => arr.filter(x => x > 5),
    arr => arr.reduce((sum, x) => sum + x, 0)
];

const resultado = operaciones.reduce((data, operacion) => operacion(data), [1, 2, 3, 4, 5]);
console.log("Pipeline resultado:", resultado); // 18

// reduce() vs otros métodos (comparación):
const datos = [1, 2, 3, 4, 5];

// Suma con reduce:
const suma1 = datos.reduce((acc, n) => acc + n, 0);

// Suma con for:
let suma2 = 0;
for (const n of datos) suma2 += n;

// Suma con forEach:
let suma3 = 0;
datos.forEach(n => suma3 += n);

console.log("Sumas iguales:", suma1 === suma2 && suma2 === suma3); // true

// CASOS DE USO AVANZADOS:

// reduce() para crear índices:
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Pedro' }
];

const indiceUsuarios = usuarios.reduce((acc, usuario) => {
    acc[usuario.id] = usuario;
    return acc;
}, {});
console.log("Índice de usuarios:", indiceUsuarios);

// reduce() para validaciones complejas:
const validaciones = [
    { campo: 'email', valido: true, mensaje: '' },
    { campo: 'nombre', valido: false, mensaje: 'Requerido' },
    { campo: 'edad', valido: true, mensaje: '' }
];

const estadoValidacion = validaciones.reduce((acc, validacion) => {
    if (!validacion.valido) {
        acc.valido = false;
        acc.errores.push({ campo: validacion.campo, mensaje: validacion.mensaje });
    }
    return acc;
}, { valido: true, errores: [] });

console.log("Estado de validación:", estadoValidacion);

// FUNCIONES UTILITARIAS con reduce():
class ArrayUtils {
    // Suma condicional:
    static sumaConCondicion(array, condicion) {
        return array.reduce((sum, item) => 
            condicion(item) ? sum + item : sum, 0
        );
    }
    
    // Agrupar por función:
    static agruparPor(array, fn) {
        return array.reduce((acc, item) => {
            const key = fn(item);
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {});
    }
    
    // Crear lookup table:
    static crearLookup(array, keyFn, valueFn = x => x) {
        return array.reduce((acc, item) => {
            acc[keyFn(item)] = valueFn(item);
            return acc;
        }, {});
    }
}

// Ejemplos de uso:
const sumaPositivos = ArrayUtils.sumaConCondicion([-1, 2, -3, 4, 5], n => n > 0);
console.log("Suma de positivos:", sumaPositivos); // 11

const agrupadoPorPar = ArrayUtils.agruparPor([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'par' : 'impar');
console.log("Agrupado por paridad:", agrupadoPorPar);

// PERFORMANCE Y CONSIDERACIONES:

// reduce() vs bucle for (performance):
function compararPerformance() {
    const arrayGrande = Array.from({length: 1000000}, (_, i) => i);
    
    console.time("reduce()");
    const sumaReduce = arrayGrande.reduce((acc, n) => acc + n, 0);
    console.timeEnd("reduce()");
    
    console.time("for loop");
    let sumaFor = 0;
    for (let i = 0; i < arrayGrande.length; i++) {
        sumaFor += arrayGrande[i];
    }
    console.timeEnd("for loop");
    
    console.log("Resultados iguales:", sumaReduce === sumaFor);
}

// CASOS DE USO RECOMENDADOS:

// ✅ Usar some() cuando:
// - Necesitas validar si AL MENOS UNO cumple
// - Quieres optimizar con early exit
// - Validaciones de existencia

// ✅ Usar every() cuando:
// - Necesitas validar que TODOS cumplan
// - Validaciones de integridad de datos
// - Verificaciones de permisos/requisitos

// ✅ Usar reduce() cuando:
// - Necesitas transformar array a otro tipo
// - Operaciones de agregación complejas
// - Crear estructuras de datos derivadas
// - Cálculos acumulativos

// ❌ EVITAR cuando:
// - some()/every(): Solo necesitas el elemento (usar find())
// - reduce(): Operaciones simples tienen métodos específicos
// - reduce(): Sin valor inicial en operaciones críticas
// - Cualquiera: Cuando un bucle simple es más claro