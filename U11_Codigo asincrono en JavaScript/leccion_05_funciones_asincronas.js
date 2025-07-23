/**
 * ASYNC/AWAIT - LA EVOLUCIÓN FINAL DEL CÓDIGO ASÍNCRONO
 * 
 * Async/await es "syntactic sugar" (azúcar sintáctico) sobre las Promises.
 * No reemplaza las Promises, sino que las hace más fáciles de escribir y leer.
 * Fue introducido en ES2017 (ES8) para solucionar la complejidad de las cadenas .then()
 */

function obtenerUsuario(){
    // Esta función retorna una Promise - es el "productor" de datos asincrónicos
    // Simula una operación que toma tiempo: consulta a base de datos, llamada API, etc.
    return new Promise((resolver) => {
        // NOTA: 'resolver' es solo el nombre del parámetro - podríamos llamarlo 'resolve'
        // Es una convención usar 'resolve' pero funcionalmente son idénticos
        
        // setTimeout simula el tiempo de respuesta de una operación real
        setTimeout(() => {
            // resolver() cambia el estado de la Promise de PENDING a FULFILLED
            // El objeto pasado será el "resultado" que reciba quien consuma esta Promise
            // Simula datos que vendrían de una base de datos o API
            resolver({ 
                nombre: "Carlos Monge", 
                edad: 35,
                // En un caso real, podrían venir más campos:
                // email: "carlos@email.com",
                // id: 12345,
                // perfil: "desarrollador"
            });
        }, 1000); // 1000ms = 1 segundo de "latencia simulada"
    });
}

/**
 * FUNCIÓN ASYNC - EL CONSUMIDOR MODERNO DE PROMISES
 * 
 * La palabra clave 'async' antes de 'function' hace que:
 * 1. La función siempre retorne una Promise (aunque no lo escribas explícitamente)
 * 2. Permita usar 'await' dentro de ella
 * 3. Los errores se conviertan automáticamente en Promise rejections
 */
async function obtenerInformacionUsuario() {
    /**
     * TRY/CATCH - MANEJO DE ERRORES ESTILO SÍNCRONO
     * 
     * Con async/await podemos usar try/catch tradicional en lugar de .catch()
     * Esto hace el manejo de errores más familiar para desarrolladores
     * que vienen de lenguajes síncronos como Java, C#, Python, etc.
     */
    try {
        /**
         * AWAIT - LA MAGIA DE LA ESPERA NO BLOQUEANTE
         * 
         * 'await' hace tres cosas importantes:
         * 1. Pausa la ejecución de ESTA función hasta que la Promise se resuelva
         * 2. NO bloquea el hilo principal de JavaScript (otras funciones pueden ejecutarse)
         * 3. "Desenvuelve" el valor de la Promise y lo asigna a la variable
         * 
         * Sin await tendríamos:
         * obtenerUsuario().then(usuario => { console.log(usuario); });
         * 
         * Con await es más limpio:
         * const usuario = await obtenerUsuario();
         */
        const usuario = await obtenerUsuario();
        
        // Esta línea NO se ejecuta hasta que obtenerUsuario() se resuelva
        // 'usuario' contiene directamente el objeto { nombre: "Carlos Monge", edad: 35 }
        // NO es una Promise - await ya la "desenvolvió"
        console.log("Usuario obtenido:", usuario);
        
        // VENTAJA: Podemos seguir escribiendo código de forma secuencial
        // Si necesitáramos hacer otra operación async, simplemente:
        // const permisos = await obtenerPermisos(usuario.id);
        // const configuracion = await obtenerConfiguracion(usuario.id);
        // Todo se lee de forma natural, de arriba hacia abajo
        
    } catch (error) {
        /**
         * CATCH CAPTURA TODO TIPO DE ERRORES:
         * 
         * 1. Si obtenerUsuario() llama a reject()
         * 2. Si hay un error de red en una llamada real a API
         * 3. Si hay un error de sintaxis en el código
         * 4. Si cualquier await en el try falla
         * 
         * Esto es MUCHO más limpio que manejar errores con múltiples .catch()
         */
        console.error("Hubo un error al obtener el usuario:", error);
        
        // En una aplicación real, aquí podrías:
        // - Mostrar un mensaje de error al usuario
        // - Intentar recargar los datos
        // - Enviar el error a un servicio de logging
        // - Usar datos por defecto o cache
    }
}

/**
 * EJECUCIÓN DE LA FUNCIÓN ASYNC
 * 
 * Llamar a una función async retorna inmediatamente una Promise
 * Esta Promise se resuelve cuando la función termina (o se rechaza si hay error)
 */
obtenerInformacionUsuario();

/**
 * FLUJO DE EJECUCIÓN DETALLADO:
 * 
 * 1. Se llama obtenerInformacionUsuario()
 * 2. Se retorna inmediatamente una Promise (por ser función async)
 * 3. Se ejecuta el código hasta llegar a 'await obtenerUsuario()'
 * 4. JavaScript "pausa" esta función y puede ejecutar otro código
 * 5. obtenerUsuario() crea una Promise y programa setTimeout
 * 6. JavaScript continúa con otras tareas por 1 segundo
 * 7. Después de 1 segundo, setTimeout ejecuta resolver()
 * 8. La Promise se resuelve con el objeto usuario
 * 9. await "despierta" y asigna el objeto a la variable 'usuario'
 * 10. Se ejecuta console.log() con los datos del usuario
 * 11. La función obtenerInformacionUsuario() termina exitosamente
 * 
 * IMPORTANTE: Si hubiera más código después de obtenerInformacionUsuario(),
 * se ejecutaría INMEDIATAMENTE, no esperaría 1 segundo
 */

// Esta línea se ejecutaría inmediatamente, antes que el console.log interno:
// console.log("Esta línea aparece primero");

/**
 * COMPARACIÓN DE LOS TRES ENFOQUES:
 * 
 * CALLBACKS:
 * obtenerUsuario((usuario) => {
 *     console.log(usuario);
 * });
 * 
 * PROMISES:
 * obtenerUsuario()
 *     .then(usuario => console.log(usuario))
 *     .catch(error => console.error(error));
 * 
 * ASYNC/AWAIT:
 * try {
 *     const usuario = await obtenerUsuario();
 *     console.log(usuario);
 * } catch (error) {
 *     console.error(error);
 * }
 * 
 * El último es el más legible y fácil de mantener
 */