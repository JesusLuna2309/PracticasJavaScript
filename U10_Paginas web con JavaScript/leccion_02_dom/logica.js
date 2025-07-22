/**
 * DIFERENCIAS FUNDAMENTALES EN LA NAVEGACIÓN DEL DOM:
 * 
 * childNodes retorna nodos hijos que incluye nodos de elementos, 
 * nodos de texto y comentarios.
 * children retorna elementos hijos excepto texto y comentarios.
 * 
 * TIPOS DE NODOS EN EL DOM:
 * - Node.ELEMENT_NODE (1): Elementos HTML como <div>, <p>, etc.
 * - Node.TEXT_NODE (3): Contenido de texto, incluyendo espacios en blanco
 * - Node.COMMENT_NODE (8): Comentarios HTML <!-- -->
 * - Node.DOCUMENT_NODE (9): El documento completo
 * - Node.DOCUMENT_TYPE_NODE (10): DOCTYPE declaration
 */

// NAVEGACIÓN A NIVEL DE DOCUMENTO:
const arbolNodos = document.childNodes;
const hijos = document.children;
// ANÁLISIS DETALLADO:
// - document.childNodes: NodeList con TODOS los nodos hijos del documento
// - Típicamente incluye: DOCTYPE, elementos HTML, posibles comentarios
// - document.children: HTMLCollection solo con elementos HTML
// - Normalmente solo contiene: <html> element

console.log(arbolNodos);
// SALIDA ESPERADA en arbolNodos:
// NodeList(2) [<!DOCTYPE html>, <html>...]
// - Índice 0: <!DOCTYPE html> (Document Type Node)
// - Índice 1: <html> element (Element Node)
// - Posibles nodos de texto si hay espacios entre DOCTYPE y <html>

console.log(hijos);
// SALIDA ESPERADA en hijos:
// HTMLCollection(1) [<html>...]
// - Solo el elemento <html>
// - Sin DOCTYPE ni nodos de texto

// COMPARACIÓN PRÁCTICA:
/*
console.log('Cantidad en childNodes:', arbolNodos.length); // Típicamente 2
console.log('Cantidad en children:', hijos.length);       // Típicamente 1
console.log('Primer childNode:', arbolNodos[0]);          // <!DOCTYPE html>
console.log('Primer children:', hijos[0]);                // <html>
*/

// NAVEGACIÓN A NIVEL DEL BODY:
const arbolNodosBody = document.body.childNodes;
const hijoBody = document.body.children;
// ANÁLISIS ESPECÍFICO del body:
// - body.childNodes: TODOS los nodos dentro de <body>
// - body.children: SOLO elementos HTML dentro de <body>
// - La diferencia aquí es MÁS NOTABLE debido a espacios en blanco

console.log(arbolNodosBody);
// SALIDA TÍPICA en arbolNodosBody:
// NodeList(7) [text, <div>, text, <button>, text, <script>, text]
// - text: Nodos de texto por espacios/saltos de línea entre elementos
// - <div>, <button>, <script>: Elementos HTML reales
// - Patrón común: text, element, text, element, text...

console.log(hijoBody);
// SALIDA TÍPICA en hijoBody:
// HTMLCollection(3) [<div>, <button>, <script>]
// - Solo elementos HTML, sin nodos de texto
// - Lista "limpia" de elementos

// DEMOSTRACIÓN PRÁCTICA de la diferencia:
/*
console.log('--- COMPARACIÓN DETALLADA ---');
console.log('childNodes del body:');
arbolNodosBody.forEach((nodo, index) => {
    console.log(`${index}: ${nodo.nodeType} - ${nodo.nodeName}`, nodo);
    // nodeType: 1=Element, 3=Text, 8=Comment
    // nodeName: Nombre del nodo/elemento
});

console.log('children del body:');
Array.from(hijoBody).forEach((elemento, index) => {
    console.log(`${index}: ${elemento.tagName}`, elemento);
    // tagName: Solo elementos tienen tagName
});
*/

// CASOS DE USO PRÁCTICOS:

// ✅ USAR children cuando:
// - Solo interesas en elementos HTML
// - Quieres evitar nodos de texto inesperados
// - Iteras sobre elementos para manipulación
/*
for (const elemento of document.body.children) {
    console.log(elemento.tagName); // DIV, BUTTON, SCRIPT, etc.
}
*/

// ✅ USAR childNodes cuando:
// - Necesitas acceso a TODO el contenido
// - Manipulas texto específicamente
// - Trabajas con contenido mixto (elementos + texto)
/*
for (const nodo of document.body.childNodes) {
    if (nodo.nodeType === Node.TEXT_NODE) {
        console.log('Texto encontrado:', nodo.textContent.trim());
    }
}
*/

// MÉTODOS RELACIONADOS ÚTILES:
/*
// Navegación entre elementos hermanos:
const primerElemento = document.body.firstElementChild;
const ultimoElemento = document.body.lastElementChild;
const siguienteElemento = primerElemento.nextElementSibling;
const anteriorElemento = ultimoElemento.previousElementSibling;

// Navegación entre nodos (incluye texto):
const primerNodo = document.body.firstChild;
const ultimoNodo = document.body.lastChild;
const siguienteNodo = primerNodo.nextSibling;
const anteriorNodo = ultimoNodo.previousSibling;

// Contadores:
const cantidadElementos = document.body.childElementCount;
const cantidadNodos = document.body.childNodes.length;
*/

// MANIPULACIÓN DE ESTILOS CSS:
// Cada elemento HTML tiene una lista de propiedades que 
// podemos cambiar con JavaScript:

const elementosBotones = document.getElementsByClassName('boton-redondo');
// ANÁLISIS de getElementsByClassName:
// - Retorna HTMLCollection (colección "viva")
// - Se actualiza automáticamente si DOM cambia
// - Busca por nombre de clase CSS
// - Retorna TODOS los elementos con esa clase

console.log(elementosBotones);
// SALIDA ESPERADA:
// HTMLCollection(n) [<button class="boton-redondo">, ...]
// - n = cantidad de elementos con clase 'boton-redondo'
// - Cada elemento es un objeto HTMLElement

// CARACTERÍSTICAS de HTMLCollection:
// - length: Cantidad de elementos
// - [index]: Acceso por índice
// - namedItem(name): Acceso por name o id
// - item(index): Método alternativo de acceso

// VERIFICACIONES ÚTILES:
/*
console.log('Cantidad de botones:', elementosBotones.length);
console.log('Primer botón:', elementosBotones[0]);
console.log('Es HTMLCollection:', elementosBotones instanceof HTMLCollection); // true
console.log('Es Array:', Array.isArray(elementosBotones)); // false
*/

// ITERACIÓN Y MANIPULACIÓN:
for (const boton of elementosBotones){
    // for...of: Sintaxis moderna para iterar HTMLCollection
    // ALTERNATIVAS de iteración:
    // - for (let i = 0; i < elementosBotones.length; i++)
    // - Array.from(elementosBotones).forEach(boton => ...)
    // - [...elementosBotones].forEach(boton => ...)
    
    console.log(boton);
    // INFORMACIÓN del elemento:
    // - tagName: Tipo de elemento (BUTTON)
    // - className: Clases CSS aplicadas
    // - id: Identificador único
    // - innerHTML: Contenido HTML interno
    // - textContent: Solo texto, sin HTML
    
    boton.style.border = 'black solid 2px';
    // MANIPULACIÓN DIRECTA de estilos CSS:
    // - boton.style: Objeto CSSStyleDeclaration
    // - Acceso directo a propiedades CSS
    // - Aplica estilos INLINE (alta especificidad)
    // - Sobrescribe estilos de CSS externo/interno
}

// ANÁLISIS PROFUNDO de style property:
/*
const primerBoton = elementosBotones[0];
if (primerBoton) {
    // MÚLTIPLES FORMAS de modificar estilos:
    
    // 1. Propiedades individuales:
    primerBoton.style.border = 'black solid 2px';
    primerBoton.style.backgroundColor = 'lightblue';
    primerBoton.style.fontSize = '16px';
    primerBoton.style.margin = '10px';
    
    // 2. cssText para múltiples estilos:
    primerBoton.style.cssText = `
        border: black solid 2px;
        background-color: lightblue;
        font-size: 16px;
        margin: 10px;
    `;
    
    // 3. setProperty() method:
    primerBoton.style.setProperty('border', 'black solid 2px');
    primerBoton.style.setProperty('background-color', 'lightblue', 'important');
    
    // 4. Acceso a valores computados:
    const estilosComputados = getComputedStyle(primerBoton);
    console.log('Color computado:', estilosComputados.color);
    console.log('Font size computado:', estilosComputados.fontSize);
}
*/

// MEJORES PRÁCTICAS para manipulación de estilos:

// ✅ USAR CLASES CSS en lugar de estilos inline:
/*
// CSS:
.boton-destacado {
    border: black solid 2px;
    background-color: lightblue;
    font-weight: bold;
}

// JavaScript:
for (const boton of elementosBotones) {
    boton.classList.add('boton-destacado');
}
*/

// ✅ MÉTODOS de classList:
/*
elemento.classList.add('nueva-clase');
elemento.classList.remove('clase-existente');
elemento.classList.toggle('clase-condicional');
elemento.classList.contains('verificar-clase');
elemento.classList.replace('clase-vieja', 'clase-nueva');
*/

// ✅ MANIPULACIÓN CONDICIONAL:
/*
for (const boton of elementosBotones) {
    // Aplicar estilos basados en condiciones:
    if (boton.textContent.includes('Importante')) {
        boton.style.border = 'red solid 3px';
        boton.style.fontWeight = 'bold';
    } else {
        boton.style.border = 'black solid 2px';
        boton.style.fontWeight = 'normal';
    }
    
    // O usando clases:
    boton.classList.toggle('importante', boton.textContent.includes('Importante'));
}
*/

// OPTIMIZACIONES Y CONSIDERACIONES:

// ⚠️ CUIDADO con HTMLCollection "viva":
/*
// PROBLEMA: La colección cambia durante la iteración
const botones = document.getElementsByClassName('boton-redondo');
for (let i = 0; i < botones.length; i++) {
    // Si removemos la clase durante iteración, la colección se reduce
    botones[i].classList.remove('boton-redondo'); // ¡Problema!
}

// SOLUCIÓN: Convertir a array estático
const botonesArray = Array.from(document.getElementsByClassName('boton-redondo'));
botonesArray.forEach(boton => {
    boton.classList.remove('boton-redondo'); // ✅ Seguro
});
*/

// ✅ ALTERNATIVAS MODERNAS:
/*
// querySelector para un elemento:
const primerBoton = document.querySelector('.boton-redondo');

// querySelectorAll para todos (NodeList estática):
const todosLosBotones = document.querySelectorAll('.boton-redondo');

// Diferencias:
// - querySelectorAll retorna NodeList (estática)
// - getElementsByClassName retorna HTMLCollection (viva)
// - querySelector más flexible (acepta cualquier selector CSS)
*/

// MANEJO DE ERRORES:
/*
const elementosBotones = document.getElementsByClassName('boton-redondo');

if (elementosBotones.length === 0) {
    console.warn('No se encontraron elementos con clase "boton-redondo"');
} else {
    console.log(`Encontrados ${elementosBotones.length} botones`);
    
    for (const boton of elementosBotones) {
        try {
            boton.style.border = 'black solid 2px';
            console.log('Estilo aplicado correctamente a:', boton);
        } catch (error) {
            console.error('Error aplicando estilo:', error);
        }
    }
}
*/

// CASOS DE USO AVANZADOS:

// Modificación masiva con validación:
/*
const aplicarEstilosMasivos = (elementos, estilos) => {
    const resultados = {
        exitosos: 0,
        fallidos: 0,
        errores: []
    };
    
    for (const elemento of elementos) {
        try {
            Object.assign(elemento.style, estilos);
            resultados.exitosos++;
        } catch (error) {
            resultados.fallidos++;
            resultados.errores.push({elemento, error});
        }
    }
    
    return resultados;
};

// Uso:
const estilosNuevos = {
    border: 'black solid 2px',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px'
};

const resultado = aplicarEstilosMasivos(elementosBotones, estilosNuevos);
console.log('Resultados:', resultado);
*/

// Observador de cambios en el DOM:
/*
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            console.log('Elementos agregados/removidos:', mutation);
            
            // Reaplicar estilos a nuevos elementos:
            const nuevosElementos = document.getElementsByClassName('boton-redondo');
            for (const elemento of nuevosElementos) {
                if (!elemento.hasAttribute('data-styled')) {
                    elemento.style.border = 'black solid 2px';
                    elemento.setAttribute('data-styled', 'true');
                }
            }
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
*/

// DEBUGGING Y HERRAMIENTAS DE DESARROLLO:
/*
// Inspección detallada de elementos:
const analizarElemento = (elemento) => {
    return {
        tagName: elemento.tagName,
        className: elemento.className,
        id: elemento.id,
        estilosInline: elemento.style.cssText,
        estilosComputados: getComputedStyle(elemento),
        posicion: elemento.getBoundingClientRect(),
        atributos: Array.from(elemento.attributes).map(attr => ({
            nombre: attr.name,
            valor: attr.value
        }))
    };
};

// Uso para debugging:
if (elementosBotones.length > 0) {
    console.table(analizarElemento(elementosBotones[0]));
}
*/
