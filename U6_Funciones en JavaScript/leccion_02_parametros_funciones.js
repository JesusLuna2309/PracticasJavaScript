//Parametros de funciones en JavaScript
//Enviar parámetros por valor y por referencia

//Definición de una función que recibe un parámetro por valor
//Los tipos primitivos (number, string, boolean, null, undefined, symbol, bigint) se pasan por VALOR
function incrementar(numero) {
    numero++; // Incrementa el valor del parámetro local - SOLO afecta a la copia
    console.log("Número incrementado: " + numero); // Muestra el número incrementado
    // Aquí 'numero' es una COPIA independiente del valor original
    // Cualquier modificación aquí NO afecta la variable original
}

//Llamada a la función con un valor numérico
let valorOriginal = 5;
incrementar(valorOriginal); // Salida: Número incrementado: 6
console.log("Valor original después de la función:", valorOriginal); // Salida: 5 (sin cambios)
// El valor original NO se modifica porque los primitivos se pasan por valor

//Definición de una función que recibe un objeto por referencia
//Los objetos (object, array, function, Date, RegExp, etc.) se pasan por REFERENCIA
function modificarObjeto(objeto) {
    objeto.propiedad++; // Incrementa una propiedad del objeto ORIGINAL
    console.log("Objeto modificado:", objeto); // Muestra el objeto modificado
    // Aquí 'objeto' es una REFERENCIA al objeto original en memoria
    // Las modificaciones SÍ afectan al objeto original
}

//Llamada a la función con un objeto
let miObjeto = { propiedad: 10 };
console.log("Objeto antes de la función:", miObjeto); // { propiedad: 10 }
modificarObjeto(miObjeto); // Salida: Objeto modificado: { propiedad: 11 }
console.log("Objeto después de la función:", miObjeto); // { propiedad: 11 } - ¡MODIFICADO!
// El objeto original SÍ se modifica porque se pasa por referencia

// Ejemplo adicional: Diferencia con arrays (también son objetos)
function modificarArray(arr) {
    arr.push(4); // Modifica el array original
    arr[0] = 999; // Modifica el primer elemento
    console.log("Array dentro de función:", arr);
}

let miArray = [1, 2, 3];
console.log("Array antes:", miArray); // [1, 2, 3]
modificarArray(miArray);
console.log("Array después:", miArray); // [999, 2, 3, 4] - ¡MODIFICADO!

// Ejemplo de cómo evitar modificar el original (crear copias)
function incrementarSinModificar(numero) {
    return numero + 1; // Retorna un nuevo valor sin modificar parámetros
}

function modificarObjetoSinAfectarOriginal(objeto) {
    // Crea una copia superficial del objeto usando spread operator
    let copia = { ...objeto };
    copia.propiedad++;
    return copia; // Retorna la copia modificada
}

// Uso seguro que no modifica originales
let num = 5;
let nuevoNum = incrementarSinModificar(num);
console.log("Original:", num, "Nuevo:", nuevoNum); // Original: 5 Nuevo: 6

let obj = { propiedad: 10 };
let nuevoObj = modificarObjetoSinAfectarOriginal(obj);
console.log("Original:", obj); // { propiedad: 10 } - sin cambios
console.log("Nuevo:", nuevoObj); // { propiedad: 11 } - modificado

// Caso especial: Reasignación de parámetros
function reasignarObjeto(objeto) {
    // Esto NO modifica el objeto original, solo cambia la referencia local
    objeto = { nuevaPropiedad: "nuevo valor" };
    console.log("Objeto reasignado:", objeto);
}

let objetoPrueba = { propiedad: "original" };
reasignarObjeto(objetoPrueba);
console.log("Objeto después de reasignación:", objetoPrueba); // { propiedad: "original" } - sin cambios
// La reasignación completa NO afecta la variable original

