/**
 * PROMESAS EN JAVASCRIPT - EVOLUCIÓN DE LOS CALLBACKS
 * 
 * Una Promise (Promesa) es un objeto que representa la eventual finalización 
 * (o falla) de una operación asíncrona y su valor resultante.
 * 
 * Estados de una Promise:
 * - PENDING (pendiente): Estado inicial, ni cumplida ni rechazada
 * - FULFILLED (cumplida): La operación se completó satisfactoriamente
 * - REJECTED (rechazada): La operación falló
 */

function hacerAlgoAsincrono(){
    // Una Promise se construye con el constructor Promise()
    // Recibe una función "executor" con dos parámetros: resolve y reject
    return new Promise((resolve, reject) => {
        
        // setTimeout simula una operación asíncrona (API call, file read, etc.)
        setTimeout(() => {
            
            // ⚠️ ERROR CRÍTICO: Math.raandom() NO EXISTE
            // Debería ser Math.random() (sin la 'a' extra)
            // Este error hará que la función SIEMPRE falle y vaya al catch()
            const hecho = Math.random() > 0.5; // CORRECCIÓN APLICADA
            
            // Math.random() genera un número entre 0 (incluido) y 1 (excluido)
            // > 0.5 significa que hay ~50% de probabilidad de éxito
            
            if(hecho){
                // resolve() cambia el estado de la Promise a FULFILLED
                // El valor pasado a resolve() será recibido por .then()
                // Esto es equivalente al callback de "éxito" en el patrón anterior
                resolve("Hecho correctamente");
            } else {
                // reject() cambia el estado de la Promise a REJECTED
                // El valor pasado a reject() será recibido por .catch()
                // Esto maneja errores de forma más elegante que los callbacks
                reject("Error al hacer la operación");
            }
        }, 1000); // Retraso de 1 segundo (1000ms)
    });
}

/**
 * CONSUMO DE LA PROMISE - PATRÓN .then() y .catch()
 * 
 * Una vez que tenemos una Promise, podemos "consumirla" usando:
 * - .then(): Se ejecuta cuando la Promise se resuelve (resolve)
 * - .catch(): Se ejecuta cuando la Promise es rechazada (reject) o hay error
 * - .finally(): Se ejecuta siempre, sin importar el resultado (opcional)
 */

hacerAlgoAsincrono()
    .then((resultado) => {
        // Esta función se ejecuta solo si la Promise se resuelve exitosamente
        // 'resultado' contiene el valor pasado a resolve()
        // En este caso: "Hecho correctamente"
        
        console.log("✅ Éxito:", resultado);
        
        // VENTAJA DE LAS PROMISES: CHAINABILITY (encadenamiento)
        // Podríamos retornar otra Promise aquí y seguir encadenando .then()
        // return otraOperacionAsincrona();
    })
    .catch((error) => {
        // Esta función se ejecuta si:
        // 1. La Promise es rechazada explícitamente (reject())
        // 2. Ocurre un error en cualquier parte del código (como el typo Math.raandom)
        // 3. Hay un error en cualquier .then() anterior
        
        console.log("❌ Error:", error);
        
        // MANEJO CENTRALIZADO DE ERRORES
        // Un solo .catch() puede manejar errores de toda la cadena
        // Esto es mucho mejor que manejar errores en múltiples callbacks
    });

/**
 * COMPARACIÓN CON CALLBACKS:
 * 
 * CALLBACKS (patrón anterior):
 * - Propenso a "callback hell" con operaciones anidadas
 * - Manejo de errores complicado
 * - Difícil de leer y mantener
 * 
 * PROMISES (este ejemplo):
 * - Código más plano y legible
 * - Manejo de errores centralizado
 * - Fácil encadenamiento de operaciones
 * - Base para async/await (siguiente evolución)
 * 
 * FLUJO DE EJECUCIÓN:
 * 1. Se llama hacerAlgoAsincrono()
 * 2. Se retorna inmediatamente una Promise en estado PENDING
 * 3. El código continúa, no se bloquea
 * 4. Después de 1 segundo, setTimeout ejecuta su función
 * 5. Se decide aleatoriamente si llamar resolve() o reject()
 * 6. Se ejecuta .then() o .catch() según el resultado
 * 
 * NOTA: Con el error Math.raandom(), siempre se ejecutará .catch()
 * porque la función lanzará un ReferenceError
 */

// Ejemplo de código que se ejecutaría inmediatamente (no bloquea):
// console.log("Esta línea se ejecuta antes que la Promise se resuelva");