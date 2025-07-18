//Hay muchos otros métodos que podemos usar con cadenas de caracteres en JavaScript.
// Aquí hay algunos ejemplos de métodos útiles:

//Metodo Trim: Elimina espacios en blanco al inicio y al final de una cadena.
const textoConEspacios = "   Hola, mundo!   ";
console.log("Texto original:", textoConEspacios); //Salida: Texto original:    Hola, mundo!   
console.log("Texto sin espacios:", textoConEspacios.trim()); //Salida: Texto sin espacios: Hola, mundo!

// ANÁLISIS PROFUNDO de trim():
// - Elimina TODOS los caracteres de espacio en blanco al inicio y final
// - Incluye: espacios ( ), tabulaciones (\t), saltos de línea (\n), retornos de carro (\r)
// - NO modifica espacios en el INTERIOR de la cadena
// - Retorna una NUEVA cadena (inmutabilidad)
// - Es case-sensitive (distingue mayúsculas/minúsculas)

// VARIANTES de trim():
const textoComplejo = "\n\t  Hola mundo  \r\n";
console.log("trim():", `"${textoComplejo.trim()}"`); // "Hola mundo"
console.log("trimStart():", `"${textoComplejo.trimStart()}"`); // "Hola mundo  \r\n"
console.log("trimEnd():", `"${textoComplejo.trimEnd()}"`); // "\n\t  Hola mundo"
// ALIAS: trimLeft() = trimStart(), trimRight() = trimEnd() (menos recomendados)

// CASOS DE USO PRÁCTICOS:
function limpiarEntradaUsuario(input) {
    return input ? input.trim() : "";
}

const formulario = {
    nombre: "  Juan Pérez  ",
    email: " juan@email.com\n",
    telefono: "\t123-456-789  "
};

// Limpiar todos los campos:
Object.keys(formulario).forEach(key => {
    formulario[key] = formulario[key].trim();
});
console.log("Formulario limpio:", formulario);

//Metodo PadStart y PadEnd: Añade caracteres al inicio o al final de una cadena hasta alcanzar una longitud específica.
const numero = "5";
console.log("Número con ceros al inicio:", numero.padStart(3, "0")); //Salida: Número con ceros al inicio: 005
console.log("Número con ceros al final:", numero.padEnd(3, "0")); //Salida: Número con ceros al final: 500  

// ANÁLISIS DETALLADO de padStart() y padEnd():
// Sintaxis: string.padStart(longitudDeseada, caracterDelleno)
// - Si la cadena YA es >= longitudDeseada, retorna la cadena original
// - Si caracterDelleno no se especifica, usa espacios por defecto
// - Si caracterDelleno es más largo que lo necesario, se trunca
// - Si caracterDelleno es más corto, se repite hasta completar

// EJEMPLOS AVANZADOS:
console.log("Padding con espacios:", "Hi".padStart(5)); // "   Hi"
console.log("Padding repetido:", "X".padStart(5, "AB")); // "ABABX"
console.log("Sin padding necesario:", "Hola".padStart(3, "0")); // "Hola" (sin cambios)

// CASOS DE USO PRÁCTICOS:

// 1. Formateo de números con ceros a la izquierda:
function formatearNumero(num, digitos = 3) {
    return String(num).padStart(digitos, "0");
}
console.log("Números formateados:");
console.log(formatearNumero(1));    // "001"
console.log(formatearNumero(42));   // "042"
console.log(formatearNumero(123));  // "123"

// 2. Formateo de tiempo:
function formatearTiempo(horas, minutos, segundos) {
    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}
console.log("Tiempo:", formatearTiempo(9, 5, 3)); // "09:05:03"

// 3. Alineación de texto en columnas:
const productos = [
    { nombre: "Laptop", precio: 999.99 },
    { nombre: "Mouse", precio: 25.50 },
    { nombre: "Teclado", precio: 75 }
];

console.log("Lista de productos:");
productos.forEach(p => {
    const nombre = p.nombre.padEnd(10, ".");
    const precio = `$${p.precio}`.padStart(8);
    console.log(`${nombre}${precio}`);
});
// Salida:
// Laptop....  $999.99
// Mouse.....   $25.5
// Teclado...     $75

//Metodo charAt: Devuelve el carácter en una posición específica de la cadena.
const palabra = "JavaScript";
console.log("Carácter en la posición 4:", palabra.charAt(4)); //Salida: Carácter en la posición 4: S

// ANÁLISIS DETALLADO de charAt():
// - Los índices empiezan en 0
// - Si el índice está fuera de rango, retorna una cadena vacía ""
// - NO lanza error con índices inválidos (a diferencia del acceso con [])
// - Siempre retorna un string, nunca undefined

// COMPARACIÓN con acceso directo por índice:
console.log("charAt(4):", palabra.charAt(4));     // "S"
console.log("Acceso directo [4]:", palabra[4]);   // "S"
console.log("charAt(100):", palabra.charAt(100)); // "" (cadena vacía)
console.log("Acceso directo [100]:", palabra[100]); // undefined

// CASOS DE USO PRÁCTICOS:

// 1. Validación de caracteres específicos:
function validarPrimerCaracter(texto, caracteresValidos) {
    const primerChar = texto.charAt(0).toLowerCase();
    return caracteresValidos.includes(primerChar);
}
console.log("Válido:", validarPrimerCaracter("JavaScript", "jJ")); // true

// 2. Análisis de caracteres:
function analizarTexto(texto) {
    const analisis = {
        longitud: texto.length,
        primerCaracter: texto.charAt(0),
        ultimoCaracter: texto.charAt(texto.length - 1),
        caracterMedio: texto.charAt(Math.floor(texto.length / 2))
    };
    return analisis;
}
console.log("Análisis:", analizarTexto("JavaScript"));

// 3. Crear iniciales seguras:
function crearIniciales(nombreCompleto) {
    return nombreCompleto
        .split(" ")
        .map(nombre => nombre.charAt(0).toUpperCase())
        .join("");
}
console.log("Iniciales:", crearIniciales("Juan Carlos Pérez")); // "JCP"

//Metodo search: Busca una subcadena y devuelve la posición de la primera coincidencia.
const textoBusqueda = "Encuentra la palabra clave en este texto.";
const posicion = textoBusqueda.search("palabra");
console.log("Posición de 'palabra':", posicion); //Salida: Posición de 'palabra': 10

// ANÁLISIS DETALLADO de search():
// - Retorna el ÍNDICE de la primera coincidencia
// - Retorna -1 si NO encuentra la subcadena
// - Acepta tanto strings como expresiones regulares
// - Es case-sensitive por defecto
// - Solo encuentra la PRIMERA ocurrencia (no todas)

// EJEMPLOS AVANZADOS:

// Con string simple:
console.log("Búsqueda simple:", textoBusqueda.search("la")); // 10 (primera 'la' en 'palabra')

// Con expresión regular:
console.log("Búsqueda regex - dígito:", "abc123def".search(/\d/)); // 3
console.log("Búsqueda regex - insensitive:", textoBusqueda.search(/PALABRA/i)); // 10

// No encontrado:
console.log("No encontrado:", textoBusqueda.search("xyz")); // -1

// COMPARACIÓN con otros métodos de búsqueda:

const textoComparacion = "JavaScript es genial. JavaScript rocks!";

// indexOf() - similar a search() pero solo acepta strings:
console.log("indexOf:", textoComparacion.indexOf("JavaScript")); // 0
console.log("search:", textoComparacion.search("JavaScript"));   // 0

// includes() - solo verifica existencia (retorna boolean):
console.log("includes:", textoComparacion.includes("JavaScript")); // true

// match() - extrae coincidencias (retorna array o null):
console.log("match:", textoComparacion.match(/JavaScript/g)); // ["JavaScript", "JavaScript"]

// CASOS DE USO PRÁCTICOS:

// 1. Validar formato de email:
function validarFormatoBasico(email) {
    const posicionArroba = email.search("@");
    const posicionPunto = email.search(/\./);
    
    return posicionArroba > 0 && 
           posicionPunto > posicionArroba && 
           posicionPunto < email.length - 1;
}
console.log("Email válido:", validarFormatoBasico("user@domain.com")); // true

// 2. Encontrar posición de palabras clave:
function encontrarPalabrasClave(texto, palabras) {
    const resultado = {};
    palabras.forEach(palabra => {
        const posicion = texto.toLowerCase().search(palabra.toLowerCase());
        resultado[palabra] = posicion;
    });
    return resultado;
}

const palabrasClave = ["JavaScript", "genial", "xyz"];
console.log("Posiciones:", encontrarPalabrasClave(textoComparacion, palabrasClave));

// 3. Extraer contexto alrededor de una palabra:
function extraerContexto(texto, palabra, caracteres = 20) {
    const posicion = texto.search(palabra);
    if (posicion === -1) return null;
    
    const inicio = Math.max(0, posicion - caracteres);
    const fin = Math.min(texto.length, posicion + palabra.length + caracteres);
    
    return {
        posicion,
        contexto: texto.slice(inicio, fin),
        palabraEncontrada: palabra
    };
}

console.log("Contexto:", extraerContexto(textoBusqueda, "palabra", 10));

// MÉTODOS ADICIONALES útiles:

// 1. startsWith() y endsWith() (ES6):
const url = "https://www.ejemplo.com";
console.log("Empieza con https:", url.startsWith("https")); // true
console.log("Termina con .com:", url.endsWith(".com")); // true

// 2. repeat() - repite la cadena:
console.log("Repetir:", "Ha".repeat(3)); // "HaHaHa"
console.log("Línea divisoria:", "-".repeat(20)); // "--------------------"

// 3. localeCompare() - comparación sensible a idioma:
const nombres = ["ñoño", "nana", "niño"];
nombres.sort((a, b) => a.localeCompare(b, 'es'));
console.log("Ordenado en español:", nombres); // ["nana", "niño", "ñoño"]

// 4. normalize() - normalización Unicode:
const texto1 = "café"; // é como un carácter
const texto2 = "cafe\u0301"; // é como e + acento
console.log("Iguales sin normalizar:", texto1 === texto2); // false
console.log("Iguales normalizados:", texto1.normalize() === texto2.normalize()); // true

// FUNCIÓN UTILITARIA que combina varios métodos:
function procesarTexto(texto) {
    return {
        original: texto,
        limpio: texto.trim(),
        longitud: texto.trim().length,
        primerCaracter: texto.trim().charAt(0),
        ultimoCaracter: texto.trim().charAt(texto.trim().length - 1),
        contienePalabras: palabra => texto.toLowerCase().search(palabra.toLowerCase()) !== -1,
        formatearId: () => texto.trim().toLowerCase().replace(/\s+/g, "_"),
        truncar: (max = 50) => texto.length > max ? texto.slice(0, max - 3) + "..." : texto
    };
}

const procesado = procesarTexto("  Este es un texto de ejemplo  ");
console.log("Texto procesado:", procesado.formatearId()); // "este_es_un_texto_de_ejemplo"
console.log("Contiene 'ejemplo':", procesado.contienePalabras("ejemplo")); // true