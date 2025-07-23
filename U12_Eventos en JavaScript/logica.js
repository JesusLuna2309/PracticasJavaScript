// Función se ejecuta cuando se hace click en alguno de los robots:
function clickEnRobot(numRobot){
    // Template literal (backticks) para interpolación de variables
    // Más eficiente y legible que concatenación: "El robot #" + numRobot + " fué presionado"
    console.log(`El robot #${numRobot} fué presionado`);
    
    // En una aplicación real, aquí podrías:
    // - Cambiar el estado visual del robot
    // - Reproducir un sonido
    // - Actualizar el score del juego
    // - Enviar datos al servidor
}

/**
 * VALIDACIÓN DE FORMULARIO - MANEJO DE EVENTO SUBMIT
 * 
 * Esta función se ejecuta cuando el formulario es enviado (submit event)
 * Implementa validación tanto de formato como de completitud de datos
 * 
 * @returns {boolean} true si la validación pasa, false si falla
 */
function validarFormulario() {
    // OBTENCIÓN DE VALORES DEL DOM
    // document.getElementById() busca elementos por su atributo 'id'
    // .value obtiene el contenido actual del input
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    /**
     * EXPRESIÓN REGULAR PARA VALIDACIÓN DE EMAIL
     * 
     * Patrón explicado:
     * ^                    - Inicio de cadena
     * [a-zA-Z0-9._-]+      - Uno o más caracteres alfanuméricos, puntos, guiones bajos o guiones
     * @                    - Literal arroba
     * [a-zA-Z0-9.-]+       - Uno o más caracteres alfanuméricos, puntos o guiones (dominio)
     * \.                   - Punto literal (escapado)
     * [a-zA-Z]{2,}         - Dos o más letras (extensión del dominio)
     * $                    - Final de cadena
     * 
     * Ejemplos válidos: user@example.com, test.email@domain.co.uk
     * Ejemplos inválidos: user@, @domain.com, user.domain.com
     */
    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // VALIDACIÓN DE FORMATO DE EMAIL
    // .test() ejecuta la expresión regular contra la cadena
    // Retorna true si coincide, false si no
    if(!patronEmail.test(email)){
        // alert() muestra un popup bloqueante al usuario
        // En aplicaciones modernas se prefieren notificaciones menos intrusivas
        alert("El correo electrónico no es válido");
        
        // return false previene el envío del formulario
        // El evento submit no continúa su flujo normal
        return false;
    }
  
    // VALIDACIÓN DE CAMPOS VACÍOS
    // Usar == "" es menos estricto que === ""
    // También detectará null y undefined como "vacío"
    // Alternativa moderna: nombre.trim() === "" (elimina espacios)
    if (nombre == "" || apellido == "" || email == "" || password == "") {
        alert("Todos los campos deben rellenarse");
        return false;
    }
  
    // Si llegamos aquí, todas las validaciones pasaron
    // return true permite que el formulario se envíe normalmente
    return true;
}

/**
 * EJEMPLOS DE DIFERENTES TIPOS DE EVENTOS DEL DOM
 * 
 * JavaScript ofrece una amplia gama de eventos para detectar interacciones
 * La lista completa puedes encontrarla en este enlace:
 * https://developer.mozilla.org/en-US/docs/Web/API/Event
 */

/**
 * EVENTO SCROLL - DETECTA DESPLAZAMIENTO EN LA PÁGINA
 * 
 * Se dispara cada vez que el usuario hace scroll (rueda del mouse, teclas, touch)
 * Muy usado para: lazy loading, parallax, "back to top", infinite scroll
 */
document.addEventListener('scroll', evento => {
    // 'evento' es un objeto ScrollEvent que contiene información detallada
    // evento.target: elemento que disparó el evento
    // evento.timeStamp: momento exacto cuando ocurrió
    console.log('Scroll en la página', evento);
    
    // En una app real podrías usar:
    // window.scrollY para obtener la posición vertical actual
    // elemento.scrollIntoView() para hacer scroll programático
});

/**
 * EVENTO RESIZE - DETECTA CAMBIOS EN EL TAMAÑO DE LA VENTANA
 * 
 * Se dispara cuando el usuario redimensiona la ventana del navegador
 * Esencial para responsive design y ajustes dinámicos de layout
 */
window.addEventListener('resize', evento => {
    // El objeto evento contiene información sobre el redimensionamiento
    console.log(evento);
    
    // window.innerWidth/innerHeight dan las dimensiones actuales del viewport
    // Útil para recalcular layouts, reposicionar elementos, ajustar gráficos
    console.log('Cambio de tamaño de la página', window.innerWidth, window.innerHeight);
    
    // Casos de uso comunes:
    // - Recalcular posiciones de modales
    // - Ajustar tamaños de canvas/gráficos
    // - Reorganizar elementos en grids responsivos
});

/**
 * EVENTO INPUT - DETECTA CAMBIOS EN TIEMPO REAL EN CAMPOS DE TEXTO
 * 
 * Se dispara CADA VEZ que el contenido de un input cambia
 * Más moderno y completo que 'keyup' porque incluye paste, drag&drop, etc.
 */
document.getElementById("nombre").addEventListener('input', evento => {
    // El objeto InputEvent contiene información sobre el cambio
    console.log(evento);
    
    // evento.data contiene el carácter específico que se añadió
    // (null si se eliminó contenido)
    console.log('Tecleo del nombre', evento.data);
    
    // evento.target.value contendría el valor completo actual
    // Perfecto para: validación en tiempo real, autocompletado, contadores de caracteres
});

/**
 * EJEMPLO AVANZADO: REMOVEVENTLISTENER
 * 
 * Demuestra cómo remover event listeners dinámicamente
 * Crucial para prevenir memory leaks en aplicaciones complejas
 */

let contador = 0; // Variable para contar clicks

/**
 * FUNCIÓN EVENT LISTENER CON AUTO-DESTRUCCIÓN
 * 
 * Esta función se elimina a sí misma después de 5 clicks
 * Es importante definirla como variable para poder referenciarla en removeEventListener
 */
const escuchadorClickPagina = evento => {
    console.log('Click en la página', evento);
    contador++;
    
    // CONDICIÓN DE AUTO-DESTRUCCIÓN
    // Después de 5 clicks, el listener se remueve automáticamente
    if(contador > 5){
        // removeEventListener REQUIERE la misma referencia de función
        // Por eso no podemos usar una arrow function anónima aquí
        document.removeEventListener('click', escuchadorClickPagina);
        
        console.log('Event listener removido después de 5 clicks');
        
        // En aplicaciones reales, remover listeners es importante para:
        // - Prevenir memory leaks
        // - Mejorar performance
        // - Evitar comportamientos inesperados
    }
}

// REGISTRO DEL EVENT LISTENER
// Se aplica a TODO el document, capturará clicks en cualquier parte
document.addEventListener('click', escuchadorClickPagina);

/**
 * EJEMPLO DISPATCHEVENT - EVENTOS PROGRAMÁTICOS
 * 
 * dispatchEvent permite "simular" eventos desde código
 * Útil para testing, automatización, y triggers programáticos
 */
for(let i = 0; i < 3; i++){
    // new Event('click') crea un objeto evento sintético
    // document.dispatchEvent() lo dispara como si fuera real
    document.dispatchEvent(new Event('click'));
    
    // Esto activará el escuchadorClickPagina definido arriba
    // Efectivamente "simula" 3 clicks automáticos al cargar la página
}

/**
 * NOTA IMPORTANTE SOBRE EL FLUJO:
 * 
 * 1. Se definen las funciones (clickEnRobot, validarFormulario)
 * 2. Se registran los event listeners (scroll, resize, input, click)
 * 3. Se disparan 3 eventos click programáticos
 * 4. El contador ya está en 3 cuando el usuario haga su primer click real
 * 5. Solo necesitará 2 clicks reales más para que se remueva el listener
 * 
 * En consola verás:
 * "Click en la página" (3 veces por dispatchEvent)
 * Luego al hacer click manual: 2 veces más y se remueve
 */
