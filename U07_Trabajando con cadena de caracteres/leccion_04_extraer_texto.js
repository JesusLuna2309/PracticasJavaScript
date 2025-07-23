const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

//Toma el texto desde el indice hasta el indice 5
const textoEstraido = texto.substring(0, 5); // Extrae desde el inicio hasta el índice 5
// FUNCIONAMIENTO de substring():
// - Parámetros: substring(inicio, fin)
// - El índice de inicio está INCLUIDO
// - El índice de fin está EXCLUIDO
// - Si inicio > fin, substring() intercambia automáticamente los valores
// - Los valores negativos se convierten a 0
// - Si fin es undefined o mayor que la longitud, se usa la longitud del string
// RESULTADO: "Lorem" (caracteres en posiciones 0, 1, 2, 3, 4)
console.log("Texto extraído:", textoEstraido); // Imprime: "Lorem"

//Extrae los 10 primeros caracteres 
const primerosDiezCaracteres = texto.slice(undefined, 10); // Extrae desde el inicio hasta el índice 10
// FUNCIONAMIENTO de slice():
// - Parámetros: slice(inicio, fin)
// - undefined como primer parámetro se interpreta como 0
// - El índice de inicio está INCLUIDO
// - El índice de fin está EXCLUIDO
// - Los índices negativos cuentan desde el final del string
// - Si inicio > fin, retorna una cadena vacía ""
// RESULTADO: "Lorem ipsu" (caracteres en posiciones 0-9)
console.log("Primeros 10 caracteres:", primerosDiezCaracteres); // Imprime: "Lorem ipsu"

//Toma todo el texto excepto los 10 primeros caracteres
const textoSinPrimerosDiez = texto.slice(10); // Extrae desde el índice 10 hasta el final
// FUNCIONAMIENTO con un solo parámetro:
// - slice(inicio) extrae desde 'inicio' hasta el final del string
// - Equivale a slice(10, texto.length)
// - Muy útil para "cortar" el inicio de un string
// RESULTADO: todo el texto desde la posición 10 en adelante
console.log("Texto sin primeros 10 caracteres:", textoSinPrimerosDiez); 
// Imprime: "m dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

// Extrae una cadena desde el caracter 5 hasta al 10
const textoDesdeCincoHastaDiez = texto.slice(5, 10); // Extrae desde el índice 5 hasta el índice 10
// ANÁLISIS detallado:
// - Posición 5: 'i' (de "ipsum")
// - Posición 6: 'p'
// - Posición 7: 's'
// - Posición 8: 'u'
// - Posición 9: 'm'
// - Posición 10: ' ' (espacio, NO incluido)
// RESULTADO: "ipsum" sin el espacio final
console.log("Texto desde 5 hasta 10:", textoDesdeCincoHastaDiez); // Imprime: "ipsum"

// EJEMPLOS ADICIONALES para profundizar:

// 1. DIFERENCIAS entre substring() y slice():

// Con índices negativos:
console.log("substring con negativo:", texto.substring(-5, 5)); // "Lorem" (convierte -5 a 0)
console.log("slice con negativo:", texto.slice(-5, -1)); // "qua." (últimos 5 caracteres menos el último)

// Con inicio > fin:
console.log("substring invertido:", texto.substring(10, 5)); // "ipsum" (intercambia automáticamente)
console.log("slice invertido:", texto.slice(10, 5)); // "" (retorna cadena vacía)

// 2. CASOS DE USO PRÁCTICOS:

// Extraer extensión de archivo:
const nombreArchivo = "documento.pdf";
const extension = nombreArchivo.slice(-3); // Últimos 3 caracteres
console.log("Extensión:", extension); // "pdf"

// Extraer dominio de email:
const email = "usuario@ejemplo.com";
const dominio = email.slice(email.indexOf("@") + 1);
console.log("Dominio:", dominio); // "ejemplo.com"

// Crear iniciales:
const nombreCompleto = "Juan Carlos Pérez";
const iniciales = nombreCompleto
    .split(" ")
    .map(palabra => palabra.slice(0, 1).toUpperCase())
    .join("");
console.log("Iniciales:", iniciales); // "JCP"

// 3. MÉTODO substr() (DEPRECATED - no usar en código nuevo):
// const conSubstr = texto.substr(5, 5); // Desde posición 5, tomar 5 caracteres
// console.log("Con substr:", conSubstr); // "ipsum"
// NOTA: substr() está obsoleto, usar slice() o substring()

// 4. EXTRACCIONES AVANZADAS:

// Extraer palabras específicas:
function extraerPalabra(texto, numeroPalabra) {
    const palabras = texto.split(" ");
    return palabras[numeroPalabra - 1] || ""; // numeroPalabra es 1-based
}
console.log("Segunda palabra:", extraerPalabra(texto, 2)); // "ipsum"

// Extraer texto entre delimitadores:
function extraerEntre(texto, inicio, fin) {
    const posInicio = texto.indexOf(inicio);
    const posFin = texto.indexOf(fin, posInicio + inicio.length);
    
    if (posInicio === -1 || posFin === -1) return "";
    
    return texto.slice(posInicio + inicio.length, posFin);
}

const textoConDelimitadores = "El precio es [100 euros] en total";
console.log("Entre corchetes:", extraerEntre(textoConDelimitadores, "[", "]")); // "100 euros"

// 5. VALIDACIONES Y MANEJO DE ERRORES:

function extraerSeguro(texto, inicio, fin = undefined) {
    // Validar que el texto sea un string
    if (typeof texto !== 'string') {
        return "";
    }
    
    // Validar que inicio sea un número
    if (typeof inicio !== 'number') {
        return "";
    }
    
    // Asegurar que inicio esté en rango válido
    inicio = Math.max(0, Math.min(inicio, texto.length));
    
    // Si fin no está definido, extraer hasta el final
    if (fin === undefined) {
        return texto.slice(inicio);
    }
    
    // Validar y ajustar fin
    fin = Math.max(0, Math.min(fin, texto.length));
    
    return texto.slice(inicio, fin);
}

console.log("Extracción segura:", extraerSeguro(texto, 0, 5)); // "Lorem"
console.log("Con índice inválido:", extraerSeguro(texto, -10, 5)); // "Lorem"
console.log("Con texto inválido:", extraerSeguro(null, 0, 5)); // ""

// 6. RENDIMIENTO comparativo:

const textoLargo = "a".repeat(1000000); // 1 millón de caracteres

console.time("substring");
for (let i = 0; i < 10000; i++) {
    textoLargo.substring(0, 100);
}
console.timeEnd("substring");

console.time("slice");
for (let i = 0; i < 10000; i++) {
    textoLargo.slice(0, 100);
}
console.timeEnd("slice");

// RESULTADO: slice() generalmente es ligeramente más rápido

// 7. PATRONES COMUNES:

// Truncar texto con puntos suspensivos:
function truncar(texto, longitud) {
    if (texto.length <= longitud) return texto;
    return texto.slice(0, longitud - 3) + "...";
}
console.log("Truncado:", truncar(texto, 20)); // "Lorem ipsum dolor..."

// Centrar texto:
function centrar(texto, ancho) {
    if (texto.length >= ancho) return texto;
    const espacios = ancho - texto.length;
    const izquierda = Math.floor(espacios / 2);
    const derecha = espacios - izquierda;
    return " ".repeat(izquierda) + texto + " ".repeat(derecha);
}
console.log("Centrado:", `|${centrar("Hola", 10)}|`); // "|   Hola   |"

// Extraer líneas específicas:
function extraerLinea(texto, numeroLinea) {
    const lineas = texto.split('\n');
    return lineas[numeroLinea - 1] || "";
}

// Limpiar espacios al inicio y final de una extracción:
function extraerYLimpiar(texto, inicio, fin) {
    return texto.slice(inicio, fin).trim();
}

// 8. CASOS EDGE importantes:

// String vacío:
const vacio = "";
console.log("String vacío:", vacio.slice(0, 5)); // ""

// Índices fuera de rango:
console.log("Fuera de rango:", texto.slice(1000, 2000)); // ""

// Índices iguales:
console.log("Índices iguales:", texto.slice(5, 5)); // ""

// Solo inicio, mayor que la longitud:
console.log("Inicio mayor que longitud:", texto.slice(1000)); // ""

