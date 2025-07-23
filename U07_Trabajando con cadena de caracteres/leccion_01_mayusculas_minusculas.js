//La clase String tiene un método llamado toUpperCase() 
// que convierte todos los caracteres de una cadena a mayúsculas.
// También existe toLowerCase() para convertir a minúsculas.

let texto = "Hola Mundo";
// IMPORTANTE: En JavaScript, las cadenas (strings) son INMUTABLES
// Esto significa que una vez creadas, no se pueden modificar
// Los métodos de String siempre retornan NUEVAS cadenas

let textoMayusculas = texto.toUpperCase(); // Convierte a mayúsculas
// toUpperCase() NO modifica la cadena original 'texto'
// Crea y retorna una NUEVA cadena con todos los caracteres alfabéticos en mayúsculas
// Caracteres no alfabéticos (números, símbolos, espacios) permanecen inalterados
// Ejemplo: "Hello123!" -> "HELLO123!"

let textoMinusculas = texto.toLowerCase(); // Convierte a minúsculas
// toLowerCase() funciona de manera similar a toUpperCase()
// Crea una nueva cadena con todos los caracteres alfabéticos en minúsculas
// Es especialmente útil para normalizar datos antes de comparaciones

console.log("Texto original:", texto); // Imprime: Texto original: Hola Mundo
// COMPROBACIÓN: La cadena original NO ha cambiado
// Esto demuestra la inmutabilidad de las cadenas en JavaScript

console.log("Texto en mayúsculas:", textoMayusculas); // Imprime: Texto en mayúsculas: HOLA MUNDO
console.log("Texto en minúsculas:", textoMinusculas); // Imprime: Texto en minúsculas: hola mundo

// EJEMPLOS ADICIONALES para profundizar:

// 1. Comportamiento con caracteres especiales
let textoComplejo = "¡Hola María! ¿Cómo estás? 123";
console.log("Original:", textoComplejo);
console.log("Mayúsculas:", textoComplejo.toUpperCase()); // ¡HOLA MARÍA! ¿CÓMO ESTÁS? 123
console.log("Minúsculas:", textoComplejo.toLowerCase()); // ¡hola maría! ¿cómo estás? 123
// NOTA: Los acentos y caracteres especiales se manejan correctamente
// Los números y símbolos de puntuación no se ven afectados

// 2. Uso común: Comparaciones sin distinción de mayúsculas/minúsculas
let nombre1 = "JUAN";
let nombre2 = "juan";
let nombre3 = "Juan";

// Comparación directa (distingue mayúsculas/minúsculas)
console.log(nombre1 === nombre2); // false
console.log(nombre1 === nombre3); // false

// Comparación normalizada (no distingue mayúsculas/minúsculas)
console.log(nombre1.toLowerCase() === nombre2.toLowerCase()); // true
console.log(nombre1.toLowerCase() === nombre3.toLowerCase()); // true

// 3. Uso práctico: Validación de entrada del usuario
function validarComando(comando) {
    // Normalizar el comando a minúsculas para facilitar la comparación
    let comandoNormalizado = comando.toLowerCase().trim();
    
    if (comandoNormalizado === "salir" || comandoNormalizado === "exit") {
        return "Cerrando aplicación...";
    } else if (comandoNormalizado === "ayuda" || comandoNormalizado === "help") {
        return "Mostrando ayuda...";
    } else {
        return "Comando no reconocido";
    }
}

// Pruebas con diferentes formatos
console.log(validarComando("SALIR")); // "Cerrando aplicación..."
console.log(validarComando("Exit")); // "Cerrando aplicación..."
console.log(validarComando("  AYUDA  ")); // "Mostrando ayuda..."

// 4. Transformación de nombres propios
function formatearNombrePropio(nombre) {
    // Convierte a minúsculas y luego capitaliza la primera letra
    return nombre.toLowerCase().charAt(0).toUpperCase() + nombre.toLowerCase().slice(1);
}

console.log(formatearNombrePropio("MARÍA")); // "María"
console.log(formatearNombrePropio("pedro")); // "Pedro"
console.log(formatearNombrePropio("LuIs")); // "Luis"

// 5. Método de encadenamiento (method chaining)
let textoDesordenado = "  ¡HOLA mundo!  ";
let textoLimpio = textoDesordenado
    .trim()          // Elimina espacios al inicio y final
    .toLowerCase()   // Convierte a minúsculas
    .replace("¡", "") // Elimina el símbolo de exclamación
    .replace("!", ""); // Elimina el símbolo de exclamación final

console.log("Texto limpio:", textoLimpio); // "hola mundo"

// 6. CONSIDERACIONES IMPORTANTES:

// Comportamiento con cadenas vacías
let cadenaVacia = "";
console.log("Cadena vacía en mayúsculas:", cadenaVacia.toUpperCase()); // ""
console.log("Cadena vacía en minúsculas:", cadenaVacia.toLowerCase()); // ""

// Comportamiento con valores null o undefined
try {
    let valorNull = null;
    // valorNull.toUpperCase(); // TypeError: Cannot read property 'toUpperCase' of null
    
    // Forma segura de manejar valores que pueden ser null/undefined
    let textoSeguro = (valorNull || "").toString().toUpperCase();
    console.log("Texto seguro:", textoSeguro); // ""
} catch (error) {
    console.log("Error manejado:", error.message);
}

// 7. RENDIMIENTO: Los métodos crean nuevas cadenas
let textoLargo = "a".repeat(1000000); // Cadena de 1 millón de caracteres
console.time("toUpperCase");
let textoLargoMayusculas = textoLargo.toUpperCase();
console.timeEnd("toUpperCase");
// Para cadenas muy largas, considera el impacto en memoria y rendimiento

// 8. CASOS DE USO COMUNES:

// Normalización de emails
function normalizarEmail(email) {
    return email.toLowerCase().trim();
}

// Búsqueda insensible a mayúsculas/minúsculas
function buscarEnArray(array, termino) {
    let terminoLower = termino.toLowerCase();
    return array.filter(item => 
        item.toLowerCase().includes(terminoLower)
    );
}

let frutas = ["Manzana", "BANANA", "Naranja", "uva"];
console.log(buscarEnArray(frutas, "man")); // ["Manzana"]
console.log(buscarEnArray(frutas, "UVA")); // ["uva"]

// Generación de identificadores
function generarId(nombre) {
    return nombre
        .toLowerCase()           // Convertir a minúsculas
        .replace(/\s+/g, "_")   // Reemplazar espacios con guiones bajos
        .replace(/[áàäâ]/g, "a") // Normalizar acentos (ejemplo básico)
        .replace(/[éèëê]/g, "e")
        .replace(/[íìïî]/g, "i")
        .replace(/[óòöô]/g, "o")
        .replace(/[úùüû]/g, "u");
}

console.log(generarId("José María García")); // "jose_maria_garcia"