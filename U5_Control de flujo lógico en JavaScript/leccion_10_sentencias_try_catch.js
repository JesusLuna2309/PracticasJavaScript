//Sentencias Try-Catch en JavaScript
// Estas sentencias se utilizan para manejar errores y excepciones en el código.
// Permiten que el programa continúe ejecutándose incluso si ocurre un error.

// EJEMPLO BÁSICO DE TRY-CATCH
// Paso 1: Intentar ejecutar un bloque de código que podría fallar
try {
    // Aquí se coloca el código que podría generar un error
    let resultado = 10 / 0; // En JavaScript, división por cero NO genera error, retorna Infinity
    console.log("Resultado:", resultado); // Esta línea SÍ se ejecutará mostrando "Infinity"
    // Para demostrar un error real, usemos una operación que sí falle:
    // let errorReal = JSON.parse('{"malformado": }'); // Esto SÍ generaría un SyntaxError
}
// Paso 2: Capturar el error si ocurre
catch (error) {
    // Este bloque se ejecuta si ocurre un error en el bloque try
    console.error("Ocurrió un error:", error.message); // Muestra el mensaje del error en la consola
    // El parámetro 'error' contiene información detallada del error:
    // error.name - tipo de error (SyntaxError, ReferenceError, etc.)
    // error.message - descripción del error
    // error.stack - traza del stack de llamadas
}
// Flujo de ejecución:
// 1. Se intenta ejecutar el bloque try.
// 2. Si hay un error, JavaScript detiene la ejecución del try y salta al catch.
// 3. El bloque catch captura el error y ejecuta su código, permitiendo
//    que el programa no se detenga abruptamente y mantenga el control.

// EJEMPLO CON UN CÓDIGO VÁLIDO
try {
    // Aquí se coloca un código que no generará errores
    let mensaje = "Hola, mundo!";
    console.log("Mensaje:", mensaje); // Esta línea se ejecuta correctamente
}
catch (error) {
    // Este bloque no se ejecutará porque no hay errores en el bloque try
    console.error("Ocurrió un error:", error.message); // No se mostrará nada
}
// Flujo de ejecución:
// 1. Se ejecuta el bloque try completamente sin errores. 
// 2. El bloque catch se omite completamente porque no hubo excepciones.

// EJEMPLO CON THROW PARA GENERAR UN ERROR
try {
    // Aquí se lanza un error manualmente usando 'throw'
    throw new Error("Este es un error personalizado"); // Genera un objeto Error con mensaje específico
    // También se pueden lanzar otros tipos de errores:
    // throw new TypeError("Error de tipo");
    // throw new RangeError("Valor fuera de rango");
    // throw "Un string como error"; // No recomendado, mejor usar objetos Error
}
catch (error) {
    // Este bloque captura el error generado por throw
    console.error("Error capturado:", error.message); // Muestra el mensaje del error personalizado
    console.error("Tipo de error:", error.name); // Muestra "Error"
}
// Flujo de ejecución:
// 1. Se ejecuta el bloque try hasta encontrar 'throw'.
// 2. 'throw' interrumpe inmediatamente la ejecución y pasa el control al catch.
// 3. El bloque catch recibe el objeto Error y puede procesarlo.

//EJEMPLO VALIDACIÓN CON THROW
try {
    // Aquí se coloca un código que podría generar un error
    let numero = "texto"; // Asignación de un valor no numérico
    // isNaN() verifica si el valor NO es un número válido
    if (isNaN(numero)) {
        // Lanza un error personalizado con información específica del problema
        throw new Error("El valor no es un número válido"); // Error descriptivo para debugging
    }
    console.log("Número:", numero); // Esta línea no se ejecutará porque hay un error
}
catch (error) {
    // Este bloque captura el error si ocurre
    console.error("Ocurrió un error:", error.message); // Muestra el mensaje del error
    // Aquí se puede implementar lógica de recuperación:
    // - Solicitar un nuevo valor al usuario
    // - Usar un valor por defecto
    // - Registrar el error para análisis posterior
}
// Flujo de ejecución:
// 1. Se intenta ejecutar el bloque try.
// 2. La validación detecta que "texto" no es un número válido.
// 3. Se lanza un error con throw, interrumpiendo el flujo normal.
// 4. El bloque catch captura el error y permite manejar la situación.

//EJEMPLO CON FINALLY
// El bloque finally se ejecuta siempre, independientemente de si hubo un error o no.
try {
    // Aquí se coloca un código que podría generar un error
    let numero = 5;
    console.log("Número:", numero); // Esta línea se ejecuta correctamente
    // Simulemos diferentes escenarios:
    // throw new Error("Error simulado"); // Descomenta para ver cómo finally siempre se ejecuta
}
catch (error) {
    // Este bloque captura cualquier error que ocurra en el bloque try
    console.error("Ocurrió un error:", error.message); // Muestra el mensaje del error
}
finally {
    // Este bloque se ejecuta siempre, sin importar si hubo un error o no
    console.log("Bloque finally ejecutado"); // Muestra un mensaje indicando que finally se ejecutó
    // Casos de uso típicos para finally:
    // - Cerrar archivos o conexiones de base de datos
    // - Liberar recursos del sistema
    // - Limpiar variables temporales
    // - Registrar logs de finalización de operación
    // - Ocultar indicadores de carga en interfaces de usuario
}
// Flujo de ejecución:
// 1. Se ejecuta el bloque try.
// 2. Si hay un error, se ejecuta el bloque catch.
// 3. El bloque finally SIEMPRE se ejecuta al final, incluso si:
//    - No hubo errores
//    - Hubo un error capturado
//    - Hubo un error no capturado
//    - Se ejecutó un 'return' dentro del try o catch

// EJEMPLO AVANZADO: TRY-CATCH ANIDADOS
try {
    console.log("Iniciando operación compleja...");
    try {
        // Operación interna que puede fallar
        let datos = JSON.parse('{"valido": true}');
        console.log("Datos parseados:", datos);
        
        // Otra operación que puede fallar
        if (datos.valido) {
            throw new Error("Error simulado en validación");
        }
    }
    catch (innerError) {
        console.error("Error interno:", innerError.message);
        // Podemos re-lanzar el error para que lo maneje el catch externo
        throw new Error("Falló la validación interna: " + innerError.message);
    }
}
catch (outerError) {
    console.error("Error externo:", outerError.message);
}
finally {
    console.log("Limpieza final completada");
}

// TIPOS COMUNES DE ERRORES EN JAVASCRIPT:
// - SyntaxError: Error de sintaxis en el código
// - ReferenceError: Variable no definida
// - TypeError: Operación en tipo incorrecto
// - RangeError: Número fuera del rango permitido
// - EvalError: Error en función eval()
// - URIError: Error en funciones URI (encodeURI, decodeURI)