/**
 * EVENT LISTENER PARA LA CARGA COMPLETA DEL DOM
 * 
 * DOMContentLoaded es MUY IMPORTANTE y diferente a 'load':
 * - DOMContentLoaded: Se dispara cuando el HTML está parseado y el DOM construido
 * - load: Se dispara cuando TODO está cargado (imágenes, CSS, scripts, etc.)
 * 
 * Usar DOMContentLoaded es más rápido porque no espera a recursos externos
 * Perfecto para inicializar event listeners y manipulaciones del DOM
 */
document.addEventListener("DOMContentLoaded", async function (){
    // Una vez que el DOM está listo, configuramos el event listener del botón
    // getElementById es más rápido que querySelector para IDs
    // Asociamos la función cargarGaleria al evento click del botón
    document.getElementById('btn-carga').addEventListener('click', cargarGaleria);
    
    // NOTA: La función es 'async' aunque no usemos await aquí
    // Esto permite usar await en futuras expansiones de la inicialización
});

/**
 * FUNCIÓN PRINCIPAL PARA CARGAR Y MOSTRAR LA GALERÍA
 * 
 * Esta función es async porque necesita esperar datos de cargarDatos()
 * Maneja tanto la carga exitosa como los errores de forma elegante
 */
async function cargarGaleria() {
    // OBTENCIÓN DEL ELEMENTO DE ERROR
    // getElementsByClassName retorna un HTMLCollection (array-like)
    // [0] obtiene el primer elemento (asumimos que solo hay uno)
    const mensajeError = document.getElementsByClassName('mensaje-error')[0];
    
    // RESET DEL MENSAJE DE ERROR
    // mensajeError.style = {} resetea todos los estilos inline
    // Esto oculta el mensaje de error de operaciones anteriores
    // Alternativa: mensajeError.style.display = 'none'
    mensajeError.style = {};
    
    /**
     * TRY/CATCH - MANEJO DE ERRORES ASÍNCRONOS
     * 
     * try/catch con async/await captura:
     * 1. Errores de red (sin internet, servidor caído)
     * 2. Errores de archivo (images.json no encontrado)
     * 3. Errores de parsing JSON (JSON malformado)
     * 4. Cualquier error en cargarDatos()
     */
    try {
        // AWAIT - ESPERA LOS DATOS DE FORMA NO BLOQUEANTE
        // cargarDatos() retorna una Promise, await la "desenvuelve"
        // El hilo principal no se bloquea, otros eventos pueden procesarse
        const data = await cargarDatos();
        
        // OBTENCIÓN DEL CONTENEDOR PRINCIPAL
        // Aquí se insertarán dinámicamente todas las imágenes
        const imageContainer = document.getElementById('contenedor');
        
        /**
         * ITERACIÓN Y CREACIÓN DINÁMICA DE ELEMENTOS
         * 
         * forEach() itera sobre cada objeto imagen en el array
         * Para cada imagen creamos una estructura HTML completa
         */
        data.imagenes.forEach(imagen => {
            // CREACIÓN DEL CONTENEDOR DE IMAGEN
            // createElement() es más seguro que innerHTML para contenido dinámico
            // Previene inyección de código malicioso (XSS attacks)
            const contenedorImagen = document.createElement('div');
            contenedorImagen.className = 'contenedor-imagen';
            
            // CREACIÓN DEL TÍTULO
            // h3 para jerarquía semántica correcta
            const titulo = document.createElement('h3');
            // innerText es más seguro que innerHTML para texto plano
            // Automáticamente escapa caracteres especiales HTML
            titulo.innerText = imagen.titulo;
            
            // CREACIÓN DE LA DESCRIPCIÓN
            const descripcion = document.createElement('p');
            descripcion.innerText = imagen.descripcion;
            
            // CREACIÓN DEL ELEMENTO IMAGEN
            const imgElemento = document.createElement('img');
            // .src asigna la URL de la imagen (puede ser relativa o absoluta)
            imgElemento.src = imagen.url;
            // .alt es CRUCIAL para accesibilidad (lectores de pantalla)
            imgElemento.alt = imagen.alt;
            
            /**
             * CONSTRUCCIÓN DE LA JERARQUÍA DOM
             * 
             * appendChild() agrega elementos como hijos
             * El orden importa para el layout final:
             * 1. Imagen primero (visual principal)
             * 2. Título después
             * 3. Descripción al final
             */
            contenedorImagen.appendChild(imgElemento);
            contenedorImagen.appendChild(titulo);
            contenedorImagen.appendChild(descripcion);
            
            // INSERCIÓN EN EL CONTENEDOR PRINCIPAL
            // Cada contenedorImagen se agrega al DOM principal
            imageContainer.appendChild(contenedorImagen);
        });
        
    } catch(error) {
        /**
         * MANEJO DE ERRORES - FEEDBACK AL USUARIO
         * 
         * Si cualquier cosa falla en el try, llegamos aquí
         * Mostramos el mensaje de error al usuario de forma visual
         */
        mensajeError.style.display = 'block';
        
        // EN DESARROLLO: También log del error para debugging
        // console.error('Error cargando galería:', error);
        
        // EN PRODUCCIÓN: Podrías enviar el error a un servicio de logging
        // logService.error('Gallery load failed', error);
    }
}

/**
 * FUNCIÓN PARA CARGAR DATOS DESDE ARCHIVO JSON
 * 
 * Esta función demuestra un patrón híbrido: Promise wrapper alrededor de fetch()
 * Aunque fetch() ya retorna una Promise, esto permite control granular de errores
 */
function cargarDatos(){
    // RETORNO DE NUEVA PROMISE
    // Aunque redundante, permite personalizar manejo de errores
    return new Promise((resolve, reject) => {
        
        /**
         * FETCH API - OPERACIÓN DE RED ASÍNCRONA
         * 
         * fetch() es moderno reemplazo de XMLHttpRequest
         * Retorna una Promise que se resuelve con un Response object
         * NO rechaza automáticamente en errores HTTP (404, 500, etc.)
         */
        fetch("images.json")
        .then(response => {
            /**
             * VERIFICACIÓN DE RESPUESTA EXITOSA
             * 
             * response.ok es true para códigos 200-299
             * fetch() NO rechaza automáticamente en 404, 500, etc.
             * Debemos verificar manualmente y rechazar si es necesario
             */
            if(!response.ok) {
                // RECHAZO MANUAL DE LA PROMISE
                // Esto activará el .catch() más abajo
                reject("Los datos no fueron cargados");
                return; // Importante: salir para no continuar el chain
            }
            
            /**
             * PARSING DEL JSON
             * 
             * response.json() también retorna una Promise
             * Puede fallar si el archivo no es JSON válido
             * El parsing es asíncrono para archivos grandes
             */
            return response.json();
        })
        .then(data => {
            /**
             * RESOLUCIÓN EXITOSA
             * 
             * Si llegamos aquí, todo salió bien:
             * 1. Archivo encontrado (response.ok = true)
             * 2. JSON parseado correctamente
             * 3. Datos listos para usar
             */
            resolve(data);
        })
        .catch(error => {
            /**
             * CAPTURA DE ERRORES
             * 
             * Este .catch() captura:
             * 1. Errores de red (sin internet, servidor caído)
             * 2. Archivo no encontrado (aunque debería ser manejado arriba)
             * 3. JSON malformado (error en response.json())
             * 4. Cualquier otro error en la cadena
             */
            reject("Error al procesar los datos: " + error);
        });
    });
}

/**
 * FLUJO COMPLETO DE EJECUCIÓN:
 * 
 * 1. DOMContentLoaded se dispara cuando la página carga
 * 2. Se asigna el event listener al botón
 * 3. Usuario hace click en el botón
 * 4. Se ejecuta cargarGaleria()
 * 5. Se resetea el mensaje de error
 * 6. Se llama a cargarDatos() con await
 * 7. cargarDatos() hace fetch() a "images.json"
 * 8. Si es exitoso: se parsea el JSON y se resuelve
 * 9. Si falla: se rechaza con mensaje de error
 * 10. En cargarGaleria(): si success -> crear elementos DOM
 * 11. Si error -> mostrar mensaje de error
 * 
 * VENTAJAS DE ESTE PATRÓN:
 * - Separación clara de responsabilidades
 * - Manejo robusto de errores
 * - Feedback visual al usuario
 * - Código legible con async/await
 * - Prevención de XSS con createElement()
 * 
 * POSIBLES MEJORAS:
 * - Simplificar cargarDatos() retornando fetch() directamente
 * - Agregar loading spinner durante la carga
 * - Implementar retry logic para errores de red
 * - Cachear datos para evitar cargas repetidas
 */