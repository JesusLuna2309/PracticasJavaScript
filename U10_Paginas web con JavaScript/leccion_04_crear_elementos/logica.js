// ===== CREACIÓN Y MANIPULACIÓN SEGURA DEL DOM =====
// Guía completa de métodos seguros vs peligrosos para crear elementos HTML

// ===== MÉTODO createElement: CREACIÓN PROGRAMÁTICA SEGURA =====

// Método: createElement
const elementoBoton = document.createElement('button');
// ANÁLISIS DETALLADO:
// - document.createElement(): Crea elemento HTML vacío EN MEMORIA (no en DOM)
// - Parámetro: String con tag name válido ('button', 'div', 'img', etc.)
// - Retorna: HTMLElement del tipo especificado
// - Estado inicial: Sin atributos, propiedades, ni contenido
// - Seguridad: 100% seguro - imposible inyección de código

// CARACTERÍSTICAS IMPORTANTES:
// - Elemento existe solo en memoria hasta ser insertado
// - Todas las propiedades están en valores por defecto
// - Se puede configurar completamente antes de insertar al DOM
// - Performance óptima: una sola inserción DOM al final

elementoBoton.className = 'boton-redondo';
// ANÁLISIS de className:
// - className: Propiedad que establece/obtiene atributo 'class'
// - Tipo: String con nombres de clases separadas por espacios
// - Comportamiento: SOBRESCRIBE todas las clases existentes
// - Alternativa moderna: classList (más flexible)

// COMPARACIÓN de métodos para clases:
/*
// 1. className (sobrescribe todo):
elemento.className = 'clase1 clase2 clase3';

// 2. classList (métodos granulares):
elemento.classList.add('clase1');
elemento.classList.add('clase2', 'clase3');
elemento.classList.remove('clase-vieja');
elemento.classList.toggle('activo');
elemento.classList.replace('vieja', 'nueva');

// 3. setAttribute (método genérico):
elemento.setAttribute('class', 'clase1 clase2');

// Verificaciones:
if (elemento.classList.contains('activo')) {
    console.log('Elemento está activo');
}
*/

elementoBoton.innerText = 'Botón agregado usando JavaScript!'
// ANÁLISIS DETALLADO de innerText:
// - innerText: Establece/obtiene contenido de TEXTO PLANO visible
// - Seguridad: Completamente seguro - caracteres HTML se muestran literalmente
// - Renderizado: Respeta CSS (elementos hidden no aparecen)
// - Escape automático: '<script>' se muestra como texto literal

// DIFERENCIAS entre propiedades de contenido:
/*
const ejemplo = document.createElement('div');

// innerText - Texto visible respetando CSS:
ejemplo.innerText = 'Texto <b>con HTML</b>';
// Resultado: "Texto <b>con HTML</b>" (literal)

// textContent - Todo el texto sin interpretar CSS:
ejemplo.textContent = 'Texto <b>raw</b>';
// Resultado: "Texto <b>raw</b>" (literal, ignora display:none)

// innerHTML - Interpreta HTML (PELIGROSO):
ejemplo.innerHTML = 'Texto <b>HTML</b>';
// Resultado: "Texto HTML" (b se renderiza como negrita)

// Ejemplo con CSS:
const contenedor = document.createElement('div');
contenedor.innerHTML = '<span style="display:none">Oculto</span> Visible';
console.log(contenedor.innerText);   // "Visible"
console.log(contenedor.textContent); // "Oculto Visible"
*/

document.body.append(elementoBoton);
// ANÁLISIS de append():
// - append(): Método ES6 para insertar elementos al final
// - Flexibilidad: Acepta elementos, texto, múltiples argumentos
// - Posición: Como último hijo del contenedor
// - Diferencia con appendChild(): append() acepta strings y múltiples elementos

// MÉTODOS de inserción disponibles:
/*
// appendChild() - Método clásico (solo elementos):
document.body.appendChild(elementoBoton);

// prepend() - Al inicio:
document.body.prepend(elementoBoton);

// before() - Antes del elemento:
referencia.before(elementoBoton);

// after() - Después del elemento:
referencia.after(elementoBoton);

// insertBefore() - Método clásico con referencia:
document.body.insertBefore(elementoBoton, referencia);

// insertAdjacentElement() - Posiciones específicas:
referencia.insertAdjacentElement('beforebegin', elementoBoton);
referencia.insertAdjacentElement('afterbegin', elementoBoton);
referencia.insertAdjacentElement('beforeend', elementoBoton);
referencia.insertAdjacentElement('afterend', elementoBoton);

// Múltiples elementos con append():
contenedor.append(elemento1, elemento2, 'texto', elemento3);
*/

// ===== MÉTODO createDocumentFragment: OPTIMIZACIÓN DE RENDIMIENTO =====

// Método: createDocumentFragment
const imagenesUrls = [
  './imagenes/robot1.png',
  './imagenes/robot2.png',
  './imagenes/robot3.png'
];
// ESTRUCTURA de datos:
// - Array con rutas de imágenes
// - Rutas relativas al documento HTML
// - Podrían venir de: API, configuración, base de datos

// CASOS REALES de arrays dinámicos:
/*
// Desde API:
const imagenesDesdeAPI = await fetch('/api/imagenes').then(r => r.json());

// Desde configuración:
const imagenesConfig = {
  galeria1: ['img1.jpg', 'img2.jpg'],
  galeria2: ['img3.jpg', 'img4.jpg']
};

// Generadas dinámicamente:
const imagenesGeneradas = Array.from({length: 10}, (_, i) => `img${i}.jpg`);
*/

const galeria = document.getElementsByClassName('galeria')[0];
// SELECCIÓN del contenedor:
// - getElementsByClassName(): Retorna HTMLCollection live
// - [0]: Primer elemento con esa clase
// - RIESGO: undefined si no existe elemento

// SELECCIÓN SEGURA recomendada:
/*
const galeria = document.querySelector('.galeria');
if (!galeria) {
    console.error('Galería no encontrada');
    return; // O crear galería por defecto
}

// O con manejo de errores:
const galeria = (() => {
    const g = document.getElementsByClassName('galeria')[0];
    if (!g) {
        const nuevaGaleria = document.createElement('div');
        nuevaGaleria.className = 'galeria';
        document.body.appendChild(nuevaGaleria);
        return nuevaGaleria;
    }
    return g;
})();
*/

const fragmento = document.createDocumentFragment();
// ANÁLISIS PROFUNDO de DocumentFragment:
// - createDocumentFragment(): Contenedor temporal en memoria
// - Características:
//   * NO es parte del DOM (no tiene parent)
//   * No provoca reflows ni repaints durante manipulación
//   * Una sola inserción final = rendimiento óptimo
//   * Se "vacía" al ser insertado (nodos se mueven, no copian)

// VENTAJAS del DocumentFragment:
/*
// 1. Rendimiento - Sin múltiples reflows:
// ❌ Malo (N reflows):
for(let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    contenedor.appendChild(div); // Reflow en cada iteración
}

// ✅ Bueno (1 reflow):
const fragment = document.createDocumentFragment();
for(let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div); // Solo en memoria
}
contenedor.appendChild(fragment); // Un solo reflow

// 2. Manipulación compleja sin efectos visuales:
const fragment = document.createDocumentFragment();
// Crear estructura compleja...
// Aplicar estilos...
// Configurar event listeners...
// Una vez listo, insertar todo de una vez

// 3. Reutilización:
const templateFragment = crearTemplateComplejo();
contenedor1.appendChild(templateFragment.cloneNode(true));
contenedor2.appendChild(templateFragment.cloneNode(true));
*/

// BUCLE OPTIMIZADO para creación masiva:
for(let i = 0; i < imagenesUrls.length; i++){
    // ANÁLISIS del bucle:
    // - for clásico: Máximo rendimiento para arrays
    // - Alternativas: for...of, forEach, map

    const imgElement = document.createElement('img');
    // CREACIÓN del elemento imagen:
    // - createElement('img'): Elemento <img> vacío
    // - Sin src aún: No se inicia descarga
    // - Propiedades por defecto del navegador

    imgElement.src = imagenesUrls[i];
    // CONFIGURACIÓN de la fuente:
    // - src: URL de la imagen a cargar
    // - Al asignar: Browser inicia descarga inmediatamente
    // - Rutas relativas se resuelven desde ubicación del HTML
    // - Eventos disparados: loadstart, progress, load/error

    imgElement.ariaLabel = `robot_${i}`;
    // ACCESIBILIDAD básica:
    // - ariaLabel: Descripción para lectores de pantalla
    // - aria-label tiene prioridad sobre alt
    // - Formato: Descriptivo pero conciso

    // MEJORAS de accesibilidad recomendadas:
    /*
    imgElement.alt = `Robot número ${i + 1}`;
    imgElement.ariaLabel = `Imagen del robot ${i + 1} de la colección`;
    imgElement.loading = 'lazy'; // Lazy loading nativo
    imgElement.decoding = 'async'; // Decodificación no bloqueante
    
    // Event listeners para estado de carga:
    imgElement.onload = () => console.log('Imagen cargada:', imgElement.src);
    imgElement.onerror = () => console.error('Error cargando:', imgElement.src);
    
    // Placeholder mientras carga:
    imgElement.style.backgroundColor = '#f0f0f0';
    imgElement.style.minHeight = '200px';
    */

    fragmento.appendChild(imgElement);
    // AGREGAR al fragmento:
    // - appendChild(): Mueve elemento al fragmento
    // - Elemento queda "huérfano" hasta inserción final
    // - Fragmento acumula todos los elementos en memoria
}

galeria.append(fragmento);
// INSERCIÓN FINAL optimizada:
// - append(): Mueve todos los nodos del fragmento a galeria
// - fragmento queda vacío después de la operación
// - Browser hace un solo reflow/repaint para todos los elementos
// - Resultado: Galería poblada con todas las imágenes

// MEDICIÓN de rendimiento:
/*
console.time('Creación con fragmento');
const fragment = document.createDocumentFragment();
for(let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Elemento ${i}`;
    fragment.appendChild(div);
}
contenedor.appendChild(fragment);
console.timeEnd('Creación con fragmento');

// vs

console.time('Creación directa');
for(let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Elemento ${i}`;
    contenedor.appendChild(div); // Múltiples inserciones
}
console.timeEnd('Creación directa');
*/

// ===== MÉTODO cloneNode: DUPLICACIÓN INTELIGENTE =====

// Método: cloneNode
// 'true' incluye nodos hijos
// 'false' crea una copia superficial
const galeriaCopia = galeria.cloneNode(true);
// ANÁLISIS EXHAUSTIVO de cloneNode:
// - cloneNode(deep): Crea copia independiente del elemento
// - deep=true: COPIA PROFUNDA (elemento + descendientes)
// - deep=false: COPIA SUPERFICIAL (solo elemento raíz)
// - Resultado: Elemento desconectado del DOM original

// LO QUE SE COPIA (deep=true):
/*
✅ Se copia:
- Estructura HTML completa
- Todos los elementos descendientes
- Atributos de todos los elementos
- Propiedades CSS aplicadas via atributos
- Contenido de texto
- Referencias de datos estáticos

❌ NO se copia:
- Event listeners registrados
- Propiedades JavaScript dinámicas
- Referencias de objetos
- Estado interno del navegador (foco, selección)
- Estilos CSS dinámicos aplicados via JavaScript
*/

// EJEMPLOS de diferencias:
/*
// Original:
const original = document.createElement('div');
original.miPropiedad = 'valor personalizado';
original.addEventListener('click', () => console.log('click'));
original.style.color = 'red';

// Copia:
const copia = original.cloneNode(true);
console.log(copia.miPropiedad);        // undefined
console.log(copia.onclick);            // null
console.log(copia.style.color);        // "" (vacío)

// Diferencias deep=true vs deep=false:
const contenedor = document.createElement('div');
contenedor.innerHTML = '<p>Hijo 1</p><p>Hijo 2</p>';

const copiaCompleta = contenedor.cloneNode(true);   // Incluye <p> elementos
const copiaSolo = contenedor.cloneNode(false);      // Solo <div> vacío

console.log(copiaCompleta.children.length);  // 2
console.log(copiaSolo.children.length);      // 0
*/

document.body.append(galeriaCopia);
// INSERCIÓN de la copia:
// - galeriaCopia es completamente independiente de galeria
// - Ambas galerías coexisten en el DOM
// - Modificaciones futuras afectan independientemente

// CONSIDERACIONES IMPORTANTES:
/*
// 1. IDs duplicados (violación HTML):
if (galeria.id) {
    galeriaCopia.id = galeria.id + '-copia';
    // O generar ID único:
    galeriaCopia.id = 'galeria-' + Date.now();
}

// 2. Event listeners perdidos:
// Deben reestablecerse manualmente:
galeriaCopia.addEventListener('click', manejarClickGaleria);

// O clonar con listeners:
const clonarConListeners = (elemento) => {
    const copia = elemento.cloneNode(true);
    
    // Copiar listeners del elemento raíz:
    ['click', 'mouseenter', 'mouseleave'].forEach(evento => {
        if (elemento['on' + evento]) {
            copia['on' + evento] = elemento['on' + evento];
        }
    });
    
    return copia;
};

// 3. Referencias únicas:
galeriaCopia.classList.add('galeria-duplicada');
galeriaCopia.dataset.origen = 'clonacion';
*/

// CASOS DE USO para cloneNode:
/*
// 1. Templates reutilizables:
const template = document.getElementById('template-tarjeta');
const nuevaTarjeta = template.cloneNode(true);
nuevaTarjeta.querySelector('.titulo').textContent = 'Nuevo título';
nuevaTarjeta.querySelector('.descripcion').textContent = 'Nueva descripción';

// 2. Backup antes de modificaciones:
const respaldo = elementoImportante.cloneNode(true);
// Hacer modificaciones arriesgadas...
// Si algo sale mal:
elementoImportante.parentNode.replaceChild(respaldo, elementoImportante);

// 3. Generación de listas repetitivas:
const itemTemplate = document.querySelector('.item-template');
datos.forEach(dato => {
    const item = itemTemplate.cloneNode(true);
    item.querySelector('.nombre').textContent = dato.nombre;
    item.querySelector('.precio').textContent = dato.precio;
    contenedor.appendChild(item);
});
*/

// ===== MÉTODO createTextNode: CONTENIDO DE TEXTO SEGURO =====

// Método: createTextNode
const nodoTexto = document.createTextNode('Algún texto aquí.');
// ANÁLISIS de createTextNode:
// - createTextNode(): Crea nodo de SOLO TEXTO
// - Parámetro: String tratado como texto literal
// - Tipo: Text node (nodeType = 3), no Element node
// - Seguridad: Máxima - imposible ejecutar código

document.body.append(nodoTexto);
// INSERCIÓN del nodo de texto:
// - Se agrega como texto plano al body
// - Sin contenedor HTML
// - Visible directamente en la página

// CARACTERÍSTICAS de los nodos de texto:
/*
// Diferencias con elementos:
const textoNodo = document.createTextNode('Hola mundo');
const divElemento = document.createElement('div');
divElemento.textContent = 'Hola mundo';

console.log(textoNodo.nodeType);     // 3 (TEXT_NODE)
console.log(divElemento.nodeType);   // 1 (ELEMENT_NODE)

console.log(textoNodo.tagName);      // undefined
console.log(divElemento.tagName);    // "DIV"

// Manipulación de texto:
textoNodo.textContent = 'Nuevo texto';
console.log(textoNodo.textContent);  // "Nuevo texto"

// No tienen propiedades de elemento:
textoNodo.className = 'clase'; // No funciona
textoNodo.style.color = 'red'; // Error
*/

// COMPARACIÓN de métodos para contenido de texto:
/*
// 1. createTextNode (más explícito):
const textoSeguro1 = document.createTextNode('<script>alert("xss")</script>');
// Resultado: "<script>alert("xss")</script>" (literal)

// 2. textContent en elemento:
const div = document.createElement('div');
div.textContent = '<script>alert("xss")</script>';
// Resultado: "<script>alert("xss")</script>" (literal en div)

// 3. innerText en elemento:
const div2 = document.createElement('div');
div2.innerText = '<script>alert("xss")</script>';
// Resultado: "<script>alert("xss")</script>" (literal en div, respeta CSS)

// Todos son seguros vs innerHTML (peligroso):
div.innerHTML = '<script>alert("xss")</script>';
// Resultado: Script ejecutado ❌
*/

// CASOS DE USO para createTextNode:
/*
// 1. Contenido mixto seguro:
const parrafo = document.createElement('p');
parrafo.appendChild(document.createTextNode('Visita '));

const enlace = document.createElement('a');
enlace.href = 'https://ejemplo.com';
enlace.textContent = 'nuestro sitio web';

parrafo.appendChild(enlace);
parrafo.appendChild(document.createTextNode(' para más información.'));

// 2. Separadores dinámicos:
const menu = document.getElementById('menu');
menuItems.forEach((item, index) => {
    const enlace = document.createElement('a');
    enlace.href = item.url;
    enlace.textContent = item.texto;
    menu.appendChild(enlace);
    
    // Separador (excepto último):
    if (index < menuItems.length - 1) {
        menu.appendChild(document.createTextNode(' | '));
    }
});

// 3. Escape de contenido usuario:
const comentario = document.createElement('div');
comentario.className = 'comentario';
comentario.appendChild(document.createTextNode(inputUsuario)); // Siempre seguro
*/

// ===== MÉTODOS PELIGROSOS: RIESGOS DE SEGURIDAD XSS =====

/** Maneras no seguras: */
// Si utilizas algunos de estos métodos, debes sanitizar el string html.

// Método: innerHTML
document.getElementById('contenedor').innerHTML = '<p>Esta no es una manera segura de agregar elementos HTML.</p>';
// ANÁLISIS CRÍTICO de innerHTML:
// - innerHTML: Reemplaza contenido interno con HTML parseado
// - Riesgo: Cross-Site Scripting (XSS) si contenido no es confiable
// - Comportamiento: Destruye contenido existente y recrea todo
// - Performance: Lenta para cambios frecuentes

// VECTORES DE ATAQUE XSS:
/*
// 1. Scripts directos:
elemento.innerHTML = '<script>alert("XSS")</script>';
// Nota: <script> en innerHTML NO se ejecuta, pero otros vectores sí

// 2. Event handlers:
elemento.innerHTML = '<img src="x" onerror="alert(\'XSS\')">';
// ✅ SE EJECUTA - Muy peligroso

// 3. Links JavaScript:
elemento.innerHTML = '<a href="javascript:alert(\'XSS\')">Click</a>';
// ✅ SE EJECUTA al hacer click

// 4. CSS con expresiones:
elemento.innerHTML = '<div style="background:url(javascript:alert(\'XSS\'))">Text</div>';
// ✅ Puede ejecutarse en browsers antiguos

// 5. SVG con scripts:
elemento.innerHTML = '<svg onload="alert(\'XSS\')"></svg>';
// ✅ SE EJECUTA inmediatamente

// 6. Form elements maliciosos:
elemento.innerHTML = '<form><input name="parentNode"><input name="innerHTML" value="<script>alert(\'XSS\')</script>"></form>';
// ✅ Puede causar prototype pollution
*/

// CUÁNDO es "relativamente seguro" innerHTML:
/*
// ✅ Contenido completamente controlado:
elemento.innerHTML = '<p class="mensaje">Texto estático del desarrollador</p>';

// ✅ Templates literales con escape:
const nombre = escapeHTML(nombreUsuario);
elemento.innerHTML = `<div class="saludo">Hola, <strong>${nombre}</strong></div>`;

// ✅ Con bibliotecas de sanitización:
const DOMPurify = window.DOMPurify;
const htmlLimpio = DOMPurify.sanitize(htmlPeligroso);
elemento.innerHTML = htmlLimpio;
*/

// Método: insertAdjacentHTML
document.getElementById('contenedor').insertAdjacentHTML('beforeend', '<p>Esta tampoco es una manera segura de agregar elementos HTML.</p>');
// ANÁLISIS de insertAdjacentHTML:
// - insertAdjacentHTML(position, html): Inserta HTML en posición específica
// - Posiciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
// - Riesgos: Idénticos a innerHTML
// - Ventaja: No destruye contenido existente

// POSICIONES DE INSERCIÓN:
/*
<!-- beforebegin -->
<element>
  <!-- afterbegin -->
  contenido existente
  <!-- beforeend -->
</element>
<!-- afterend -->

Ejemplos:
const referencia = document.getElementById('referencia');

// Antes del elemento:
referencia.insertAdjacentHTML('beforebegin', '<h2>Título antes</h2>');

// Como primer hijo:
referencia.insertAdjacentHTML('afterbegin', '<p>Primer párrafo</p>');

// Como último hijo:
referencia.insertAdjacentHTML('beforeend', '<p>Último párrafo</p>');

// Después del elemento:
referencia.insertAdjacentHTML('afterend', '<footer>Después</footer>');
*/

// ALTERNATIVAS SEGURAS a insertAdjacentHTML:
/*
// insertAdjacentElement (seguro):
const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Contenido seguro';
referencia.insertAdjacentElement('beforeend', nuevoElemento);

// insertAdjacentText (solo texto):
referencia.insertAdjacentText('beforeend', 'Texto plano seguro');

// Combinación segura para HTML complejo:
const contenedor = document.createElement('div');
contenedor.className = 'mensaje';

const titulo = document.createElement('h3');
titulo.textContent = tituloDelUsuario; // Seguro

const descripcion = document.createElement('p');
descripcion.textContent = descripcionDelUsuario; // Seguro

contenedor.append(titulo, descripcion);
referencia.insertAdjacentElement('beforeend', contenedor);
*/

// Método: outerHTML
document.getElementById('contenedor').outerHTML = '<div>Tampoco es seguro usar este método.</div>';
// ANÁLISIS CRÍTICO de outerHTML:
// - outerHTML: REEMPLAZA el elemento completo (incluyendo él mismo)
// - Riesgos: Máximos - puede cambiar estructura completa + XSS
// - Efecto: Elemento original se convierte en "huérfano"
// - Referencias: Se rompen después del reemplazo

// PROBLEMAS SERIOS con outerHTML:
/*
// 1. Referencias rotas:
const elemento = document.getElementById('contenedor');
const referencia = elemento;
const padre = elemento.parentNode;

elemento.outerHTML = '<div id="nuevo">Reemplazo</div>';

console.log(referencia.parentNode); // null - elemento huérfano
console.log(padre.querySelector('#contenedor')); // null - ya no existe
console.log(padre.querySelector('#nuevo')); // HTMLElement - nuevo elemento

// 2. Event listeners perdidos:
elemento.addEventListener('click', manejarClick);
elemento.addEventListener('mouseover', manejarHover);

elemento.outerHTML = '<div id="contenedor">Nuevo contenido</div>';
// Todos los listeners se pierden, hay que registrarlos de nuevo

// 3. Referencias de otros elementos:
const hijo = elemento.querySelector('.hijo-importante');
const hermano = elemento.nextElementSibling;

elemento.outerHTML = '<div>Sin hijos</div>';

console.log(hijo.parentNode); // null - referencia rota
// hermano sigue siendo válido porque no era hijo del elemento
*/

// EJEMPLO VISUAL del comportamiento:
/*
// HTML inicial:
<div id="contenedor" class="mi-clase">
  <p class="hijo">Contenido interno</p>
  <span>Más contenido</span>
</div>

// JavaScript:
const elemento = document.getElementById('contenedor');
elemento.outerHTML = '<section class="nueva" id="reemplazo">Nuevo contenido</section>';

// HTML resultante:
<section class="nueva" id="reemplazo">Nuevo contenido</section>

// NOTA: TODO el <div> original desapareció completamente
*/

// ===== SANITIZACIÓN Y MEJORES PRÁCTICAS =====

// FUNCIÓN DE ESCAPE básica:
/*
const escapeHTML = (unsafe) => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

// Uso seguro:
const inputUsuario = '<script>alert("xss")</script>';
const seguro = escapeHTML(inputUsuario);
elemento.innerHTML = `<p>Usuario escribió: ${seguro}</p>`;
// Resultado: "<p>Usuario escribió: &lt;script&gt;alert("xss")&lt;/script&gt;</p>"
*/

// BIBLIOTECAS DE SANITIZACIÓN profesionales:
/*
// 1. DOMPurify (recomendada):
import DOMPurify from 'dompurify';

const htmlSucio = '<img src=x onerror=alert(1)>';
const htmlLimpio = DOMPurify.sanitize(htmlSucio);
// Resultado: '<img src="x">' (onerror removido)

elemento.innerHTML = htmlLimpio; // Ahora es seguro

// 2. Configuración personalizada:
const htmlLimpio = DOMPurify.sanitize(htmlSucio, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
    ALLOWED_ATTR: ['class']
});

// 3. js-xss:
import { filterXSS } from 'xss';
const htmlLimpio = filterXSS(htmlSucio);

// 4. sanitize-html:
import sanitizeHtml from 'sanitize-html';
const htmlLimpio = sanitizeHtml(htmlSucio, {
    allowedTags: ['p', 'br', 'strong'],
    allowedAttributes: {}
});
*/

// PATRÓN RECOMENDADO para crear elementos seguros:
/*
const crearElementoSeguro = (tag, contenido, atributos = {}) => {
    const elemento = document.createElement(tag);
    
    // Contenido seguro:
    if (typeof contenido === 'string') {
        elemento.textContent = contenido; // Siempre seguro
    } else if (contenido instanceof Node) {
        elemento.appendChild(contenido);
    } else if (Array.isArray(contenido)) {
        contenido.forEach(item => {
            if (typeof item === 'string') {
                elemento.appendChild(document.createTextNode(item));
            } else if (item instanceof Node) {
                elemento.appendChild(item);
            }
        });
    }
    
    // Atributos seguros:
    const atributosPermitidos = ['id', 'class', 'data-*', 'src', 'href', 'alt', 'title'];
    Object.entries(atributos).forEach(([key, value]) => {
        if (atributosPermitidos.some(permitido => 
            key === permitido || (permitido.endsWith('*') && key.startsWith(permitido.slice(0, -1)))
        )) {
            elemento.setAttribute(key, String(value));
        }
    });
    
    return elemento;
};

// Uso:
const botonSeguro = crearElementoSeguro('button', 'Mi botón', {
    class: 'btn btn-primary',
    'data-action': 'submit',
    id: 'boton-principal'
});
*/

// REGLAS DE ORO para seguridad:
/*
🟢 SIEMPRE SEGURO:
- createElement() + propiedades individuales
- createTextNode()
- createDocumentFragment()
- cloneNode()
- textContent, innerText
- setAttribute() con valores controlados

🟡 USAR CON PRECAUCIÓN:
- innerHTML con contenido 100% controlado
- insertAdjacentHTML con sanitización
- outerHTML solo en casos muy específicos

🔴 NUNCA SEGURO sin sanitización:
- innerHTML con input de usuario
- outerHTML con contenido externo
- insertAdjacentHTML con datos no confiables
- eval() con strings HTML
- document.write() con contenido dinámico

📋 CHECKLIST de seguridad:
□ ¿El contenido viene de usuario/fuente externa?
□ ¿Estoy usando métodos que interpretan HTML?
□ ¿He sanitizado el contenido apropiadamente?
□ ¿Puedo usar métodos seguros alternativos?
□ ¿He probado con payloads XSS comunes?
*/

// HERRAMIENTAS DE DEBUGGING para seguridad:
/*
// Detectar innerHTML peligroso en desarrollo:
if (process.env.NODE_ENV === 'development') {
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML').set;
    
    Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value) {
            // Detectar contenido potencialmente peligroso:
            const peligroso = /<script|javascript:|on\w+\s*=|<iframe|<object|<embed/i;
            if (typeof value === 'string' && peligroso.test(value)) {
                console.warn('⚠️ POSIBLE XSS en innerHTML:', value);
                console.trace(); // Stack trace para encontrar el origen
            }
            originalInnerHTML.call(this, value);
        },
        get: function() {
            return Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML').get.call(this);
        }
    });
}
*/
