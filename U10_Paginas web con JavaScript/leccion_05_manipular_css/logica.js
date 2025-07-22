// ===== MANIPULACIÓN DINÁMICA DE ESTILOS CSS CON JAVASCRIPT =====
// Demostración de técnicas para modificar apariencia visual mediante DOM

// ===== SELECCIÓN DE ELEMENTOS DEL DOM =====

const botonCambiar = document.getElementsByClassName('boton-redondo')[0];
// ANÁLISIS DETALLADO:
// - getElementsByClassName(): Retorna HTMLCollection "viva"
// - [0]: Acceso al PRIMER elemento con clase 'boton-redondo'
// - RIESGO: Si no existe, botonCambiar será undefined
// - HTMLCollection se actualiza automáticamente si DOM cambia

// ALTERNATIVAS más seguras:
/*
// Opción 1: Verificación de existencia
const botones = document.getElementsByClassName('boton-redondo');
const botonCambiar = botones.length > 0 ? botones[0] : null;

// Opción 2: querySelector (más moderno)
const botonCambiar = document.querySelector('.boton-redondo');

// Opción 3: ID específico (más semántico)
const botonCambiar = document.getElementById('boton-cambiar');

// Opción 4: Selección defensiva
const botonCambiar = (() => {
    const elementos = document.getElementsByClassName('boton-redondo');
    if (elementos.length === 0) {
        console.error('No se encontraron botones con clase "boton-redondo"');
        return null;
    }
    return elementos[0];
})();
*/

const botonReiniciar = document.getElementsByClassName('boton-redondo')[1];
// ANÁLISIS:
// - [1]: Acceso al SEGUNDO elemento con la misma clase
// - RIESGO: Si hay menos de 2 elementos, será undefined
// - Dependencia del orden en HTML (frágil ante cambios)

// MEJORES PRÁCTICAS para múltiples elementos similares:
/*
// Opción 1: Clases específicas
<button class="boton-redondo boton-cambiar">Cambiar</button>
<button class="boton-redondo boton-reiniciar">Reiniciar</button>

const botonCambiar = document.querySelector('.boton-cambiar');
const botonReiniciar = document.querySelector('.boton-reiniciar');

// Opción 2: Atributos data
<button class="boton-redondo" data-action="cambiar">Cambiar</button>
<button class="boton-redondo" data-action="reiniciar">Reiniciar</button>

const botonCambiar = document.querySelector('[data-action="cambiar"]');
const botonReiniciar = document.querySelector('[data-action="reiniciar"]');

// Opción 3: IDs únicos
const botonCambiar = document.getElementById('btn-cambiar');
const botonReiniciar = document.getElementById('btn-reiniciar');
*/

const imagenes = document.getElementsByTagName('img');
// ANÁLISIS:
// - getElementsByTagName(): Busca TODAS las imágenes del documento
// - Retorna: HTMLCollection "viva" que se actualiza automáticamente
// - Incluye: Todas las <img> sin importar ubicación o clases
// - Performance: Muy rápida para tags específicos

// CARACTERÍSTICAS de HTMLCollection:
/*
console.log('Cantidad de imágenes:', imagenes.length);
console.log('Primera imagen:', imagenes[0]);
console.log('Es HTMLCollection:', imagenes instanceof HTMLCollection); // true

// HTMLCollection es "viva":
const cantidadInicial = imagenes.length;
document.body.appendChild(document.createElement('img'));
console.log('Nueva cantidad:', imagenes.length); // Se incrementa automáticamente

// Iteración segura:
for (let i = 0; i < imagenes.length; i++) {
    console.log(`Imagen ${i}:`, imagenes[i].src);
}

// Conversión a array para métodos modernos:
const arrayImagenes = Array.from(imagenes);
const imagenesConAlt = arrayImagenes.filter(img => img.alt);
*/

// ALTERNATIVAS para seleccionar imágenes:
/*
// Solo imágenes de una galería específica:
const imagenesGaleria = document.querySelectorAll('.galeria img');

// Imágenes con clase específica:
const imagenesEspeciales = document.querySelectorAll('img.destacada');

// Imágenes con atributos específicos:
const imagenesConAlt = document.querySelectorAll('img[alt]');
const imagenesLazy = document.querySelectorAll('img[loading="lazy"]');
*/

// ===== FUNCIONES DE MANIPULACIÓN DE ESTILOS =====

function cambiarColorFondo() {
    const color = obtenerColorAleatorio();
    console.log(`Color generado: ${color}`);
    document.body.style.backgroundColor = color;
}
// ANÁLISIS de la función:
// - Función declarativa (hoisted, disponible antes de declaración)
// - Genera color aleatorio y lo aplica al body
// - console.log: Útil para debugging y seguimiento
// - document.body.style: Manipulación directa de estilos inline

// PROFUNDIZACIÓN en manipulación de estilos:
/*
// Diferentes formas de aplicar estilos:

// 1. style.property (camelCase):
document.body.style.backgroundColor = '#FF0000';
document.body.style.fontSize = '16px';
document.body.style.marginTop = '20px';

// 2. style.setProperty() (kebab-case):
document.body.style.setProperty('background-color', '#FF0000');
document.body.style.setProperty('font-size', '16px');
document.body.style.setProperty('margin-top', '20px');

// 3. style.cssText (todo de una vez):
document.body.style.cssText = 'background-color: #FF0000; font-size: 16px;';

// 4. setAttribute (menos común para estilos):
document.body.setAttribute('style', 'background-color: #FF0000;');

// Ventajas y desventajas:
// style.property: Más legible, autocompletado en IDE
// style.setProperty(): Permite CSS custom properties, más flexible
// style.cssText: Eficiente para múltiples propiedades, pero sobrescribe todo
*/

// CONSIDERACIONES de performance y mejores prácticas:
/*
// ❌ Evitar múltiples manipulaciones style:
function malaFuncion() {
    document.body.style.backgroundColor = 'red';      // Reflow 1
    document.body.style.color = 'white';              // Reflow 2
    document.body.style.fontSize = '18px';            // Reflow 3
}

// ✅ Agrupar cambios de estilo:
function buenaFuncion() {
    document.body.style.cssText = `
        background-color: red;
        color: white;
        font-size: 18px;
    `;
    // Solo un reflow
}

// ✅ O usar clases CSS predefinidas:
function mejorFuncion() {
    document.body.className = 'tema-oscuro';
    // CSS: .tema-oscuro { background: red; color: white; font-size: 18px; }
}
*/

function obtenerColorAleatorio() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
// ANÁLISIS DETALLADO del algoritmo:
// - letras: String con dígitos hexadecimales válidos (0-F)
// - color: Inicia con '#' (prefijo requerido para colores hex)
// - Bucle for: 6 iteraciones para generar RRGGBB
// - Math.random(): Número decimal entre 0 y 1 (exclusivo)
// - Math.floor(): Redondea hacia abajo para obtener entero
// - Math.random() * 16: Rango 0-15.999... → Math.floor() da 0-15

// DESGLOSE paso a paso:
/*
// Iteración 1: Red channel (posiciones 0-1)
// Math.random() → 0.7234 (ejemplo)
// 0.7234 * 16 → 11.5744
// Math.floor(11.5744) → 11
// letras[11] → 'B'
// color → '#B'

// Iteración 2: Red channel (segundo dígito)
// Math.random() → 0.2341
// 0.2341 * 16 → 3.7456
// Math.floor(3.7456) → 3
// letras[3] → '3'
// color → '#B3'

// Continúa hasta completar: '#B3A7F2' (ejemplo)
*/

// ALTERNATIVAS para generar colores:
/*
// 1. Método más funcional:
const obtenerColorAleatorio = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};
// 16777215 = 0xFFFFFF (máximo valor hex de 6 dígitos)

// 2. Con template literals:
const obtenerColorAleatorio = () => {
    const hex = () => Math.floor(Math.random() * 16).toString(16);
    return `#${hex()}${hex()}${hex()}${hex()}${hex()}${hex()}`;
};

// 3. RGB aleatorio:
const obtenerColorRGBAleatorio = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// 4. HSL para colores más armoniosos:
const obtenerColorHSLAleatorio = () => {
    const h = Math.floor(Math.random() * 360);  // Hue: 0-359°
    const s = Math.floor(Math.random() * 101);  // Saturation: 0-100%
    const l = Math.floor(Math.random() * 101);  // Lightness: 0-100%
    return `hsl(${h}, ${s}%, ${l}%)`;
};

// 5. Colores con rango limitado (más agradables):
const obtenerColorSuave = () => {
    const r = Math.floor(Math.random() * 128) + 127; // 127-255 (tonos claros)
    const g = Math.floor(Math.random() * 128) + 127;
    const b = Math.floor(Math.random() * 128) + 127;
    return `rgb(${r}, ${g}, ${b})`;
};
*/

// VALIDACIÓN del formato de color generado:
/*
const validarColorHex = (color) => {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(color);
};

// Uso:
const color = obtenerColorAleatorio();
if (validarColorHex(color)) {
    console.log('Color válido:', color);
} else {
    console.error('Color inválido:', color);
}
*/

function cambiarImagenes() {
    for(const imagen of imagenes){
      imagen.style.border = `${obtenerColorAleatorio()} solid 3px`;
    }
}
// ANÁLISIS de la función:
// - for...of: Itera sobre elementos de HTMLCollection
// - imagen.style.border: Establece propiedad CSS border completa
// - Template literal: Combina color aleatorio con estilo fijo
// - Cada imagen recibe un color de borde diferente

// DESGLOSE de la propiedad border:
/*
// Sintaxis CSS border: [color] [style] [width]
// ${obtenerColorAleatorio()}: '#A3B7C9' (ejemplo)
// 'solid': Estilo de línea sólida
// '3px': Grosor del borde

// Resultado: 'border: #A3B7C9 solid 3px'
// Equivale a:
imagen.style.borderColor = '#A3B7C9';
imagen.style.borderStyle = 'solid';
imagen.style.borderWidth = '3px';
*/

// ALTERNATIVAS para el bucle:
/*
// 1. for clásico:
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].style.border = `${obtenerColorAleatorio()} solid 3px`;
}

// 2. forEach (requiere conversión):
Array.from(imagenes).forEach(imagen => {
    imagen.style.border = `${obtenerColorAleatorio()} solid 3px`;
});

// 3. Bucle while:
let i = 0;
while (i < imagenes.length) {
    imagenes[i].style.border = `${obtenerColorAleatorio()} solid 3px`;
    i++;
}

// 4. for...in (menos recomendado para HTMLCollection):
for (const index in imagenes) {
    if (imagenes.hasOwnProperty(index)) {
        imagenes[index].style.border = `${obtenerColorAleatorio()} solid 3px`;
    }
}
*/

// ESTILOS DE BORDE más avanzados:
/*
// Diferentes estilos de border:
imagen.style.border = `${color} dashed 2px`;     // Línea discontinua
imagen.style.border = `${color} dotted 4px`;     // Puntos
imagen.style.border = `${color} double 6px`;     // Línea doble
imagen.style.border = `${color} groove 5px`;     // Efecto 3D hundido
imagen.style.border = `${color} ridge 5px`;      // Efecto 3D elevado
imagen.style.border = `${color} inset 4px`;      // Efecto 3D hacia adentro
imagen.style.border = `${color} outset 4px`;     // Efecto 3D hacia afuera

// Bordes específicos por lado:
imagen.style.borderTop = `${color} solid 3px`;
imagen.style.borderRight = `${color} dashed 2px`;
imagen.style.borderBottom = `${color} dotted 4px`;
imagen.style.borderLeft = `${color} double 1px`;

// Border radius para esquinas redondeadas:
imagen.style.borderRadius = '10px';
imagen.style.border = `${color} solid 3px`;

// Efectos más elaborados:
imagen.style.cssText = `
    border: ${color} solid 3px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
`;
*/

// CONSIDERACIONES de performance:
/*
// Si hay muchas imágenes, considerar:

// 1. RequestAnimationFrame para animaciones suaves:
function cambiarImagenesAnimado() {
    let indice = 0;
    
    function procesarSiguiente() {
        if (indice < imagenes.length) {
            imagenes[indice].style.border = `${obtenerColorAleatorio()} solid 3px`;
            indice++;
            requestAnimationFrame(procesarSiguiente);
        }
    }
    
    requestAnimationFrame(procesarSiguiente);
}

// 2. Batch processing para muchos elementos:
function cambiarImagenesBatch() {
    const fragmento = document.createDocumentFragment();
    
    // Temporalmente remover imágenes del DOM
    const imagenesArray = Array.from(imagenes);
    imagenesArray.forEach(img => {
        img.style.border = `${obtenerColorAleatorio()} solid 3px`;
    });
    
    // Una sola operación de re-render
}
*/

// ===== MANEJO DE EVENTOS =====

botonCambiar.addEventListener('click', event => {
    cambiarColorFondo();
    cambiarImagenes();
});
// ANÁLISIS del event listener:
// - addEventListener(): Método estándar para registrar eventos
// - 'click': Tipo de evento (mousedown + mouseup en el mismo elemento)
// - Arrow function: Sintaxis moderna para callback
// - event: Objeto Event con información del evento (no usado aquí)

// DESGLOSE del objeto Event:
/*
botonCambiar.addEventListener('click', event => {
    console.log('Tipo de evento:', event.type);           // 'click'
    console.log('Elemento objetivo:', event.target);      // <button>
    console.log('Elemento actual:', event.currentTarget); // <button>
    console.log('Coordenadas X:', event.clientX);         // Posición X del mouse
    console.log('Coordenadas Y:', event.clientY);         // Posición Y del mouse
    console.log('Teclas modificadoras:', {
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
        meta: event.metaKey
    });
    
    // Prevenir comportamiento por defecto (si lo hubiera):
    event.preventDefault();
    
    // Detener propagación del evento:
    event.stopPropagation();
    
    cambiarColorFondo();
    cambiarImagenes();
});
*/

// ALTERNATIVAS para registrar eventos:
/*
// 1. Método tradicional (no recomendado):
botonCambiar.onclick = function(event) {
    cambiarColorFondo();
    cambiarImagenes();
};

// 2. Atributo HTML (evitar):
// <button onclick="cambiarColorFondo(); cambiarImagenes();">

// 3. Múltiples listeners en el mismo evento:
botonCambiar.addEventListener('click', cambiarColorFondo);
botonCambiar.addEventListener('click', cambiarImagenes);
botonCambiar.addEventListener('click', () => console.log('Click detectado'));

// 4. Opciones avanzadas:
botonCambiar.addEventListener('click', callback, {
    once: true,      // Solo se ejecuta una vez
    passive: true,   // No llamará preventDefault()
    capture: true    // Captura en fase de captura
});

// 5. Función nombrada para mejor debugging:
function manejarClickCambiar(event) {
    console.log('Iniciando cambios visuales...');
    cambiarColorFondo();
    cambiarImagenes();
    console.log('Cambios completados');
}

botonCambiar.addEventListener('click', manejarClickCambiar);
*/

// MANEJO DE ERRORES en eventos:
/*
botonCambiar.addEventListener('click', event => {
    try {
        cambiarColorFondo();
        cambiarImagenes();
    } catch (error) {
        console.error('Error al cambiar estilos:', error);
        // Mostrar mensaje al usuario o aplicar fallback
    }
});
*/

botonReiniciar.addEventListener('click', event => {
  document.body.style = {};
  for(const imagen of imagenes){
    imagen.style = {};
  }
});
// ANÁLISIS del restablecimiento:
// - document.body.style = {}: Elimina TODOS los estilos inline del body
// - imagen.style = {}: Elimina TODOS los estilos inline de cada imagen
// - Efecto: Elementos vuelven a estilos definidos en CSS externo/interno

// PROFUNDIZACIÓN en técnicas de reset:
/*
// Lo que hace style = {}:
const elemento = document.querySelector('.test');
elemento.style.color = 'red';
elemento.style.fontSize = '20px';
elemento.style.border = '1px solid blue';

console.log(elemento.style.cssText); // "color: red; font-size: 20px; border: 1px solid blue;"

elemento.style = {};

console.log(elemento.style.cssText); // "" (vacío)
console.log(elemento.style.color);   // "" (vacío)
*/

// ALTERNATIVAS para resetear estilos:
/*
// 1. removeProperty() para propiedades específicas:
elemento.style.removeProperty('background-color');
elemento.style.removeProperty('border');

// 2. Establecer a valores por defecto:
elemento.style.backgroundColor = '';
elemento.style.border = '';

// 3. cssText vacío:
elemento.style.cssText = '';

// 4. removeAttribute() para eliminar atributo style completo:
elemento.removeAttribute('style');

// 5. Reseteo selectivo manteniendo algunos estilos:
const resetearExcepto = (elemento, propiedadesAMantener) => {
    const estilosAMantener = {};
    propiedadesAMantener.forEach(prop => {
        estilosAMantener[prop] = elemento.style[prop];
    });
    
    elemento.style = {};
    
    Object.keys(estilosAMantener).forEach(prop => {
        elemento.style[prop] = estilosAMantener[prop];
    });
};

// Uso:
resetearExcepto(elemento, ['color', 'fontSize']);
*/

// COMPARACIÓN de métodos de reset:
/*
// style = {} vs removeAttribute('style'):

// style = {}:
elemento.style = {};
console.log(elemento.hasAttribute('style')); // true (atributo existe pero vacío)

// removeAttribute('style'):
elemento.removeAttribute('style');
console.log(elemento.hasAttribute('style')); // false (atributo no existe)

// Ambos métodos resultan en el mismo comportamiento visual,
// pero removeAttribute() es más "limpio" en el HTML resultante
*/

// MEJORAS SUGERIDAS al código original:
/*
// 1. Validación de elementos:
const inicializar = () => {
    const botones = document.getElementsByClassName('boton-redondo');
    const imagenes = document.getElementsByTagName('img');
    
    if (botones.length < 2) {
        console.error('Se necesitan al menos 2 botones con clase "boton-redondo"');
        return;
    }
    
    if (imagenes.length === 0) {
        console.warn('No se encontraron imágenes en la página');
    }
    
    const botonCambiar = botones[0];
    const botonReiniciar = botones[1];
    
    // Resto del código...
};

// 2. Debouncing para evitar clicks rápidos:
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
};

const cambiarEstilosDebounced = debounce(() => {
    cambiarColorFondo();
    cambiarImagenes();
}, 300);

botonCambiar.addEventListener('click', cambiarEstilosDebounced);

// 3. Animaciones suaves con CSS:
const aplicarEstilosConAnimacion = () => {
    // Aplicar clase CSS que incluye transition
    document.body.classList.add('transitioning');
    
    setTimeout(() => {
        cambiarColorFondo();
        cambiarImagenes();
    }, 50);
    
    setTimeout(() => {
        document.body.classList.remove('transitioning');
    }, 350);
};

// CSS correspondiente:
/*
.transitioning {
    transition: background-color 0.3s ease;
}

.transitioning img {
    transition: border 0.3s ease;
}
*/

// 4. Estado de la aplicación:
const estado = {
    coloresOriginales: new Map(),
    estilosOriginales: {
        body: '',
        imagenes: []
    }
};

const guardarEstadoOriginal = () => {
    estado.estilosOriginales.body = document.body.style.cssText;
    estado.estilosOriginales.imagenes = Array.from(imagenes).map(img => img.style.cssText);
};

const restaurarEstadoOriginal = () => {
    document.body.style.cssText = estado.estilosOriginales.body;
    Array.from(imagenes).forEach((img, index) => {
        img.style.cssText = estado.estilosOriginales.imagenes[index] || '';
    });
};

// 5. Accesibilidad mejorada:
botonCambiar.addEventListener('click', event => {
    // Anunciar cambio a lectores de pantalla
    const anuncio = document.createElement('div');
    anuncio.setAttribute('aria-live', 'polite');
    anuncio.textContent = 'Colores de la página actualizados';
    anuncio.style.position = 'absolute';
    anuncio.style.left = '-10000px'; // Oculto visualmente
    document.body.appendChild(anuncio);
    
    cambiarColorFondo();
    cambiarImagenes();
    
    setTimeout(() => {
        document.body.removeChild(anuncio);
    }, 1000);
});


// ===== PATRONES DE USO AVANZADOS =====

// PATRÓN: Factory de funciones para diferentes tipos de cambios
/*
const crearCambiadorDeEstilo = (propiedad, generadorDeValor) => {
    return (elementos) => {
        elementos.forEach(elemento => {
            elemento.style[propiedad] = generadorDeValor();
        });
    };
};

// Uso:
const cambiarColores = crearCambiadorDeEstilo('color', obtenerColorAleatorio);
const cambiarTamaños = crearCambiadorDeEstilo('fontSize', () => `${Math.random() * 20 + 10}px`);

cambiarColores(Array.from(imagenes));
cambiarTamaños(Array.from(document.querySelectorAll('p')));
*/

// PATRÓN: Observer para cambios de estilo
/*
class EstiloObserver {
    constructor() {
        this.observers = [];
    }
    
    subscribe(callback) {
        this.observers.push(callback);
    }
    
    unsubscribe(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }
    
    notify(cambio) {
        this.observers.forEach(callback => callback(cambio));
    }
}

const estiloObserver = new EstiloObserver();

estiloObserver.subscribe(cambio => {
    console.log('Estilo cambiado:', cambio);
});

function cambiarColorFondoConNotificacion() {
    const colorAnterior = document.body.style.backgroundColor;
    const colorNuevo = obtenerColorAleatorio();
    
    document.body.style.backgroundColor = colorNuevo;
    
    estiloObserver.notify({
        elemento: 'body',
        propiedad: 'backgroundColor',
        valorAnterior: colorAnterior,
        valorNuevo: colorNuevo
    });
}
*/

// PATRÓN: Command para deshacer/rehacer cambios
/*
class ComandoCambiarEstilo {
    constructor(elemento, propiedad, valorNuevo) {
        this.elemento = elemento;
        this.propiedad = propiedad;
        this.valorNuevo = valorNuevo;
        this.valorAnterior = elemento.style[propiedad];
    }
    
    ejecutar() {
        this.elemento.style[this.propiedad] = this.valorNuevo;
    }
    
    deshacer() {
        this.elemento.style[this.propiedad] = this.valorAnterior;
    }
}

class HistorialComandos {
    constructor() {
        this.comandos = [];
        this.indiceActual = -1;
    }
    
    ejecutar(comando) {
        comando.ejecutar();
        this.comandos = this.comandos.slice(0, this.indiceActual + 1);
        this.comandos.push(comando);
        this.indiceActual++;
    }
    
    deshacer() {
        if (this.indiceActual >= 0) {
            this.comandos[this.indiceActual].deshacer();
            this.indiceActual--;
        }
    }
    
    rehacer() {
        if (this.indiceActual < this.comandos.length - 1) {
            this.indiceActual++;
            this.comandos[this.indiceActual].ejecutar();
        }
    }
}

const historial = new HistorialComandos();

// Uso:
const comando = new ComandoCambiarEstilo(
    document.body, 
    'backgroundColor', 
    obtenerColorAleatorio()
);
historial.ejecutar(comando);
*/

// ===== DEBUGGING Y HERRAMIENTAS DE DESARROLLO =====

// FUNCIÓN DE DEBUG para monitorear cambios:
/*
const debugEstilos = {
    log: true,
    
    wrap: (funcion, nombre) => {
        return (...args) => {
            if (debugEstilos.log) {
                console.group(`🎨 ${nombre}`);
                console.time(`${nombre} - Tiempo`);
            }
            
            const resultado = funcion.apply(null, args);
            
            if (debugEstilos.log) {
                console.timeEnd(`${nombre} - Tiempo`);
                console.groupEnd();
            }
            
            return resultado;
        };
    }
};

// Envolver funciones para debugging:
const cambiarColorFondoDebug = debugEstilos.wrap(cambiarColorFondo, 'Cambiar Color Fondo');
const cambiarImagenesDebug = debugEstilos.wrap(cambiarImagenes, 'Cambiar Imágenes');
*/

// MÉTRICAS DE PERFORMANCE:
/*
const medirPerformance = () => {
    const inicio = performance.now();
    
    cambiarColorFondo();
    cambiarImagenes();
    
    const fin = performance.now();
    console.log(`Cambios aplicados en ${fin - inicio} milisegundos`);
};

// Monitor de memoria (si está disponible):
if (performance.memory) {
    const antesMemoria = performance.memory.usedJSHeapSize;
    cambiarColorFondo();
    cambiarImagenes();
    const despuesMemoria = performance.memory.usedJSHeapSize;
    console.log(`Memoria utilizada: ${despuesMemoria - antesMemoria} bytes`);
}
*/
