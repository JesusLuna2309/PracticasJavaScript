/**
 * Una función callback es una función que se pasa como argumento 
 * a otra función y se ejecuta después de completar esa función.
 * 
 * Los callbacks son fundamentales en JavaScript para:
 * - Manejar operaciones asíncronas (como peticiones HTTP)
 * - Implementar el patrón Observer
 * - Crear código reutilizable y modular
 */

/**
 * Función que simula una operación asíncrona
 * @param {Function} callback - Función que se ejecutará cuando la operación termine
 */
function hacerAlgoAsincrono(callback) {
  // setTimeout() es una función del navegador/Node.js que ejecuta código después de un retraso
  // Simula operaciones que toman tiempo: llamadas a APIs, lectura de archivos, etc.
  setTimeout(function() {
    // Esta función anónima se ejecuta después de 1000ms (1 segundo)
    
    // Math.random() genera un número decimal entre 0 (inclusivo) y 1 (exclusivo)
    // Simula el resultado de una operación real (datos de una API, contenido de archivo, etc.)
    const resultado = Math.random();
    
    // Aquí es donde ocurre la "magia" del callback:
    // Ejecutamos la función que nos pasaron como parámetro
    // Le pasamos el resultado como argumento
    // Esto permite que quien llame a esta función decida qué hacer con el resultado
    callback(resultado);
  }, 1000); // 1000 milisegundos = 1 segundo de retraso
}

/**
 * Función callback que procesa el resultado
 * Esta es una función flecha (arrow function) equivalente a:
 * function procesarResultado(datos) { ... }
 * 
 * @param {number} datos - El número aleatorio recibido de la operación asíncrona
 */
const procesarResultado = (datos) => {
  // Template literal (backticks) para interpolar variables en el string
  // ${datos} inserta el valor de la variable 'datos' en la cadena
  console.log(`El resultado obtenido: ${datos}`);
}

/**
 * Ejecución del código:
 * 1. Llamamos a hacerAlgoAsincrono() pasándole procesarResultado como callback
 * 2. hacerAlgoAsincrono() inicia el setTimeout y RETORNA INMEDIATAMENTE
 * 3. El programa continúa (no se bloquea esperando)
 * 4. Después de 1 segundo, setTimeout ejecuta su función interna
 * 5. Se genera el número aleatorio y se llama al callback
 * 6. procesarResultado() recibe el número y lo muestra en consola
 * 
 * IMPORTANTE: Este es código NO BLOQUEANTE
 * Si hubiera más código después de esta línea, se ejecutaría inmediatamente
 * sin esperar a que termine la operación asíncrona
 */
hacerAlgoAsincrono(procesarResultado);

// Si añadiéramos esta línea, se ejecutaría ANTES que el console.log del callback:
// console.log("Esta línea se ejecuta primero, antes del callback");
