// ===== NAVEGACIÓN Y MANIPULACIÓN RECURSIVA DEL DOM =====
// Demostración de recorrido de estructuras jerárquicas y aplicación de estilos

// ===== GENERACIÓN DE COLORES ALEATORIOS =====

function obtenerColorAleatorio() {
  let letras = '0123456789ABCDEF';
  // ANÁLISIS de la cadena hexadecimal:
  // - '0-9': Dígitos decimales (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  // - 'A-F': Letras que representan valores 10-15 en hexadecimal
  // - Total: 16 caracteres = base hexadecimal completa
  // - Hexadecimal: Sistema de numeración base 16 (0-F)

  let color = '#';
  // FORMATO de color hexadecimal:
  // - '#': Prefijo obligatorio que indica notación hexadecimal
  // - Formato completo: #RRGGBB (Red, Green, Blue)
  // - Cada componente: 2 dígitos hex (00-FF = 0-255 en decimal)
  // - Ejemplo: #FF0000 = rojo puro, #00FF00 = verde puro, #0000FF = azul puro

  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
    // DESGLOSE del algoritmo:
    // - Math.random(): Genera número decimal entre 0 (inclusivo) y 1 (exclusivo)
    // - * 16: Escala el rango a 0-15.999...
    // - Math.floor(): Redondea hacia abajo, resultado: entero 0-15
    // - letras[índice]: Obtiene carácter correspondiente de la cadena
    // - +=: Concatena el carácter al color en construcción
  }

  // ANÁLISIS del resultado:
  // - 6 iteraciones generan RRGGBB
  // - Cada par de dígitos representa un componente de color
  // - Rango por componente: 00-FF (0-255 decimal)
  // - Total de colores posibles: 16^6 = 16,777,216 colores únicos

  return color;
  // FORMATO final: "#A3F7B2" (ejemplo)
}

// ALTERNATIVAS para generar colores aleatorios:
/*
// 1. Método más matemático (mismo resultado):
const obtenerColorAleatorioMat = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    // 16777215 = 0xFFFFFF = máximo valor hex de 6 dígitos
    // .toString(16): Convierte a base hexadecimal
    // .padStart(6, '0'): Rellena con ceros a la izquierda si es necesario
};

// 2. Usando template literals y función auxiliar:
const obtenerColorAleatorioFunc = () => {
    const hex = () => Math.floor(Math.random() * 16).toString(16);
    return `#${hex()}${hex()}${hex()}${hex()}${hex()}${hex()}`;
};

// 3. RGB a hexadecimal:
const obtenerColorRGBaHex = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// 4. HSL para colores más armoniosos:
const obtenerColorHSL = () => {
    const h = Math.floor(Math.random() * 360);  // Hue: 0-359°
    const s = Math.floor(Math.random() * 101);  // Saturation: 0-100%
    const l = Math.floor(Math.random() * 101);  // Lightness: 0-100%
    return `hsl(${h}, ${s}%, ${l}%)`;
};

// 5. Colores dentro de un rango específico (más suaves):
const obtenerColorSuave = () => {
    const componente = () => Math.floor(Math.random() * 128) + 127; // 127-255
    const r = componente().toString(16);
    const g = componente().toString(16);
    const b = componente().toString(16);
    return `#${r}${g}${b}`;
};
*/

// ===== APLICACIÓN DE ESTILOS A ELEMENTOS =====

function cambiarImagenes() {
  for(const imagen of imagenes){
    imagen.style.border = `${obtenerColorAleatorio()} solid 3px`;
    // ANÁLISIS del estilo aplicado:
    // - imagen.style.border: Establece propiedad CSS 'border' completa
    // - Template literal: Combina color dinámico con valores estáticos
    // - Formato CSS: "color style width"
    // - 'solid': Tipo de línea (alternativas: dashed, dotted, double, etc.)
    // - '3px': Grosor del borde en píxeles
  }
  
  // DESGLOSE de la propiedad border:
  // border: #A3F7B2 solid 3px
  // │       │       │     │
  // │       │       │     └── Grosor (border-width)
  // │       │       └────────── Estilo (border-style)
  // │       └────────────────── Color (border-color)
  // └────────────────────────── Propiedad compuesta
}

// ANÁLISIS del bucle for...of:
/*
// for...of vs alternativas:

// 1. for...of (usado aquí) - Más legible:
for(const imagen of imagenes) {
    // 'imagen' contiene directamente el elemento
}

// 2. for tradicional - Más control:
for(let i = 0; i < imagenes.length; i++) {
    const imagen = imagenes[i];
    // Acceso por índice
}

// 3. forEach (requiere conversión):
Array.from(imagenes).forEach(imagen => {
    // HTMLCollection → Array → forEach
});

// 4. while loop:
let i = 0;
while(i < imagenes.length) {
    const imagen = imagenes[i];
    i++;
}

// for...of VENTAJAS:
// - Sintaxis limpia y legible
// - No manejo manual de índices
// - Funciona con iterables (HTMLCollection, NodeList, Arrays)
// - Menos propenso a errores off-by-one
*/

const imagenes = document.getElementsByTagName('img');
// ANÁLISIS de la selección:
// - getElementsByTagName(): Busca TODOS los elementos con tag específico
// - 'img': Busca todas las etiquetas <img> del documento
// - Retorna: HTMLCollection "viva" que se actualiza automáticamente
// - Scope: Todo el documento (document completo)

// CARACTERÍSTICAS de HTMLCollection:
/*
console.log('Tipo:', imagenes.constructor.name);        // HTMLCollection
console.log('Cantidad:', imagenes.length);              // Número de imágenes
console.log('Es array?', Array.isArray(imagenes));      // false
console.log('Es iterable?', Symbol.iterator in imagenes); // true

// HTMLCollection VIVA:
const cantidadInicial = imagenes.length;
const nuevaImagen = document.createElement('img');
document.body.appendChild(nuevaImagen);
console.log('Nueva cantidad:', imagenes.length); // Se incrementa automáticamente

// Métodos disponibles:
console.log('item(0):', imagenes.item(0));           // Primer elemento
console.log('[0]:', imagenes[0]);                    // Acceso por índice
console.log('namedItem("id"):', imagenes.namedItem('miImagen')); // Por name/id
*/

// ALTERNATIVAS para seleccionar imágenes:
/*
// 1. querySelectorAll (más flexible):
const imagenesQuery = document.querySelectorAll('img');

// 2. Selector más específico:
const imagenesEnGaleria = document.querySelectorAll('.galeria img');

// 3. Con filtros adicionales:
const imagenesConAlt = document.querySelectorAll('img[alt]');
const imagenesLazy = document.querySelectorAll('img[loading="lazy"]');

// 4. Dentro de un contenedor específico:
const contenedor = document.getElementById('contenido');
const imagenesDelContenedor = contenedor.getElementsByTagName('img');
*/

cambiarImagenes();
// EJECUCIÓN INMEDIATA:
// - Se ejecuta tan pronto como se define
// - Aplica bordes coloridos a todas las imágenes existentes
// - Si se agregan imágenes después, no se verán afectadas por esta llamada

// CONSIDERACIONES de timing:
/*
// Problema potencial: DOM no completamente cargado
// Solución 1: DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    cambiarImagenes();
});

// Solución 2: window.onload (espera también imágenes)
window.addEventListener('load', () => {
    cambiarImagenes();
});

// Solución 3: Verificación defensiva
function cambiarImagenesSeguro() {
    if (imagenes.length === 0) {
        console.warn('No se encontraron imágenes para modificar');
        return;
    }
    cambiarImagenes();
}
*/

// ===== NAVEGACIÓN RECURSIVA DEL DOM =====

// Usando recursión:

function recorrerElementos(elemento) {
  // ANÁLISIS de la función recursiva:
  // - Parámetro: HTMLElement a procesar
  // - Estrategia: Depth-First Search (DFS) - Búsqueda en profundidad
  // - Pattern: Procesar nodo actual → Procesar hijos recursivamente

  // Procesa el elemento actual
  console.log(elemento.tagName);
  // ANÁLISIS del procesamiento:
  // - elemento.tagName: Nombre de la etiqueta HTML en MAYÚSCULAS
  // - Ejemplos: 'DIV', 'IMG', 'P', 'SPAN', 'BUTTON'
  // - Solo elementos HTML (no nodos de texto o comentarios)

  // INFORMACIÓN ADICIONAL disponible:
  /*
  console.log('Tag:', elemento.tagName);
  console.log('ID:', elemento.id || 'Sin ID');
  console.log('Clases:', elemento.className || 'Sin clases');
  console.log('Tipo de nodo:', elemento.nodeType);  // 1 para elementos
  console.log('Nombre completo:', elemento.nodeName);
  console.log('Contenido texto:', elemento.textContent?.substring(0, 50));
  console.log('Hijos directos:', elemento.children.length);
  console.log('Nivel en DOM:', elemento.closest('html') ? 'En DOM' : 'Huérfano');
  */

  // Recorre los elementos hijos de manera recursiva:
  for (let i = 0; i < elemento.children.length; i++) {
    recorrerElementos(elemento.children[i]);
    // ANÁLISIS de la recursión:
    // - elemento.children: HTMLCollection de elementos hijos DIRECTOS
    // - Solo elementos HTML (no nodos de texto, comentarios, etc.)
    // - [i]: Acceso por índice a cada hijo
    // - Llamada recursiva: La función se llama a sí misma con cada hijo
  }

  // CASO BASE implícito:
  // - Si elemento.children.length === 0, el bucle no se ejecuta
  // - La función retorna automáticamente (elemento sin hijos)
  // - No hay riesgo de recursión infinita
}

// ANÁLISIS de la estructura del DOM:
/*
// Ejemplo de jerarquía DOM:
// <body>                    ← Nivel 0
//   <div>                   ← Nivel 1
//     <p>Texto</p>          ← Nivel 2
//     <img src="...">       ← Nivel 2
//   </div>                  
//   <section>               ← Nivel 1
//     <article>             ← Nivel 2
//       <h1>Título</h1>     ← Nivel 3
//     </article>
//   </section>
// </body>

// Orden de recorrido DFS:
// 1. BODY
// 2. DIV
// 3. P
// 4. IMG
// 5. SECTION
// 6. ARTICLE
// 7. H1
*/

// ALTERNATIVAS de recorrido:
/*
// 1. Breadth-First Search (BFS) - Por niveles:
function recorrerBFS(elemento) {
    const cola = [elemento];
    
    while (cola.length > 0) {
        const actual = cola.shift();
        console.log(actual.tagName);
        
        // Agregar hijos a la cola
        for (let i = 0; i < actual.children.length; i++) {
            cola.push(actual.children[i]);
        }
    }
}

// 2. Con información de nivel:
function recorrerConNivel(elemento, nivel = 0) {
    console.log('  '.repeat(nivel) + elemento.tagName);
    
    for (let i = 0; i < elemento.children.length; i++) {
        recorrerConNivel(elemento.children[i], nivel + 1);
    }
}

// 3. Con TreeWalker (API nativa):
function recorrerConTreeWalker(elemento) {
    const walker = document.createTreeWalker(
        elemento,
        NodeFilter.SHOW_ELEMENT,
        null,
        false
    );
    
    let nodo = walker.nextNode();
    while (nodo) {
        console.log(nodo.tagName);
        nodo = walker.nextNode();
    }
}

// 4. Con filtros personalizados:
function recorrerConFiltro(elemento, filtro = () => true) {
    if (filtro(elemento)) {
        console.log(elemento.tagName);
    }
    
    for (let i = 0; i < elemento.children.length; i++) {
        recorrerConFiltro(elemento.children[i], filtro);
    }
}

// Uso de filtros:
recorrerConFiltro(document.body, elemento => 
    elemento.tagName === 'IMG' || elemento.tagName === 'DIV'
);
*/

// DIFERENCIAS children vs childNodes:
/*
// children: Solo elementos HTML
console.log('children:', elemento.children.length);        // Solo <tags>
console.log('childNodes:', elemento.childNodes.length);    // Incluye texto, comentarios

// Ejemplo:
// <div>
//   Texto
//   <span>Elemento</span>
//   <!-- Comentario -->
// </div>
//
// children.length = 1 (solo <span>)
// childNodes.length = 5 (texto + span + texto + comentario + texto)
*/

// APLICACIONES PRÁCTICAS del recorrido recursivo:
/*
// 1. Búsqueda personalizada:
function buscarElementos(elemento, condicion) {
    const resultados = [];
    
    function buscar(elem) {
        if (condicion(elem)) {
            resultados.push(elem);
        }
        
        for (let i = 0; i < elem.children.length; i++) {
            buscar(elem.children[i]);
        }
    }
    
    buscar(elemento);
    return resultados;
}

// Uso:
const imagenesGrandes = buscarElementos(document.body, elem => 
    elem.tagName === 'IMG' && elem.naturalWidth > 500
);

// 2. Aplicar estilos recursivamente:
function aplicarEstiloRecursivo(elemento, propiedad, valor) {
    elemento.style[propiedad] = valor;
    
    for (let i = 0; i < elemento.children.length; i++) {
        aplicarEstiloRecursivo(elemento.children[i], propiedad, valor);
    }
}

// 3. Validación de estructura:
function validarEstructura(elemento) {
    console.log(`${elemento.tagName}: ${elemento.children.length} hijos`);
    
    // Validaciones específicas
    if (elemento.tagName === 'IMG' && !elemento.alt) {
        console.warn('Imagen sin atributo alt:', elemento);
    }
    
    for (let i = 0; i < elemento.children.length; i++) {
        validarEstructura(elemento.children[i]);
    }
}

// 4. Generar mapa del DOM:
function generarMapaDOM(elemento, nivel = 0) {
    const mapa = {
        tag: elemento.tagName,
        nivel: nivel,
        id: elemento.id || null,
        clases: elemento.className || null,
        hijos: []
    };
    
    for (let i = 0; i < elemento.children.length; i++) {
        mapa.hijos.push(generarMapaDOM(elemento.children[i], nivel + 1));
    }
    
    return mapa;
}
*/

// Empieza el recorrido desde el elemento raíz (document.body)
recorrerElementos(document.body);
// ANÁLISIS del punto de inicio:
// - document.body: Elemento <body> del documento
// - Excluye: <html> y <head> del recorrido
// - Incluye: Todo el contenido visible de la página
// - Razón: Generalmente el contenido dinámico está en <body>

// PUNTOS DE INICIO ALTERNATIVOS:
/*
// 1. Desde HTML completo:
recorrerElementos(document.documentElement); // <html>

// 2. Desde contenedor específico:
const contenedor = document.getElementById('contenido');
if (contenedor) {
    recorrerElementos(contenedor);
}

// 3. Múltiples puntos de inicio:
const contenedores = document.querySelectorAll('.contenedor');
contenedores.forEach(contenedor => {
    console.log('Recorriendo:', contenedor.id);
    recorrerElementos(contenedor);
});

// 4. Con verificación de existencia:
function iniciarRecorrido(selector) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        recorrerElementos(elemento);
    } else {
        console.error('Elemento no encontrado:', selector);
    }
}

iniciarRecorrido('body');
*/

// ===== OPTIMIZACIONES Y MEJORES PRÁCTICAS =====

// VERSIÓN OPTIMIZADA con más funcionalidades:
/*
function recorrerElementosAvanzado(elemento, opciones = {}) {
    const {
        procesador = (elem) => console.log(elem.tagName),
        filtro = () => true,
        maxProfundidad = Infinity,
        nivel = 0,
        contadores = { procesados: 0, omitidos: 0 }
    } = opciones;
    
    // Verificar límite de profundidad
    if (nivel > maxProfundidad) {
        return contadores;
    }
    
    // Aplicar filtro
    if (filtro(elemento)) {
        procesador(elemento, nivel);
        contadores.procesados++;
    } else {
        contadores.omitidos++;
    }
    
    // Recorrido recursivo
    for (let i = 0; i < elemento.children.length; i++) {
        recorrerElementosAvanzado(elemento.children[i], {
            ...opciones,
            nivel: nivel + 1,
            contadores
        });
    }
    
    return contadores;
}

// Uso avanzado:
const resultado = recorrerElementosAvanzado(document.body, {
    procesador: (elem, nivel) => {
        console.log('  '.repeat(nivel) + elem.tagName + 
                   (elem.id ? `#${elem.id}` : '') +
                   (elem.className ? `.${elem.className.replace(/\s+/g, '.')}` : ''));
    },
    filtro: (elem) => elem.tagName !== 'SCRIPT',
    maxProfundidad: 5
});

console.log('Estadísticas:', resultado);
*/

// MANEJO DE ERRORES en recursión:
/*
function recorrerElementosSeguro(elemento) {
    try {
        // Verificación de parámetro
        if (!elemento || typeof elemento.tagName !== 'string') {
            throw new Error('Elemento inválido proporcionado');
        }
        
        console.log(elemento.tagName);
        
        // Verificación de children
        if (elemento.children && elemento.children.length > 0) {
            for (let i = 0; i < elemento.children.length; i++) {
                recorrerElementosSeguro(elemento.children[i]);
            }
        }
        
    } catch (error) {
        console.error('Error en recorrido:', error.message, elemento);
    }
}
*/

// PERFORMANCE MONITORING:
/*
function recorrerElementosConMetricas(elemento) {
    const inicio = performance.now();
    let elementosVisitados = 0;
    
    function recorrer(elem) {
        console.log(elem.tagName);
        elementosVisitados++;
        
        for (let i = 0; i < elem.children.length; i++) {
            recorrer(elem.children[i]);
        }
    }
    
    recorrer(elemento);
    
    const fin = performance.now();
    console.log(`Recorrido completado:
        - Elementos visitados: ${elementosVisitados}
        - Tiempo transcurrido: ${(fin - inicio).toFixed(2)}ms
        - Elementos por ms: ${(elementosVisitados / (fin - inicio)).toFixed(2)}`);
}
*/

// ===== APLICACIONES PRÁCTICAS COMBINADAS =====

// EJEMPLO: Cambiar colores de todos los elementos con bordes:
/*
function aplicarColoresRecursivamente(elemento) {
    // Procesar elemento actual si tiene borde
    const estiloComputado = window.getComputedStyle(elemento);
    if (estiloComputado.borderWidth !== '0px') {
        elemento.style.borderColor = obtenerColorAleatorio();
    }
    
    // Procesar hijos recursivamente
    for (let i = 0; i < elemento.children.length; i++) {
        aplicarColoresRecursivamente(elemento.children[i]);
    }
}

// Ejecutar después del recorrido de análisis:
aplicarColoresRecursivamente(document.body);
*/

// EJEMPLO: Crear un índice visual de la página:
/*
function crearIndiceDOM(elemento, nivel = 0) {
    const indice = document.createElement('div');
    indice.style.marginLeft = (nivel * 20) + 'px';
    indice.textContent = elemento.tagName + 
                        (elemento.id ? ` #${elemento.id}` : '') +
                        (elemento.className ? ` .${elemento.className}` : '');
    
    document.getElementById('indice').appendChild(indice);
    
    for (let i = 0; i < elemento.children.length; i++) {
        crearIndiceDOM(elemento.children[i], nivel + 1);
    }
}
*/

// DEBUGGING: Función para visualizar la recursión:
/*
function debugRecursion(elemento, nivel = 0, path = '') {
    const currentPath = path + '/' + elemento.tagName;
    console.log(`${'│  '.repeat(nivel)}├─ ${elemento.tagName}`, {
        nivel: nivel,
        path: currentPath,
        hijos: elemento.children.length,
        id: elemento.id || 'sin-id',
        clases: elemento.className || 'sin-clases'
    });
    
    for (let i = 0; i < elemento.children.length; i++) {
        debugRecursion(elemento.children[i], nivel + 1, currentPath);
    }
}
*/
