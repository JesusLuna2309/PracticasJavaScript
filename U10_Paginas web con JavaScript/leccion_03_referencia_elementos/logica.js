// MÉTODOS DE SELECCIÓN DE ELEMENTOS EN EL DOM:
// Guía completa de todos los métodos disponibles para encontrar elementos

// ===== MÉTODOS BÁSICOS DE SELECCIÓN =====

// Método getElementById:
let boton1 = document.getElementById('boton1');
console.log(boton1);
// ANÁLISIS DETALLADO:
// - getElementById: Busca UN elemento por su atributo id ÚNICO
// - Parámetro: String con el id (SIN el símbolo #)
// - Retorna: HTMLElement específico o null si no existe
// - Performance: MUY RÁPIDO (búsqueda optimizada por navegador)
// - Unicidad: Debe haber solo UN elemento con ese id en el documento

// CASOS DE USO:
// ✅ Elementos únicos e importantes (formularios principales, contenedores clave)
// ✅ Cuando necesitas acceso directo y rápido
// ❌ Para elementos repetitivos o dinámicos

// VERIFICACIÓN SEGURA:
/*
if (boton1) {
    console.log('Botón encontrado:', boton1.tagName, boton1.id);
} else {
    console.warn('Elemento con id "boton1" no encontrado');
}
*/

// Método getElementsByClassName:
let botones = document.getElementsByClassName('boton-redondo');
console.log(botones);
// ANÁLISIS DETALLADO:
// - getElementsByClassName: Busca MÚLTIPLES elementos por clase CSS
// - Parámetro: String con nombre de clase (SIN el punto .)
// - Retorna: HTMLCollection (colección "viva" que se actualiza automáticamente)
// - Performance: Rápido, pero menos que getElementById
// - Flexibilidad: Puede buscar múltiples clases: 'clase1 clase2'

// CARACTERÍSTICAS de HTMLCollection:
// - Live collection: Se actualiza si DOM cambia
// - length: Cantidad de elementos
// - [index]: Acceso por índice
// - item(index): Método alternativo de acceso
// - namedItem(name): Acceso por name o id

// EJEMPLO PRÁCTICO:
/*
console.log('Cantidad de botones:', botones.length);
console.log('Primer botón:', botones[0]);
console.log('Es HTMLCollection:', botones instanceof HTMLCollection); // true

// Iteración segura:
for (let i = 0; i < botones.length; i++) {
    console.log(`Botón ${i}:`, botones[i]);
}

// O convertir a array:
const botonesArray = Array.from(botones);
botonesArray.forEach((boton, index) => {
    console.log(`Botón ${index}:`, boton);
});
*/

// Método getElementsByTagName:
let imagenes = document.getElementsByTagName('img');
console.log(imagenes);
// ANÁLISIS DETALLADO:
// - getElementsByTagName: Busca elementos por nombre de etiqueta HTML
// - Parámetro: String con nombre de tag (sin < >)
// - Retorna: HTMLCollection de TODOS los elementos de ese tipo
// - Performance: Muy rápido para tags comunes
// - Uso: Selección masiva por tipo de elemento

// CASOS DE USO COMUNES:
/*
// Todas las imágenes del documento:
const todasLasImagenes = document.getElementsByTagName('img');

// Todos los enlaces:
const todosLosEnlaces = document.getElementsByTagName('a');

// Todos los inputs:
const todosLosInputs = document.getElementsByTagName('input');

// Inspección masiva:
console.log(`Documento contiene: 
    ${todasLasImagenes.length} imágenes,
    ${todosLosEnlaces.length} enlaces,
    ${todosLosInputs.length} inputs`);
*/

// ===== MÉTODOS MODERNOS QUERY =====

// Método querySelector:
let boton2 = document.querySelector('#boton1');
console.log(boton2);
// ANÁLISIS DETALLADO:
// - querySelector: Busca el PRIMER elemento que coincida con selector CSS
// - Parámetro: Cualquier selector CSS válido
// - Retorna: Primer HTMLElement encontrado o null
// - Performance: Más lento que métodos específicos, pero más flexible
// - Flexibilidad: Acepta selectores complejos

// EJEMPLOS DE SELECTORES:
/*
// Por ID:
document.querySelector('#miId')

// Por clase:
document.querySelector('.miClase')

// Por atributo:
document.querySelector('[name="usuario"]')

// Selectores complejos:
document.querySelector('div.container > p.destacado')
document.querySelector('input[type="email"]:focus')
document.querySelector('.galeria img:first-child')

// Pseudo-clases:
document.querySelector('button:hover')
document.querySelector('input:checked')
document.querySelector('li:nth-child(3)')
*/

// COMPARACIÓN querySelector vs getElementById:
/*
// Ambos buscan el mismo elemento:
const porId = document.getElementById('boton1');          // Más rápido
const porQuery = document.querySelector('#boton1');      // Más flexible

console.log(porId === porQuery); // true (mismo elemento)
*/

// Método querySelectorAll:
let botonesQuery = document.querySelectorAll('.boton-redondo');
console.log(botonesQuery);
// ANÁLISIS DETALLADO:
// - querySelectorAll: Busca TODOS los elementos que coincidan
// - Parámetro: Cualquier selector CSS válido
// - Retorna: NodeList ESTÁTICA (no se actualiza si DOM cambia)
// - Performance: Más lento que getElementsByClassName, pero más potente
// - Flexibilidad: Máxima, acepta selectores muy complejos

// DIFERENCIAS NodeList vs HTMLCollection:
/*
console.log('=== COMPARACIÓN ===');
console.log('getElementsByClassName (HTMLCollection):', botones);
console.log('querySelectorAll (NodeList):', botonesQuery);

console.log('HTMLCollection es live:', botones.length);
console.log('NodeList es estática:', botonesQuery.length);

// Agregar elemento dinámicamente:
const nuevoBoton = document.createElement('button');
nuevoBoton.className = 'boton-redondo';
document.body.appendChild(nuevoBoton);

console.log('Después de agregar elemento:');
console.log('HTMLCollection actualizada:', botones.length); // Aumenta automáticamente
console.log('NodeList sin cambios:', botonesQuery.length);  // Permanece igual
*/

// MÉTODOS ESPECÍFICOS: forEach en NodeList
/*
botonesQuery.forEach((boton, index) => {
    console.log(`Botón ${index}:`, boton.id || boton.className);
});

// HTMLCollection NO tiene forEach nativo:
// botones.forEach() // ❌ Error

// Solución para HTMLCollection:
Array.from(botones).forEach((boton, index) => {
    console.log(`Botón HTMLCollection ${index}:`, boton);
});
*/

// ===== MÉTODO ESPECÍFICO PARA FORMULARIOS =====

// Método getElementsByName:
let robot3 = document.getElementsByName('robot3')[0];
console.log(robot3);
// ANÁLISIS DETALLADO:
// - getElementsByName: Busca elementos por atributo 'name'
// - Parámetro: String con valor del atributo name
// - Retorna: NodeList de elementos con ese name
// - Uso principal: Elementos de formulario (inputs, selects, etc.)
// - [0]: Accede al primer elemento (asume que existe)

// CASOS DE USO TÍPICOS:
/*
// Formularios con elementos agrupados:
const opcionesGenero = document.getElementsByName('genero');
const camposRequeridos = document.getElementsByName('requerido');

// Radio buttons agrupados:
const radioButtons = document.getElementsByName('opcion');
const seleccionado = Array.from(radioButtons).find(radio => radio.checked);

// Inputs con mismo name (arrays):
const habilidades = document.getElementsByName('habilidades[]');
*/

// VALIDACIÓN SEGURA:
/*
const elementosRobot = document.getElementsByName('robot3');
if (elementosRobot.length > 0) {
    const robot3 = elementosRobot[0];
    console.log('Robot encontrado:', robot3);
} else {
    console.warn('No se encontró elemento con name="robot3"');
}
*/

// ===== MÉTODOS DE NAVEGACIÓN RELACIONAL =====

// Método closest() - Navegación hacia ARRIBA:
let masCercano = robot3.closest('.galeria');
console.log(masCercano);
// ANÁLISIS DETALLADO:
// - closest(): Busca hacia ARRIBA en la jerarquía DOM
// - Parámetro: Selector CSS para el ancestro buscado
// - Retorna: Primer ancestro que coincida o null
// - Incluye: El elemento actual en la búsqueda
// - Dirección: Solo hacia arriba (padres, abuelos, etc.)

// CÓMO FUNCIONA closest():
/*
// Estructura HTML imaginaria:
// <div class="galeria">           ← OBJETIVO
//   <div class="fila">
//     <div class="item">
//       <img name="robot3">       ← PUNTO DE PARTIDA
//     </div>
//   </div>
// </div>

// La búsqueda va:
// 1. robot3 (img) → ¿tiene clase 'galeria'? NO
// 2. item (div) → ¿tiene clase 'galeria'? NO  
// 3. fila (div) → ¿tiene clase 'galeria'? NO
// 4. galeria (div) → ¿tiene clase 'galeria'? SÍ ✅ ← Retorna este
*/

// EJEMPLOS PRÁCTICOS de closest():
/*
// Encontrar contenedor padre:
const contenedor = elemento.closest('.container');

// Encontrar formulario padre:
const formulario = input.closest('form');

// Encontrar fila de tabla:
const fila = celda.closest('tr');

// Encontrar card component:
const card = elemento.closest('.card');

// Auto-referencia (si el elemento ya coincide):
const mismoBotón = botón.closest('.boton-redondo'); // Retorna el mismo botón
*/

// CASO QUE RETORNA NULL:
const botonCercano = robot3.closest('.boton-redondo');
console.log(botonCercano);
// ANÁLISIS del null:
// - robot3 busca hacia arriba un elemento con clase 'boton-redondo'
// - Los botones están en una rama DIFERENTE del DOM
// - closest() solo busca ANCESTROS, no hermanos ni otros elementos
// - Resultado: null (ningún ancestro tiene esa clase)

// VISUALIZACIÓN del problema:
/*
// DOM Structure:
// <body>
//   <div class="galeria">
//     <img name="robot3">     ← Inicio búsqueda
//   </div>
//   <div class="botones">     ← Botones están AQUÍ (diferente rama)
//     <button class="boton-redondo">
//   </div>
// </body>

// closest() NO puede "saltar" a otras ramas
*/

// ALTERNATIVAS para encontrar elementos en otras ramas:
/*
// Subir al ancestro común y luego buscar:
const ancestroComun = robot3.closest('body');
const botonEnOtraRama = ancestroComun.querySelector('.boton-redondo');

// O directamente desde document:
const botonDesdeCerda = document.querySelector('.boton-redondo');
*/

// NAVEGACIÓN DIRECTA AL PADRE:
let elementoPadre = robot3.parentElement;
console.log(elementoPadre);
// ANÁLISIS DETALLADO:
// - parentElement: Acceso DIRECTO al elemento padre inmediato
// - Retorna: HTMLElement padre o null (si es document)
// - Diferencia con parentNode: parentElement solo retorna elementos, parentNode puede retornar cualquier nodo
// - Uso: Navegación simple de un nivel hacia arriba

// PROPIEDADES RELACIONADAS de navegación:
/*
// Navegación vertical (padres/hijos):
console.log('Padre directo:', robot3.parentElement);
console.log('Padre nodo:', robot3.parentNode); // Incluye nodos de texto
console.log('Primer hijo:', elementoPadre.firstElementChild);
console.log('Último hijo:', elementoPadre.lastElementChild);
console.log('Hijos elementos:', elementoPadre.children);
console.log('Hijos nodos:', elementoPadre.childNodes);

// Navegación horizontal (hermanos):
console.log('Hermano siguiente:', robot3.nextElementSibling);
console.log('Hermano anterior:', robot3.previousElementSibling);
console.log('Siguiente nodo:', robot3.nextSibling);
console.log('Nodo anterior:', robot3.previousSibling);
*/

// ===== COMPARACIÓN DE RENDIMIENTO =====

// BENCHMARKING de métodos:
/*
console.time('getElementById');
for (let i = 0; i < 1000; i++) {
    document.getElementById('boton1');
}
console.timeEnd('getElementById'); // Más rápido

console.time('querySelector');
for (let i = 0; i < 1000; i++) {
    document.querySelector('#boton1');
}
console.timeEnd('querySelector'); // Más lento pero flexible

console.time('getElementsByClassName');
for (let i = 0; i < 1000; i++) {
    document.getElementsByClassName('boton-redondo');
}
console.timeEnd('getElementsByClassName'); // Rápido

console.time('querySelectorAll');
for (let i = 0; i < 1000; i++) {
    document.querySelectorAll('.boton-redondo');
}
console.timeEnd('querySelectorAll'); // Más lento pero potente
*/

// ===== MEJORES PRÁCTICAS =====

// ✅ CUÁNDO USAR CADA MÉTODO:

// getElementById → Elementos únicos conocidos
/*
const formularioPrincipal = document.getElementById('form-login');
*/

// getElementsByClassName → Múltiples elementos, rendimiento crítico
/*
const botonesAccion = document.getElementsByClassName('btn-action');
*/

// querySelector → Selectores complejos, un elemento
/*
const primerInputRequerido = document.querySelector('input[required]:first-of-type');
*/

// querySelectorAll → Selectores complejos, múltiples elementos
/*
const enlacesExternos = document.querySelectorAll('a[href^="http"]:not([href*="midominio.com"])');
*/

// closest → Encontrar contenedores/ancestros
/*
const modal = clickedElement.closest('.modal');
*/

// parentElement → Navegación simple hacia arriba
/*
const contenedorPadre = elemento.parentElement;
*/

// ===== PATRONES COMUNES =====

// Patrón: Delegación de eventos
/*
document.addEventListener('click', (event) => {
    // Buscar si el clic fue en un botón específico:
    const botonAccion = event.target.closest('.boton-accion');
    if (botonAccion) {
        manejarClickBoton(botonAccion);
    }
    
    // O buscar contenedor específico:
    const tarjeta = event.target.closest('.tarjeta');
    if (tarjeta) {
        manejarClickTarjeta(tarjeta);
    }
});
*/

// Patrón: Búsqueda segura con fallback
/*
const buscarElementoSeguro = (selector) => {
    const elemento = document.querySelector(selector);
    if (!elemento) {
        console.warn(`Elemento no encontrado: ${selector}`);
        return null;
    }
    return elemento;
};

const botonImportante = buscarElementoSeguro('#boton-importante');
if (botonImportante) {
    botonImportante.addEventListener('click', manejarClick);
}
*/

// Patrón: Caching de elementos frecuentes
/*
class ElementCache {
    constructor() {
        this.cache = new Map();
    }
    
    getElementById(id) {
        if (!this.cache.has(id)) {
            this.cache.set(id, document.getElementById(id));
        }
        return this.cache.get(id);
    }
    
    querySelector(selector) {
        if (!this.cache.has(selector)) {
            this.cache.set(selector, document.querySelector(selector));
        }
        return this.cache.get(selector);
    }
}

const elementCache = new ElementCache();
const botonCacheado = elementCache.getElementById('boton1'); // Solo busca una vez
*/

// ===== DEBUGGING Y VALIDACIÓN =====

// Herramientas de debugging:
/*
const debugearElemento = (elemento, nombre = 'Elemento') => {
    if (!elemento) {
        console.error(`${nombre} no encontrado`);
        return;
    }
    
    console.group(`🔍 Debug: ${nombre}`);
    console.log('Elemento:', elemento);
    console.log('Tag:', elemento.tagName);
    console.log('ID:', elemento.id || 'Sin ID');
    console.log('Classes:', elemento.className || 'Sin clases');
    console.log('Padre:', elemento.parentElement);
    console.log('Hijos:', elemento.children.length);
    console.log('Posición:', elemento.getBoundingClientRect());
    console.groupEnd();
};

// Uso:
debugearElemento(robot3, 'Robot 3');
debugearElemento(masCercano, 'Galería más cercana');
*/

// Validación de existencia:
/*
const validarElementos = () => {
    const elementos = {
        'Botón 1': document.getElementById('boton1'),
        'Botones redondos': document.getElementsByClassName('boton-redondo'),
        'Imágenes': document.getElementsByTagName('img'),
        'Robot 3': document.getElementsByName('robot3')[0]
    };
    
    Object.entries(elementos).forEach(([nombre, elemento]) => {
        if (!elemento || (elemento.length !== undefined && elemento.length === 0)) {
            console.warn(`❌ ${nombre} no encontrado`);
        } else {
            console.log(`✅ ${nombre} encontrado`);
        }
    });
};

validarElementos();
*/
