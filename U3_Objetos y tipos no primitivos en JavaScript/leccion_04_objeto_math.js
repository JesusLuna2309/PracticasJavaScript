//Ejemplos de uso del objeto Math en JavaScript

// El objeto Math proporciona propiedades y métodos para realizar operaciones matemáticas
// Algunas de las propiedades más comunes son:
console.log("Valor de PI:", Math.PI); // Salida: Valor de PI: 3.141592653589793
console.log("Valor de E:", Math.E); // Salida: Valor de E: 2.718281828459045

// Métodos comunes del objeto Math
// Math.abs: Devuelve el valor absoluto de un número
console.log("Valor absoluto de -5:", Math.abs(-5)); // Salida: Valor absoluto de -5: 5

// Math.ceil: Redondea un número hacia arriba al entero más cercano
console.log("Redondeo hacia arriba de 4.2:", Math.ceil(4.2)); // Salida: Redondeo hacia arriba de 4.2: 5

// Math.floor: Redondea un número hacia abajo al entero más cercano
console.log("Redondeo hacia abajo de 4.8:", Math.floor(4.8)); // Salida: Redondeo hacia abajo de 4.8: 4

// Math.round: Redondea un número al entero más cercano
console.log("Redondeo de 4.5:", Math.round(4.5)); // Salida: Redondeo de 4.5: 5 

// Math.max: Devuelve el mayor de los números proporcionados
console.log("Mayor de 1, 2, 3:", Math.max(1, 2, 3)); // Salida: Mayor de 1, 2, 3: 3

// Math.min: Devuelve el menor de los números proporcionados
console.log("Menor de 1, 2, 3:", Math.min(1, 2, 3)); // Salida: Menor de 1, 2, 3: 1

// Math.random: Devuelve un número pseudoaleatorio entre 0 (incluido) y 1 (excluido)
console.log("Número aleatorio entre 0 y 1:", Math.random()); // Salida: Número aleatorio entre 0 y 1: 0.123456789 (ejemplo)

// Math.pow: Eleva un número a la potencia de otro
console.log("2 elevado a la 3:", Math.pow(2, 3)); // Salida: 2 elevado a la 3: 8

// Math.sqrt: Devuelve la raíz cuadrada de un número
console.log("Raíz cuadrada de 16:", Math.sqrt(16)); // Salida: Raíz cuadrada de 16: 4

// Math.log: Devuelve el logaritmo natural (base e) de un número
console.log("Logaritmo natural de 10:", Math.log(10)); // Salida: Logaritmo natural de 10: 2.302585092994046

// Math.sin, Math.cos, Math.tan: Funciones trigonométricas
console.log("Seno de PI/2:", Math.sin(Math.PI / 2)); // Salida: Seno de PI/2: 1
console.log("Coseno de 0:", Math.cos(0)); // Salida: Coseno de 0: 1
console.log("Tangente de PI/4:", Math.tan(Math.PI / 4)); // Salida: Tangente de PI/4: 1

// Math.log10: Devuelve el logaritmo en base 10 de un número
console.log("Logaritmo en base 10 de 100:", Math.log10(100)); // Salida: Logaritmo en base 10 de 100: 2

// Math.log2: Devuelve el logaritmo en base 2 de un número
console.log("Logaritmo en base 2 de 8:", Math.log2(8)); // Salida: Logaritmo en base 2 de 8: 3

// Math.sign: Devuelve el signo de un número (-1, 0, 1)
console.log("Signo de -10:", Math.sign(-10)); // Salida: Signo de -10: -1
console.log("Signo de 0:", Math.sign(0)); // Salida: Signo de 0: 0
console.log("Signo de 10:", Math.sign(10)); // Salida: Signo de 10: 1

// Math.trunc: Elimina la parte decimal de un número
console.log("Parte entera de 4.9:", Math.trunc(4.9)); // Salida: Parte entera de 4.9: 4

// Math.hypot: Devuelve la hipotenusa de un triángulo dado sus catetos
console.log("Hipotenusa de un triángulo con catetos 3 y 4:", Math.hypot(3, 4)); // Salida: Hipotenusa de un triángulo con catetos 3 y 4: 5

// Math.imul: Multiplicación de enteros de 32 bits
console.log("Multiplicación de 2 y 3 usando imul:", Math.imul(2, 3)); // Salida: Multiplicación de 2 y 3 usando imul: 6

// Math.clz32: Cuenta el número de ceros a la izquierda en la representación binaria de un número de 32 bits
console.log("Número de ceros a la izquierda en 8 (en 32 bits):", Math.clz32(8)); // Salida: Número de ceros a la izquierda en 8 (en 32 bits): 29

// Math.fround: Devuelve el valor de un número en formato de punto flotante de 32 bits
console.log("Número 1.5 en formato de punto flotante de 32 bits:", Math.fround(1.5)); // Salida: Número 1.5 en formato de punto flotante de 32 bits: 1.5

// Math.cbrt: Devuelve la raíz cúbica de un número
console.log("Raíz cúbica de 27:", Math.cbrt(27)); // Salida: Raíz cúbica de 27: 3

// Math.log1p: Devuelve el logaritmo natural de (1 + x)
console.log("Logaritmo natural de (1 + 0.5):", Math.log1p(0.5)); // Salida: Logaritmo natural de (1 + 0.5): 0.4054651081081644

// Math.expm1: Devuelve e elevado a la potencia de x menos 1
console.log("e elevado a la potencia de 0.5 menos 1:", Math.expm1(0.5)); // Salida: e elevado a la potencia de 0.5 menos 1: 0.6487212707001282

// Math.asin, Math.acos, Math.atan: Funciones trigonométricas inversas
console.log("Arcoseno de 1:", Math.asin(1)); // Salida: Arcoseno de 1: 1.5707963267948966
console.log("Arcocoseno de 1:", Math.acos(1)); // Salida: Arcocoseno de 1: 0
console.log("Arcotangente de 1:", Math.atan(1)); // Salida: Arcotangente de 1: 0.7853981633974483   

// Math.atan2: Devuelve el ángulo en radianes entre el eje X y el punto (y, x)
console.log("Ángulo en radianes entre el eje X y el punto (1, 1):", Math.atan2(1, 1)); // Salida: Ángulo en radianes entre el eje X y el punto (1, 1): 0.7853981633974483  

// Math.sinh, Math.cosh, Math.tanh: Funciones hiperbólicas
console.log("Seno hiperbólico de 1:", Math.sinh(1)); // Salida: Seno hiperbólico de 1: 1.1752011936438014
console.log("Coseno hiperbólico de 1:", Math.cosh(1)); //   Salida: Coseno hiperbólico de 1: 1.5430806348152437
console.log("Tangente hiperbólica de 1:", Math.tanh(1)); // Salida: Tangente hiperbólica de 1: 0.7615941559557649