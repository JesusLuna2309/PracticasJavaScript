//Conviertiendo de Strings a numeros y viceversa en JavaScript

// 1. Convertir un número a string:
let numero = 123;

let numeroComoString = numero.toString(); // Método toString()
// ANÁLISIS DETALLADO de toString():
// - Es un método nativo de todos los números en JavaScript
// - Acepta un parámetro opcional para especificar la base (2-36)
// - Base por defecto es 10 (decimal)
// - Ejemplo: (255).toString(16) = "ff" (hexadecimal)
// - CUIDADO: No funciona con null o undefined (lanza TypeError)

let numeroComoString2 = String(numero); // Usando la función String()
// ANÁLISIS DETALLADO de String():
// - Es una función constructora usada como función de conversión
// - MÁS SEGURA que toString() porque maneja null/undefined
// - String(null) = "null", String(undefined) = "undefined"
// - String(NaN) = "NaN", String(Infinity) = "Infinity"
// - Internamente llama al método toString() si está disponible

let numeroComoString3 = `${numero}`; // Usando template literals
// ANÁLISIS DETALLADO de template literals:
// - Sintaxis moderna de ES6
// - Automáticamente convierte valores a string
// - Muy útil cuando necesitas interpolar en texto más largo
// - Equivale internamente a String(numero)
// - Maneja todos los tipos de datos de forma segura

let numeroComoString4 = numero + ""; // Concatenación con cadena vacía
// ANÁLISIS DETALLADO de concatenación:
// - Aprovecha la coerción automática de tipos de JavaScript
// - Cuando uno de los operandos es string, + actúa como concatenación
// - Más corto pero menos explícito que otros métodos
// - NOTA: En el ejemplo original se usa " " (espacio), no "" (vacío)
// - Con espacio: "123 " | Sin espacio: "123"

console.log("Número como string:", numeroComoString); // Salida: "123"
console.log("Número como string 2:", numeroComoString2); // Salida: "123"
console.log("Número como string 3:", numeroComoString3); // Salida: "123"
console.log("Número como string 4:", numeroComoString4); // Salida: "123 "

// EJEMPLOS ADICIONALES de conversión número a string:

// toString() con diferentes bases:
console.log("Binario:", (15).toString(2));     // "1111"
console.log("Octal:", (15).toString(8));       // "17"
console.log("Hexadecimal:", (255).toString(16)); // "ff"

// Casos especiales:
console.log("Infinity como string:", String(Infinity));     // "Infinity"
console.log("NaN como string:", String(NaN));               // "NaN"
console.log("Número negativo:", (-42).toString());          // "-42"

// toString() con decimales:
console.log("Decimal:", (3.14159).toString());              // "3.14159"

// COMPARACIÓN de seguridad:
try {
    console.log("toString en null:", null.toString()); // TypeError!
} catch (e) {
    console.log("Error:", e.message);
}

console.log("String en null:", String(null)); // "null" (seguro)

// 2. Convertir un string a número:
let stringNumero = "456";

let numeroDesdeString = parseInt(stringNumero, 10); // Usando parseInt
// ANÁLISIS DETALLADO de parseInt():
// - Convierte string a ENTERO (ignora decimales)
// - Segundo parámetro: base numérica (2-36)
// - SIEMPRE especificar la base para evitar problemas
// - Detiene la conversión en el primer carácter no numérico
// - parseInt("123abc") = 123 (ignora "abc")
// - parseInt("abc123") = NaN (no empieza con número)
// - Retorna NaN si no puede convertir

let numeroDesdeString2 = Number(stringNumero); // Usando Number()
// ANÁLISIS DETALLADO de Number():
// - Más ESTRICTO que parseInt
// - Convierte la cadena COMPLETA o retorna NaN
// - Number("123abc") = NaN (no perdona caracteres extra)
// - Maneja decimales: Number("123.45") = 123.45
// - Number("") = 0, Number(" ") = 0 (espacios en blanco = 0)
// - Number(null) = 0, Number(undefined) = NaN

let numeroDesdeString3 = +stringNumero; // Usando el operador unario +
// ANÁLISIS DETALLADO del operador unario +:
// - Equivale funcionalmente a Number()
// - Sintaxis más concisa pero menos explícita
// - Útil en expresiones complejas: +prompt("Ingresa un número")
// - Mismo comportamiento que Number() en todos los casos

console.log("Número desde string:", numeroDesdeString); // Salida: 456
console.log("Número desde string 2:", numeroDesdeString2); // Salida: 456
console.log("Número desde string 3:", numeroDesdeString3); // Salida: 456

// EJEMPLOS COMPARATIVOS de comportamiento:
console.log("=== COMPARACIÓN DE MÉTODOS ===");

// Con números "sucios":
console.log("parseInt('123abc'):", parseInt('123abc', 10));    // 123
console.log("Number('123abc'):", Number('123abc'));            // NaN
console.log("+'123abc':", +'123abc');                          // NaN

// Con espacios:
console.log("parseInt('  456  '):", parseInt('  456  ', 10)); // 456
console.log("Number('  456  '):", Number('  456  '));         // 456
console.log("+'  456  ':", +'  456  ');                       // 456

// Con decimales:
console.log("parseInt('123.45'):", parseInt('123.45', 10));   // 123 (trunca)
console.log("Number('123.45'):", Number('123.45'));           // 123.45
console.log("+'123.45':", +'123.45');                         // 123.45

// 3. Convertir un string a número con decimales:
let stringDecimal = "78.90";
let numeroDecimalDesdeString = parseFloat(stringDecimal); // Usando parseFloat
// ANÁLISIS DETALLADO de parseFloat():
// - Especializado en números de punto flotante (decimales)
// - No requiere segundo parámetro (siempre base 10)
// - Como parseInt, detiene en el primer carácter no numérico
// - parseFloat("123.45abc") = 123.45
// - parseFloat("abc123.45") = NaN
// - Más permisivo que Number() con caracteres extra

console.log("Número decimal desde string:", numeroDecimalDesdeString); // Salida: 78.90

// EJEMPLOS ADICIONALES con parseFloat:
console.log("parseFloat('3.14159'):", parseFloat('3.14159'));       // 3.14159
console.log("parseFloat('3.14abc'):", parseFloat('3.14abc'));       // 3.14 (ignora 'abc')
console.log("parseFloat('  42.5  '):", parseFloat('  42.5  '));     // 42.5 (ignora espacios)
console.log("parseFloat('abc3.14'):", parseFloat('abc3.14'));       // NaN

// 4. Convertir un número a string con formato específico:
let numeroGrande = 1234567890;

let numeroFormateado = numeroGrande.toLocaleString('es-ES'); // Formato español
// ANÁLISIS DETALLADO de toLocaleString():
// - Formatea números según convenciones regionales
// - Primer parámetro: código de idioma/región (BCP 47)
// - Segundo parámetro opcional: objeto de opciones
// - Maneja separadores de miles, decimales, moneda, etc.
// - Muy útil para interfaces de usuario internacionales

console.log("Número formateado:", numeroFormateado); // Salida: "1.234.567.890"
console.log("Número formateado con coma:", numeroGrande.toLocaleString('en-US')); // Salida: "1,234,567,890"

// EJEMPLOS AVANZADOS de toLocaleString():

// Con opciones de formato:
console.log("Como moneda EUR:", numeroGrande.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'
})); // "1.234.567.890,00 €"

console.log("Como moneda USD:", numeroGrande.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
})); // "$1,234,567,890.00"

console.log("Como porcentaje:", (0.75).toLocaleString('es-ES', {
    style: 'percent'
})); // "75 %"

// Control de decimales:
console.log("Con 2 decimales:", (123.456789).toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})); // "123,46"

// MÉTODOS ADICIONALES de formateo:

// toFixed() - número fijo de decimales:
console.log("toFixed(2):", (123.456789).toFixed(2)); // "123.46"

// toPrecision() - número específico de dígitos significativos:
console.log("toPrecision(4):", (123.456789).toPrecision(4)); // "123.5"

// toExponential() - notación exponencial:
console.log("toExponential():", (1234567890).toExponential()); // "1.23456789e+9"

// FUNCIONES UTILITARIAS para conversiones seguras:

function stringToNumber(str, defaultValue = 0) {
    const num = Number(str);
    return isNaN(num) ? defaultValue : num;
}

function stringToInt(str, base = 10, defaultValue = 0) {
    const num = parseInt(str, base);
    return isNaN(num) ? defaultValue : num;
}

function numberToString(num, locale = 'es-ES', options = {}) {
    if (typeof num !== 'number' || isNaN(num)) {
        return '0';
    }
    return num.toLocaleString(locale, options);
}

// Uso de funciones utilitarias:
console.log("Conversión segura:", stringToNumber("abc", -1)); // -1 (valor por defecto)
console.log("Entero seguro:", stringToInt("123abc", 10, 0)); // 123
console.log("Formato seguro:", numberToString(1234.56)); // "1.234,56"

// VALIDACIÓN antes de convertir:

function esNumeroValido(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function validarYConvertir(input) {
    const trimmed = input.toString().trim();
    
    if (trimmed === '') {
        return { valido: false, error: 'String vacío' };
    }
    
    if (!esNumeroValido(trimmed)) {
        return { valido: false, error: 'No es un número válido' };
    }
    
    return { 
        valido: true, 
        numero: Number(trimmed),
        entero: parseInt(trimmed, 10),
        decimal: parseFloat(trimmed)
    };
}

// Ejemplos de validación:
console.log("Validar '123.45':", validarYConvertir('123.45'));
console.log("Validar 'abc':", validarYConvertir('abc'));
console.log("Validar '':", validarYConvertir(''));

// CASOS ESPECIALES importantes:

// Números muy grandes:
const numeroMuyGrande = 9007199254740991; // Number.MAX_SAFE_INTEGER
console.log("Número muy grande:", numeroMuyGrande.toString());

// Precisión de punto flotante:
console.log("Precisión:", (0.1 + 0.2).toString()); // "0.30000000000000004"
console.log("Precisión corregida:", (0.1 + 0.2).toFixed(2)); // "0.30"

// Números y fechas en cadenas:
let fechaString = "2023-10-05";
let fechaNumero = Date.parse(fechaString);
console.log("Fecha como número:", fechaNumero); // Milisegundos desde 1970-01-01

// Asegurando tipos en funciones:
function procesarNumero(num) {
    num = Number(num);
    if (isNaN(num)) {
        console.log("Valor no es un número válido.");
        return;
    }
    console.log("Número procesado:", num);
}

procesarNumero("42");
procesarNumero("abc");

// Resumen de conversiones:

// Número a string:
console.log("Número a string:", (123).toString()); // "123"

// String a número:
console.log("String a número:", Number("123")); // 123

// String a entero:
console.log("String a entero:", parseInt("123px", 10)); // 123

// String a decimal:
console.log("String a decimal:", parseFloat("123.45abc")); // 123.45

// String con formato a número:
let precioString = "$1,234.56";
let precioNumero = Number(precioString.replace(/[^0-9.-]+/g,""));
console.log("Precio como número:", precioNumero); // 1234.56

// Número a string con formato:
let saldo = 1234.56;
let saldoString = saldo.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
console.log("Saldo como string:", saldoString); // "1.234,56 €"

// Manejo de errores en conversiones:
function convertirConError(str) {
    let numero = Number(str);
    if (isNaN(numero)) {
        throw new Error(`"${str}" no se puede convertir a número.`);
    }
    return numero;
}

try {
    console.log(convertirConError("456"));
    console.log(convertirConError("abc"));
} catch (e) {
    console.log("Error de conversión:", e.message);
}

// Fin del documento de conversión.

