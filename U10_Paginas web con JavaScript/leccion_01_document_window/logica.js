// OBTENCIÓN DE DIMENSIONES DE LA VENTANA DEL NAVEGADOR:
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
// ANÁLISIS DETALLADO:
// - window.innerWidth: Ancho VISIBLE de la ventana (excluyendo barras de desplazamiento)
// - window.innerHeight: Alto VISIBLE de la ventana (excluyendo barras de navegador)
// - const: Inmutable durante la ejecución actual, pero pueden cambiar si se redimensiona
// - Medidas en PÍXELES (valores enteros)

// DIFERENCIAS CON OTRAS PROPIEDADES:
// - window.outerWidth/outerHeight: Incluye bordes y barras del navegador
// - document.documentElement.clientWidth/clientHeight: Área de contenido sin scroll
// - screen.width/height: Dimensiones totales de la pantalla física

// CASOS DE USO:
// - Interfaces responsivas dinámicas
// - Posicionamiento de elementos
// - Cálculos de layout
// - Detección de dispositivos móviles

console.log(`Ancho de la ventana: ${windowWidth}px`);
console.log(`Alto de la ventana: ${windowHeight}px`);
// SALIDA A CONSOLA:
// - Template literals (${}) para interpolación
// - Información útil para debugging
// - Se ejecuta inmediatamente al cargar el script

// ALTERNATIVAS DE DEBUGGING:
// console.table({windowWidth, windowHeight}); // Formato tabla
// console.dir(window); // Explorar objeto window completo

// SELECCIÓN Y MANIPULACIÓN DEL DOM:
document.getElementsByClassName('boton-redondo')[0]
// ANÁLISIS de la selección:
// - document: Objeto global que representa el documento HTML
// - getElementsByClassName(): Devuelve HTMLCollection (live collection)
// - 'boton-redondo': Nombre de la clase CSS a buscar
// - [0]: Primer elemento encontrado (índice 0)

// PROBLEMAS POTENCIALES:
// - Si no existe elemento con esa clase → Error (no se puede acceder [0] de null)
// - HTMLCollection es "live" → Cambia automáticamente si DOM cambia
// - Método más viejo, menos eficiente que querySelector

// ALTERNATIVAS MODERNAS Y MEJORES:
// document.querySelector('.boton-redondo') // Más eficiente, devuelve primer elemento
// document.querySelectorAll('.boton-redondo')[0] // Similar pero con NodeList
// document.getElementById('id-especifico') // Si tiene ID único

// VERIFICACIÓN SEGURA:
/*
const boton = document.querySelector('.boton-redondo');
if (boton) {
    boton.addEventListener('click', handler);
} else {
    console.warn('Botón no encontrado');
}
*/

.addEventListener('click', event => {
    // REGISTRO DE EVENT LISTENER:
    // - addEventListener(): Método estándar para eventos
    // - 'click': Tipo de evento (también: 'mousedown', 'mouseup', etc.)
    // - event: Parámetro del evento (opcional pero útil)
    // - Arrow function: Sintaxis moderna, conserva contexto de 'this'
    
    // ALTERNATIVAS de registro de eventos:
    // element.onclick = function() {} // Versión antigua, solo un handler
    // element.onclick = () => {} // Arrow function en propiedad
    
    // INFORMACIÓN DEL EVENT OBJECT:
    // - event.target: Elemento que disparó el evento
    // - event.currentTarget: Elemento al que se asignó el listener
    // - event.preventDefault(): Previene comportamiento por defecto
    // - event.stopPropagation(): Evita que el evento burbujee
    
    let usuarioHaConfirmado = window.confirm('Estás seguro que quieres irte?');
    // DIÁLOGO DE CONFIRMACIÓN:
    // - window.confirm(): API nativa del navegador
    // - Muestra modal con "Aceptar" y "Cancelar"
    // - Retorna: true (Aceptar) o false (Cancelar)
    // - BLOQUEA la ejecución hasta que usuario responda
    
    // CARACTERÍSTICAS del confirm():
    // - Diseño no personalizable (estilo del navegador)
    // - Puede ser bloqueado por navegadores
    // - Considerado UX pobre en aplicaciones modernas
    // - No es asíncrono (bloquea thread principal)
    
    // ALTERNATIVAS MODERNAS:
    /*
    // Modal personalizado con promesas:
    const showCustomConfirm = (message) => {
        return new Promise((resolve) => {
            const modal = document.createElement('div');
            modal.innerHTML = `
                <div class="modal-overlay">
                    <div class="modal-content">
                        <p>${message}</p>
                        <button class="confirm-yes">Sí</button>
                        <button class="confirm-no">No</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.confirm-yes').onclick = () => {
                document.body.removeChild(modal);
                resolve(true);
            };
            
            modal.querySelector('.confirm-no').onclick = () => {
                document.body.removeChild(modal);
                resolve(false);
            };
        });
    };
    */

    if (usuarioHaConfirmado) {
        // RAMA VERDADERA: Usuario confirmó la acción
        
        window.alert('Nos vamos entonces!');
        // ALERTA INFORMATIVA:
        // - window.alert(): Otro modal nativo
        // - Solo botón "Aceptar"
        // - Bloquea ejecución hasta cerrar
        // - Mismo problema de UX que confirm()
        
        // ALTERNATIVAS para notificaciones:
        /*
        // Toast notification:
        const showToast = (message) => {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('fade-out');
                setTimeout(() => document.body.removeChild(toast), 300);
            }, 3000);
        };
        
        // Console como alternativa simple:
        console.info('Nos vamos entonces!');
        
        // Notification API del navegador:
        if ('Notification' in window) {
            new Notification('Nos vamos entonces!');
        }
        */
        
        window.location.href = 'https://www.linkedin.com/learning/';
        // REDIRECCIÓN DEL NAVEGADOR:
        // - window.location.href: Propiedad para cambiar URL
        // - Equivale a hacer clic en enlace
        // - Cambia la página actual (navegación completa)
        // - Se guarda en historial del navegador
        
        // ANÁLISIS DETALLADO de location:
        // - window.location: Objeto con info de URL actual
        // - .href: URL completa
        // - .assign(): Método equivalente (location.assign(url))
        // - .replace(): Redirige SIN agregar al historial
        // - .reload(): Recarga página actual
        
        // ALTERNATIVAS de navegación:
        /*
        // Sin historial (no se puede volver):
        window.location.replace('https://www.linkedin.com/learning/');
        
        // En nueva pestaña:
        window.open('https://www.linkedin.com/learning/', '_blank');
        
        // Con History API (SPA):
        history.pushState(null, '', '/nueva-ruta');
        
        // Con router personalizado:
        router.navigate('/nueva-ruta');
        */
        
    } else {
        // RAMA FALSA: Usuario canceló la acción
        
        window.alert('Nos quedamos aquí entonces!');
        // FEEDBACK al usuario sobre cancelación
        // - Confirma que se respetó su decisión
        // - Cierra el flujo de interacción
        // - Mismos problemas de UX que alert anterior
        
        // ALTERNATIVAS para retroalimentación:
        /*
        console.log('Usuario canceló la redirección');
        showToast('Nos quedamos aquí entonces!');
        
        // Actualizar UI para reflejar estado:
        document.querySelector('.status').textContent = 'Acción cancelada';
        
        // Animar botón para mostrar feedback:
        const boton = event.target;
        boton.classList.add('shake-animation');
        setTimeout(() => boton.classList.remove('shake-animation'), 500);
        */
    }
});

// MEJORAS RECOMENDADAS PARA ESTE CÓDIGO:

// 1. MANEJO SEGURO DE ELEMENTOS:
/*
const inicializarBotonRedondo = () => {
    const boton = document.querySelector('.boton-redondo');
    
    if (!boton) {
        console.warn('Botón con clase "boton-redondo" no encontrado');
        return;
    }
    
    boton.addEventListener('click', manejarClicBoton);
};

// Asegurar que DOM esté cargado:
document.addEventListener('DOMContentLoaded', inicializarBotonRedondo);
// O usar event listener más específico:
window.addEventListener('load', inicializarBotonRedondo);
*/

// 2. SEPARACIÓN DE FUNCIONES:
/*
const manejarClicBoton = async (event) => {
    const confirmado = await mostrarConfirmacionPersonalizada(
        '¿Estás seguro que quieres irte?'
    );
    
    if (confirmado) {
        mostrarNotificacion('Nos vamos entonces!');
        navegarA('https://www.linkedin.com/learning/');
    } else {
        mostrarNotificacion('Nos quedamos aquí entonces!');
    }
};

const navegarA = (url) => {
    // Validar URL antes de navegar:
    try {
        new URL(url); // Valida formato de URL
        window.location.href = url;
    } catch (error) {
        console.error('URL inválida:', url);
        mostrarNotificacion('Error: URL inválida');
    }
};
*/

// 3. MANEJO DE DIMENSIONES RESPONSIVO:
/*
const actualizarDimensiones = () => {
    const dimensiones = {
        ancho: window.innerWidth,
        alto: window.innerHeight,
        orientacion: window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical'
    };
    
    console.table(dimensiones);
    
    // Disparar eventos personalizados:
    window.dispatchEvent(new CustomEvent('dimensionesCambiadas', {
        detail: dimensiones
    }));
};

// Escuchar cambios de tamaño:
window.addEventListener('resize', debounce(actualizarDimensiones, 250));

// Función debounce para optimizar performance:
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
};
*/

// 4. ACCESIBILIDAD:
/*
const configurarAccesibilidad = (boton) => {
    // Agregar atributos ARIA:
    boton.setAttribute('aria-label', 'Botón para ir a LinkedIn Learning');
    boton.setAttribute('role', 'button');
    
    // Soporte para teclado:
    boton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            manejarClicBoton(event);
        }
    });
    
    // Focus visible:
    boton.addEventListener('focus', () => {
        boton.classList.add('focus-visible');
    });
    
    boton.addEventListener('blur', () => {
        boton.classList.remove('focus-visible');
    });
};
*/

// 5. GESTIÓN DE ERRORES:
/*
const manejarErrores = () => {
    window.addEventListener('error', (event) => {
        console.error('Error global:', event.error);
        mostrarNotificacion('Ha ocurrido un error inesperado');
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        console.error('Promesa rechazada:', event.reason);
        event.preventDefault(); // Evita que aparezca en consola
    });
};
*/

// CONSIDERACIONES DE RENDIMIENTO:

// ✅ Event delegation para múltiples botones:
/*
document.addEventListener('click', (event) => {
    if (event.target.matches('.boton-redondo')) {
        manejarClicBoton(event);
    }
});
*/

// ✅ Lazy loading de funcionalidades:
/*
const cargarFuncionalidadBotones = async () => {
    const { BotonManager } = await import('./boton-manager.js');
    new BotonManager().inicializar();
};
*/

// ✅ Throttling para eventos de resize:
/*
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};
*/

// PATRONES DE DISEÑO APLICABLES:

// Observer Pattern para cambios de ventana:
/*
class WindowObserver {
    constructor() {
        this.observers = [];
        this.setupListeners();
    }
    
    subscribe(callback) {
        this.observers.push(callback);
    }
    
    notify(data) {
        this.observers.forEach(callback => callback(data));
    }
    
    setupListeners() {
        window.addEventListener('resize', () => {
            this.notify({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
    }
}
*/

// Command Pattern para acciones:
/*
class NavegacionCommand {
    constructor(url) {
        this.url = url;
    }
    
    execute() {
        window.location.href = this.url;
    }
    
    undo() {
        window.history.back();
    }
}

class NotificacionCommand {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
    
    execute() {
        mostrarNotificacion(this.mensaje);
    }
}
*/

// TESTING DEL CÓDIGO:

// Unit tests con Jest:
/*
describe('Gestión de ventana', () => {
    test('debería obtener dimensiones correctas', () => {
        // Mock window properties
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1024
        });
        
        expect(window.innerWidth).toBe(1024);
    });
    
    test('debería manejar clic en botón', () => {
        const mockConfirm = jest.spyOn(window, 'confirm');
        mockConfirm.mockReturnValue(true);
        
        const mockLocation = jest.spyOn(window.location, 'href', 'set');
        
        // Simular evento
        const event = new Event('click');
        manejarClicBoton(event);
        
        expect(mockConfirm).toHaveBeenCalled();
        expect(mockLocation).toHaveBeenCalledWith('https://www.linkedin.com/learning/');
    });
});
*/

// Integration tests con Cypress:
/*
describe('Navegación con botón', () => {
    it('debería navegar al confirmar', () => {
        cy.visit('/');
        cy.get('.boton-redondo').click();
        cy.window().its('confirm').should('be.called');
        cy.url().should('include', 'linkedin.com');
    });
});
*/

