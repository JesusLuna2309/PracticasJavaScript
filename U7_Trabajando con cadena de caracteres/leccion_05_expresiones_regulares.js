//Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas de texto.
// Son muy útiles para validar formatos, buscar patrones, reemplazar texto, etc.

// Verificamos si un texto contiene un patrón específico:
const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// DESGLOSE DETALLADO del patrón de email:
// ^ = Inicio de la cadena (anchor de inicio)
// [a-zA-Z0-9._-] = Clase de caracteres que acepta:
//   - a-z: letras minúsculas
//   - A-Z: letras mayúsculas  
//   - 0-9: dígitos
//   - ._- : punto, guión bajo, guión
// + = Uno o más del conjunto anterior (cuantificador)
// @ = Símbolo arroba literal (debe estar presente)
// [a-zA-Z0-9.-] = Clase de caracteres para el dominio:
//   - Letras, números, punto y guión
// + = Uno o más caracteres del dominio
// \. = Punto literal (escapado porque . tiene significado especial en regex)
// [a-zA-Z] = Solo letras para la extensión del dominio
// {2,} = Al menos 2 caracteres (cuantificador con mínimo)
// $ = Final de la cadena (anchor de final)

const email1 = "usuario@ejemplo.com";      // Válido: cumple el patrón
const email2 = "usuario@ejemplo";          // Inválido: falta extensión (.com, .org, etc.)
const email3 = "otro.usuario@sub.domain.co.uk"; // Válido: dominios complejos permitidos

function validarEmail(email) {
    return patronEmail.test(email);
    // test() es un método de RegExp que:
    // - Retorna true si encuentra una coincidencia
    // - Retorna false si no encuentra coincidencia
    // - Es más eficiente que match() cuando solo necesitas saber si coincide
}

console.log("Email 1 válido:", validarEmail(email1)); // true
console.log("Email 2 válido:", validarEmail(email2)); // false - falta extensión
console.log("Email 3 válido:", validarEmail(email3)); // true

// EJEMPLOS ADICIONALES de validación:
console.log("Email con números:", validarEmail("user123@domain.org")); // true
console.log("Email con caracteres especiales:", validarEmail("user.name@sub-domain.com")); // true
console.log("Email inválido - espacios:", validarEmail("user @domain.com")); // false
console.log("Email inválido - sin @:", validarEmail("userdomain.com")); // false

//Reemplezar texto usando expresiones regulares:

const poema = `Por una mirada, un mundo,
por una sonrisa, un cielo,
por un beso… ¡yo no sé
qué te diera por un beso!`;

const palabraReemplazar = "beso";
const reemplazo = "abrazo";
const regex = new RegExp(palabraReemplazar, 'gi'); 
// EXPLICACIÓN de new RegExp():
// - Primer parámetro: patrón a buscar (string o regex literal)
// - Segundo parámetro: banderas (flags):
//   * 'g' = global: busca TODAS las ocurrencias, no solo la primera
//   * 'i' = insensitive: ignora mayúsculas/minúsculas (case-insensitive)
//   * Otros flags disponibles: 'm' (multiline), 's' (dotAll), 'u' (unicode)

const poemaModificado = poema.replace(regex, reemplazo);
// replace() con regex:
// - Si la regex tiene flag 'g', reemplaza TODAS las ocurrencias
// - Sin flag 'g', solo reemplaza la primera ocurrencia
// - Retorna una nueva cadena (inmutabilidad)
console.log("Poema modificado:\n", poemaModificado);

// EJEMPLOS AVANZADOS de expresiones regulares:

// 1. DIFERENTES FORMAS de crear regex:
const regexLiteral = /patron/gi;           // Literal - más común y eficiente
const regexConstructor = new RegExp("patron", "gi"); // Constructor - útil para patrones dinámicos

// 2. PATRONES COMUNES útiles:

// Validar número de teléfono:
const patronTelefono = /^\+?[\d\s\-\(\)]{10,}$/;
// ^ = inicio, \+? = + opcional, [\d\s\-\(\)] = dígitos, espacios, guiones, paréntesis
// {10,} = al menos 10 caracteres, $ = final

console.log("Teléfono válido:", patronTelefono.test("+34 123 456 789")); // true
console.log("Teléfono válido:", patronTelefono.test("123-456-7890")); // true
console.log("Teléfono inválido:", patronTelefono.test("123")); // false

// Validar contraseña fuerte:
const patronPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// (?=.*[a-z]) = lookahead positivo: debe contener al menos una minúscula
// (?=.*[A-Z]) = debe contener al menos una mayúscula  
// (?=.*\d) = debe contener al menos un dígito
// (?=.*[@$!%*?&]) = debe contener al menos un carácter especial
// [A-Za-z\d@$!%*?&]{8,} = solo estos caracteres, mínimo 8

console.log("Password fuerte:", patronPassword.test("MiPass123!")); // true
console.log("Password débil:", patronPassword.test("123456")); // false

// Extraer números de un texto:
const textoConNumeros = "Tengo 25 años y peso 70.5 kg";
const patronNumeros = /\d+\.?\d*/g; // \d+ = uno o más dígitos, \.? = punto opcional, \d* = dígitos opcionales
const numerosEncontrados = textoConNumeros.match(patronNumeros);
console.log("Números encontrados:", numerosEncontrados); // ["25", "70.5"]

// 3. MÉTODOS importantes de regex:

// test() - verifica si hay coincidencia (retorna boolean)
console.log("Test:", /\d+/.test("abc123")); // true

// match() - extrae coincidencias (retorna array o null)
const coincidencias = "abc123def456".match(/\d+/g);
console.log("Match:", coincidencias); // ["123", "456"]

// search() - encuentra posición de la primera coincidencia
const posicion = "abc123def".search(/\d+/);
console.log("Search posición:", posicion); // 3

// replace() - reemplaza coincidencias
const textoReemplazado = "abc123def456".replace(/\d+/g, "XXX");
console.log("Replace:", textoReemplazado); // "abcXXXdefXXX"

// split() - divide string usando regex como delimitador
const partes = "uno,dos;tres:cuatro".split(/[,:;]/);
console.log("Split con regex:", partes); // ["uno", "dos", "tres", "cuatro"]

// 4. GRUPOS de captura:

// Extraer partes específicas de una fecha:
const fechaTexto = "Hoy es 15/12/2023";
const patronFecha = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
const resultadoFecha = fechaTexto.match(patronFecha);
console.log("Fecha completa:", resultadoFecha[0]); // "15/12/2023"
console.log("Día:", resultadoFecha[1]);           // "15"
console.log("Mes:", resultadoFecha[2]);           // "12"
console.log("Año:", resultadoFecha[3]);           // "2023"

// Reformatear fecha usando grupos:
const fechaReformateada = fechaTexto.replace(patronFecha, "$3-$2-$1");
console.log("Fecha reformateada:", fechaReformateada); // "Hoy es 2023-12-15"

// 5. LOOKAHEADS y LOOKBEHINDS (avanzado):

// Lookahead positivo - buscar palabra seguida de otra:
const textoLook = "JavaScript es genial pero Java es diferente";
const palabrasAntesDeEs = textoLook.match(/\w+(?= es)/g);
console.log("Palabras antes de 'es':", palabrasAntesDeEs); // ["JavaScript", "Java"]

// 6. CARACTERES de escape importantes:
// \d = dígito [0-9]
// \w = carácter de palabra [a-zA-Z0-9_]
// \s = espacio en blanco
// \D = NO dígito
// \W = NO carácter de palabra
// \S = NO espacio en blanco
// . = cualquier carácter (excepto salto de línea)
// * = cero o más
// + = uno o más
// ? = cero o uno (opcional)
// {n} = exactamente n veces
// {n,} = n o más veces
// {n,m} = entre n y m veces

// 7. VALIDADORES prácticos:

// URL válida:
const patronURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:/~\+#]*)?$/;
console.log("URL válida:", patronURL.test("https://www.ejemplo.com")); // true

// Código postal español:
const patronCP = /^[0-5]\d{4}$/; // Primer dígito 0-5, seguido de 4 dígitos
console.log("CP válido:", patronCP.test("28001")); // true (Madrid)
console.log("CP inválido:", patronCP.test("99999")); // false

// Nombre de usuario (alfanumérico, guiones, mín 3 max 20):
const patronUsuario = /^[a-zA-Z0-9_-]{3,20}$/;
console.log("Usuario válido:", patronUsuario.test("mi_usuario123")); // true
console.log("Usuario inválido:", patronUsuario.test("ab")); // false (muy corto)

// 8. PERFORMANCE y buenas prácticas:

// ✅ BUENO: Compilar regex una vez y reutilizar
const regexReutilizable = /\d+/g;
function encontrarNumeros(texto) {
    regexReutilizable.lastIndex = 0; // Reset para regex global
    return texto.match(regexReutilizable);
}

// ❌ MALO: Crear regex en cada llamada
function encontrarNumerosMalo(texto) {
    return texto.match(/\d+/g); // Se compila cada vez
}

// 9. DEBUGGING de regex:
function debugRegex(patron, texto) {
    console.log(`Patrón: ${patron}`);
    console.log(`Texto: "${texto}"`);
    console.log(`Coincide: ${patron.test(texto)}`);
    console.log(`Coincidencias:`, texto.match(patron));
    console.log('---');
}

debugRegex(/\b\w{4}\b/g, "Esta es una prueba con palabras"); // Palabras de exactamente 4 letras

// 10. CASOS EDGE importantes:

// Regex global mantiene estado:
const regexGlobal = /\d+/g;
console.log("Primera búsqueda:", regexGlobal.exec("123 456")); // ["123"]
console.log("Segunda búsqueda:", regexGlobal.exec("123 456")); // ["456"]
console.log("Tercera búsqueda:", regexGlobal.exec("123 456")); // null (reinicia)

// String vacío:
console.log("String vacío:", /.*/.test("")); // true (coincide con cero caracteres)

// Caracteres especiales que necesitan escape:
const caracteresEspeciales = /[\[\](){}.*+?^$|\\]/g;
console.log("Escapar:", "Hola [mundo]".replace(caracteresEspeciales, "\\$&"));
