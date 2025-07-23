// ===== FUNCIONES DE TEMPORIZACIÓN ASÍNCRONAS EN JAVASCRIPT =====
// Demostración de setInterval, setTimeout y sus métodos de cancelación

function mostrarTiempo() {
  let ahora = new Date();
  // ANÁLISIS del objeto Date:
  // - new Date(): Crea objeto con fecha/hora ACTUAL del sistema
  // - Sin parámetros: Usa el momento exacto de ejecución
  // - Timezone: Hora local del usuario/sistema
  // - Precisión: Milisegundos desde epoch (1 enero 1970 UTC)

  let horas = ahora.getHours();
  // ANÁLISIS de getHours():
  // - Retorna: Entero entre 0-23 (formato 24 horas)
  // - 0 = medianoche, 12 = mediodía, 23 = 11 PM
  // - Basado en timezone local del sistema
  // - No incluye padding de ceros (9, no "09")

  let minutos = ahora.getMinutes();
  // ANÁLISIS de getMinutes():
  // - Retorna: Entero entre 0-59
  // - Representa minutos de la hora actual
  // - Sin padding automático de ceros

  let segundos = ahora.getSeconds();
  // ANÁLISIS de getSeconds():
  // - Retorna: Entero entre 0-59
  // - Segundos de la hora actual
  // - No incluye milisegundos (para eso existe getMilliseconds())

  console.log(`${horas}:${minutos}:${segundos}`);
  // FORMATO de salida:
  // - Template literal con interpolación de variables
  // - Ejemplo: "14:5:23" (sin padding de ceros)
  // - Separador: ":" (estándar para tiempo)
}

// MEJORAS SUGERIDAS para la función mostrarTiempo:
/*
function mostrarTiempoMejorado() {
  const ahora = new Date();
  
  // Padding de ceros para formato consistente:
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  const milisegundos = ahora.getMilliseconds().toString().padStart(3, '0');
  
  // Formato mejorado: "14:05:23.456"
  console.log(`${horas}:${minutos}:${segundos}.${milisegundos}`);
  
  // O usando toLocaleTimeString():
  console.log(ahora.toLocaleTimeString('es-ES'));
  
  // Con timezone específico:
  console.log(ahora.toLocaleTimeString('es-ES', {
    timeZone: 'America/New_York',
    hour12: false
  }));
}

// Función con múltiples formatos:
function mostrarTiempoCompleto() {
  const ahora = new Date();
  
  console.log('ISO String:', ahora.toISOString());
  console.log('Locale String:', ahora.toLocaleString('es-ES'));
  console.log('Solo tiempo:', ahora.toLocaleTimeString('es-ES'));
  console.log('Timestamp:', ahora.getTime());
  console.log('UTC String:', ahora.toUTCString());
}
*/

// setInterval: ejecuta una función cada vez que el tiempo definido 
// en el segundo parámetro haya pasado.
const idSetInterval = setInterval(mostrarTiempo, 1000); 
// Se actualiza cada segundo

// ANÁLISIS DETALLADO de setInterval:
// - setInterval(callback, delay, ...args): Función global asíncrona
// - Parámetro 1 (callback): Función a ejecutar repetidamente
// - Parámetro 2 (delay): Intervalo en MILISEGUNDOS (1000ms = 1s)
// - Parámetro 3+ (args): Argumentos opcionales para la función callback
// - Retorna: ID numérico único para identificar el interval

// CARACTERÍSTICAS IMPORTANTES de setInterval:
/*
// 1. Ejecución asíncrona no bloqueante:
console.log('Antes del setInterval');
const id = setInterval(() => console.log('Tick'), 1000);
console.log('Después del setInterval'); // Se ejecuta inmediatamente

// 2. Delay mínimo del browser:
setInterval(callback, 1); // Realmente será ~4ms en la mayoría de browsers

// 3. Drift temporal - puede acumularse imprecisión:
let contador = 0;
const inicio = Date.now();
setInterval(() => {
  contador++;
  const transcurrido = Date.now() - inicio;
  const esperado = contador * 1000;
  console.log(`Drift: ${transcurrido - esperado}ms`);
}, 1000);

// 4. Continúa ejecutándose aunque la pestaña esté inactiva:
// (aunque con throttling en browsers modernos)

// 5. Problemas potenciales:
// - Memory leaks si no se limpia
// - Ejecución superpuesta si callback toma mucho tiempo
// - Imprecisión temporal acumulativa
*/

// ALTERNATIVAS a setInterval:
/*
// 1. setTimeout recursivo (más preciso):
function intervalConTimeout() {
  mostrarTiempo();
  setTimeout(intervalConTimeout, 1000);
}
intervalConTimeout();

// 2. Con control de drift:
function intervalSinDrift(callback, delay) {
  let inicio = Date.now();
  let contador = 0;
  
  function ejecutar() {
    contador++;
    const ahora = Date.now();
    const siguiente = inicio + (contador * delay);
    
    callback();
    
    setTimeout(ejecutar, Math.max(0, siguiente - ahora));
  }
  
  ejecutar();
}

// 3. Con RequestAnimationFrame (para animaciones):
function intervalConRAF(callback) {
  let ultimaEjecucion = 0;
  
  function frame(timestamp) {
    if (timestamp - ultimaEjecucion >= 1000) {
      callback();
      ultimaEjecucion = timestamp;
    }
    requestAnimationFrame(frame);
  }
  
  requestAnimationFrame(frame);
}
*/

// setTimeout: ejecuta una función luego que el tiempo definido
// en el segundo parámetro haya pasado.
const idSetTimeout = setTimeout(() => {
  // clearInterval: elimina el interval con el id que se pase como parámetro.
 clearInterval(idSetInterval);
}, 5000);

// ANÁLISIS de setTimeout:
// - setTimeout(callback, delay, ...args): Ejecuta función UNA VEZ después del delay
// - Parámetro 1 (callback): Función a ejecutar (arrow function en este caso)
// - Parámetro 2 (delay): Tiempo de espera en milisegundos (5000ms = 5s)
// - Retorna: ID numérico único para identificar el timeout

// ANÁLISIS de clearInterval:
// - clearInterval(id): Cancela un interval activo
// - Parámetro: ID retornado por setInterval
// - Efecto: Detiene la ejecución repetitiva permanentemente
// - Seguro: No hace nada si el ID no existe o ya fue cancelado

// CARACTERÍSTICAS de setTimeout:
/*
// 1. Ejecución única vs setInterval (repetitiva):
setTimeout(() => console.log('Una vez'), 1000);
setInterval(() => console.log('Repetitivo'), 1000);

// 2. Delay mínimo similar a setInterval:
setTimeout(callback, 0); // Realmente ~4ms

// 3. Con parámetros adicionales:
setTimeout((mensaje, numero) => {
  console.log(mensaje, numero);
}, 1000, 'Hola', 42);

// 4. Contexto (this) en callback:
const objeto = {
  nombre: 'Test',
  saludar() {
    console.log(`Hola ${this.nombre}`);
  },
  
  programarSaludo() {
    // ❌ Pierde contexto:
    setTimeout(this.saludar, 1000);
    
    // ✅ Mantiene contexto:
    setTimeout(() => this.saludar(), 1000);
    setTimeout(this.saludar.bind(this), 1000);
  }
};
*/

setTimeout(() => {
  // clearTimeout: elimina el timeout con el id que se pase como parámetro.
  clearTimeout(idSetTimeout);
}, 2000);

// ANÁLISIS CRÍTICO de la lógica:
// - Este segundo setTimeout se ejecuta a los 2 segundos
// - Cancela el primer setTimeout (que estaba programado para 5 segundos)
// - PROBLEMA: El primer timeout NUNCA se ejecutará
// - RESULTADO: clearInterval(idSetInterval) nunca se llama
// - CONSECUENCIA: El interval continuará ejecutándose indefinidamente

// FLUJO TEMPORAL del código:
/*
t=0s:    setInterval inicia (mostrarTiempo cada 1s)
         setTimeout #1 programado para t=5s (cancelar interval)
         setTimeout #2 programado para t=2s (cancelar timeout #1)

t=1s:    mostrarTiempo() se ejecuta (primera vez)
t=2s:    setTimeout #2 se ejecuta → clearTimeout(idSetTimeout)
         setTimeout #1 es cancelado (no se ejecutará)
         mostrarTiempo() se ejecuta (segunda vez)
t=3s:    mostrarTiempo() se ejecuta (tercera vez)
t=4s:    mostrarTiempo() se ejecuta (cuarta vez)
t=5s:    [Nada ocurre - timeout #1 fue cancelado]
         mostrarTiempo() se ejecuta (quinta vez)
t=6s+:   mostrarTiempo() continúa ejecutándose indefinidamente...
*/

// PROBLEMAS Y SOLUCIONES:

// ❌ PROBLEMA: Memory leak - interval nunca se cancela
// ✅ SOLUCIÓN 1: Lógica corregida
/*
const idSetInterval = setInterval(mostrarTiempo, 1000);

// Cancelar el interval después de 5 segundos:
setTimeout(() => {
  clearInterval(idSetInterval);
  console.log('Interval cancelado después de 5 segundos');
}, 5000);
*/

// ✅ SOLUCIÓN 2: Timeout cancelable con validación
/*
const idSetInterval = setInterval(mostrarTiempo, 1000);

const idSetTimeout = setTimeout(() => {
  clearInterval(idSetInterval);
  console.log('Interval cancelado automáticamente');
}, 5000);

// Cancelar timeout solo bajo ciertas condiciones:
if (algunaCondicion) {
  clearTimeout(idSetTimeout);
  console.log('Cancelación automática deshabilitada');
}
*/

// ✅ SOLUCIÓN 3: Clase para manejo centralizado
/*
class TemporizadorControlado {
  constructor() {
    this.intervalId = null;
    this.timeoutId = null;
  }
  
  iniciar(callback, intervalo, duracionTotal = null) {
    this.detener(); // Limpiar timers existentes
    
    this.intervalId = setInterval(callback, intervalo);
    
    if (duracionTotal) {
      this.timeoutId = setTimeout(() => {
        this.detener();
      }, duracionTotal);
    }
  }
  
  detener() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  
  extender(tiempoAdicional) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.detener();
      }, tiempoAdicional);
    }
  }
}

// Uso:
const reloj = new TemporizadorControlado();
reloj.iniciar(mostrarTiempo, 1000, 5000); // 5 segundos total
// reloj.extender(3000); // Extender 3 segundos más
// reloj.detener(); // Detener manualmente
*/

// MEJORES PRÁCTICAS para timers:

// 1. LIMPIEZA EN COMPONENTES/MÓDULOS:
/*
class ComponenteConTimer {
  constructor() {
    this.timers = new Set();
  }
  
  setInterval(callback, delay) {
    const id = setInterval(callback, delay);
    this.timers.add({ type: 'interval', id });
    return id;
  }
  
  setTimeout(callback, delay) {
    const id = setTimeout(() => {
      callback();
      this.timers.delete(timer);
    }, delay);
    const timer = { type: 'timeout', id };
    this.timers.add(timer);
    return id;
  }
  
  destroy() {
    this.timers.forEach(timer => {
      if (timer.type === 'interval') {
        clearInterval(timer.id);
      } else {
        clearTimeout(timer.id);
      }
    });
    this.timers.clear();
  }
}
*/

// 2. USANDO PROMISES PARA DELAYS:
/*
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Uso con async/await:
async function procesoConDelays() {
  console.log('Inicio');
  await delay(1000);
  console.log('Después de 1 segundo');
  await delay(2000);
  console.log('Después de 3 segundos total');
}

// Cancelable con AbortController:
const crearDelayCancelable = (ms) => {
  const controller = new AbortController();
  
  const promise = new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);
    
    controller.signal.addEventListener('abort', () => {
      clearTimeout(id);
      reject(new Error('Delay cancelado'));
    });
  });
  
  return { promise, cancel: () => controller.abort() };
};

const { promise, cancel } = crearDelayCancelable(5000);
// cancel(); // Para cancelar
*/

// 3. DETECCIÓN DE PERFORMANCE:
/*
function monitorearTimers() {
  const originalSetInterval = window.setInterval;
  const originalSetTimeout = window.setTimeout;
  const timersActivos = new Map();
  
  window.setInterval = function(callback, delay, ...args) {
    const id = originalSetInterval.call(this, callback, delay, ...args);
    timersActivos.set(id, { tipo: 'interval', delay, creado: Date.now() });
    return id;
  };
  
  window.setTimeout = function(callback, delay, ...args) {
    const id = originalSetTimeout.call(this, (...args) => {
      timersActivos.delete(id);
      callback(...args);
    }, delay, ...args);
    timersActivos.set(id, { tipo: 'timeout', delay, creado: Date.now() });
    return id;
  };
  
  // Debugging:
  window.getTimersActivos = () => timersActivos;
  
  setInterval(() => {
    console.log(`Timers activos: ${timersActivos.size}`);
  }, 10000);
}

// monitorearTimers(); // Activar en desarrollo
*/

// 4. ALTERNATIVAS MODERNAS:
/*
// Usando Web Workers para timers precisos:
if (typeof Worker !== 'undefined') {
  const worker = new Worker('timer-worker.js');
  worker.postMessage({ command: 'start', interval: 1000 });
  worker.onmessage = (e) => {
    if (e.data.tick) {
      mostrarTiempo();
    }
  };
}

// Usando Intersection Observer para pausar cuando no es visible:
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Reanudar timers
    } else {
      // Pausar timers
    }
  });
});

// Usando Page Visibility API:
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pausar o ajustar timers
  } else {
    // Reanudar timers
  }
});
*/

// DEBUGGING Y TESTING:
/*
// Test de precisión:
function testPrecisionTimer() {
  const inicio = performance.now();
  let iteraciones = 0;
  
  const id = setInterval(() => {
    iteraciones++;
    const transcurrido = performance.now() - inicio;
    const esperado = iteraciones * 1000;
    const error = Math.abs(transcurrido - esperado);
    
    console.log(`Iteración ${iteraciones}: Error ${error.toFixed(2)}ms`);
    
    if (iteraciones >= 10) {
      clearInterval(id);
    }
  }, 1000);
}

// Simular carga pesada:
function testConCargaPesada() {
  setInterval(() => {
    const inicio = Date.now();
    console.log('Timer ejecutado');
    
    // Simular trabajo pesado:
    while (Date.now() - inicio < 500) {
      // Bloquear 500ms
    }
    
    console.log('Trabajo completado');
  }, 1000);
}
  */