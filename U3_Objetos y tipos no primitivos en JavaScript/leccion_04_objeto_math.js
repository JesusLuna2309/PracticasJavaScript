// Ejemplos de uso del objeto Math en JavaScript

// El objeto Math proporciona propiedades y métodos para realizar operaciones matemáticas

// Constantes matemáticas
console.log("Valor de PI:", Math.PI); // PI, útil para cálculos de círculos y trigonometría
console.log("Valor de E:", Math.E); // E, base de logaritmos naturales, útil en matemáticas avanzadas

// Métodos comunes del objeto Math

// Math.abs: Devuelve el valor absoluto de un número (quita el signo)
console.log("Valor absoluto de -5:", Math.abs(-5)); // Útil para distancias, diferencias, etc.

// Math.ceil: Redondea hacia arriba al entero más cercano
console.log("Redondeo hacia arriba de 4.2:", Math.ceil(4.2)); // Útil para precios, paginación, etc.

// Math.floor: Redondea hacia abajo al entero más cercano
console.log("Redondeo hacia abajo de 4.8:", Math.floor(4.8)); // Útil para índices, divisiones, etc.

// Math.round: Redondea al entero más cercano
console.log("Redondeo de 4.5:", Math.round(4.5)); // Útil para puntuaciones, cálculos generales

// Math.max: Devuelve el mayor de los números proporcionados
console.log("Mayor de 1, 2, 3:", Math.max(1, 2, 3)); // Útil para comparar valores, encontrar máximos

// Math.min: Devuelve el menor de los números proporcionados
console.log("Menor de 1, 2, 3:", Math.min(1, 2, 3)); // Útil para comparar valores, encontrar mínimos

// Math.random: Devuelve un número pseudoaleatorio entre 0 y 1
console.log("Número aleatorio entre 0 y 1:", Math.random()); // Útil para juegos, sorteos, simulaciones

// Math.pow: Eleva un número a la potencia de otro (base, exponente)
console.log("2 elevado a la 3:", Math.pow(2, 3)); // Útil para cálculos exponenciales

// Math.sqrt: Devuelve la raíz cuadrada de un número
console.log("Raíz cuadrada de 16:", Math.sqrt(16)); // Útil para geometría, estadísticas

// Math.log: Logaritmo natural (base e)
console.log("Logaritmo natural de 10:", Math.log(10)); // Útil en matemáticas, crecimiento exponencial

// Funciones trigonométricas
console.log("Seno de PI/2:", Math.sin(Math.PI / 2)); // Útil en gráficos, física, animaciones
console.log("Coseno de 0:", Math.cos(0)); // Útil en gráficos, física, animaciones
console.log("Tangente de PI/4:", Math.tan(Math.PI / 4)); // Útil en gráficos, física, animaciones

// Logaritmos en otras bases
console.log("Logaritmo en base 10 de 100:", Math.log10(100)); // Útil en cálculos científicos
console.log("Logaritmo en base 2 de 8:", Math.log2(8)); // Útil en informática, bits, algoritmos

// Math.sign: Devuelve el signo de un número (-1, 0, 1)
console.log("Signo de -10:", Math.sign(-10)); // Útil para saber si un número es positivo, negativo o cero
console.log("Signo de 0:", Math.sign(0));
console.log("Signo de 10:", Math.sign(10));

// Math.trunc: Elimina la parte decimal de un número
console.log("Parte entera de 4.9:", Math.trunc(4.9)); // Útil para obtener solo la parte entera

// Math.hypot: Calcula la hipotenusa dados los catetos (teorema de Pitágoras)
console.log("Hipotenusa de un triángulo con catetos 3 y 4:", Math.hypot(3, 4)); // Útil en geometría

// Math.imul: Multiplicación de enteros de 32 bits (más rápido para grandes cantidades)
console.log("Multiplicación de 2 y 3 usando imul:", Math.imul(2, 3)); // Útil en cálculos de bajo nivel

// Math.clz32: Cuenta ceros a la izquierda en binario (32 bits)
console.log("Número de ceros a la izquierda en 8 (en 32 bits):", Math.clz32(8)); // Útil en algoritmos binarios

// Math.fround: Convierte a punto flotante de 32 bits
console.log("Número 1.5 en formato de punto flotante de 32 bits:", Math.fround(1.5)); // Útil en gráficos, precisión

// Math.cbrt: Raíz cúbica de un número
console.log("Raíz cúbica de 27:", Math.cbrt(27)); // Útil en matemáticas, física

// Math.log1p: Logaritmo natural de (1 + x)
console.log("Logaritmo natural de (1 + 0.5):", Math.log1p(0.5)); // Útil en cálculos precisos con números pequeños

// Math.expm1: e^x - 1 (exponencial menos 1)
console.log("e elevado a la potencia de 0.5 menos 1:", Math.expm1(0.5)); // Útil en cálculos precisos

// Funciones trigonométricas inversas
console.log("Arcoseno de 1:", Math.asin(1)); // Útil para obtener ángulos a partir de razones trigonométricas
console.log("Arcocoseno de 1:", Math.acos(1));
console.log("Arcotangente de 1:", Math.atan(1));

// Math.atan2: Ángulo entre eje X y punto (y, x)
console.log("Ángulo en radianes entre el eje X y el punto (1, 1):", Math.atan2(1, 1)); // Útil en gráficos, navegación

// Funciones hiperbólicas
console.log("Seno hiperbólico de 1:", Math.sinh(1)); // Útil en matemáticas avanzadas
console.log("Coseno hiperbólico de 1:", Math.cosh(1));
console.log("Tangente hiperbólica de 1:", Math.tanh(1));