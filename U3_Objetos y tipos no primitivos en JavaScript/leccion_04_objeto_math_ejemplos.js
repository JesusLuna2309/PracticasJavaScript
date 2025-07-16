// Ejemplos prácticos de uso de métodos de Math

// Ejemplo aplicado: Calcular la longitud de una pista circular de atletismo de radio 7 metros
// Problema: ¿Cuánto mide la pista si el radio es 7 metros?
let radioCircunferencia = 7;
console.log("Longitud de pista (radio 7m):", 2 * Math.PI * radioCircunferencia);

// Ejemplo aplicado: Calcular el monto final de una inversión de $1000 con interés compuesto continuo al 5% anual durante 1 año
// Problema: ¿Cuánto dinero tendrás después de 1 año?
let principal = 1000, rate = 0.05, time = 1;
console.log("Monto inversión (interés compuesto continuo):", principal * Math.pow(Math.E, rate * time));

// Ejemplo aplicado: Calcular la distancia absoluta entre dos ciudades en una carretera (km)
// Problema: Ciudad A está en el km -10 y ciudad B en el km 15. ¿Cuál es la distancia entre ellas?
let posA = -10, posB = 15;
console.log("Distancia entre ciudades:", Math.abs(posA - posB));

// Ejemplo aplicado: Saber cuántas cajas necesitas para empacar 27 botellas si cada caja cabe 8
// Problema: ¿Cuántas cajas completas necesitas?
let productos = 27, porCaja = 8;
console.log("Cajas necesarias:", Math.ceil(productos / porCaja));

// Ejemplo aplicado: Organizar grupos de 6 personas en una sala con 40 asientos
// Problema: ¿Cuántos grupos completos puedes formar?
let asientos = 40, grupo = 6;
console.log("Grupos completos:", Math.floor(asientos / grupo));

// Ejemplo aplicado: Redondear el precio de una camiseta para mostrarlo en la etiqueta
// Problema: El precio calculado es 23.49. ¿Qué precio se muestra?
let precioFinal = 23.49;
console.log("Precio redondeado:", Math.round(precioFinal));

// Ejemplo aplicado: Encontrar el puntaje más alto en un torneo de videojuegos
// Problema: Los puntajes son 120, 98, 135 y 110. ¿Quién ganó?
let puntajes = [120, 98, 135, 110];
console.log("Puntaje más alto:", Math.max(...puntajes));

// Ejemplo aplicado: Saber quién es el más joven en una familia
// Problema: Las edades son 34, 28, 19 y 45. ¿Quién es el menor?
let edades = [34, 28, 19, 45];
console.log("Edad más joven:", Math.min(...edades));

// Ejemplo aplicado: Sorteo de un premio entre 100 personas
// Problema: ¿Qué número aleatorio sale entre 0 y 100?
console.log("Número aleatorio entre 0 y 100:", Math.floor(Math.random() * 101));

// Ejemplo aplicado: Calcular el área de una plaza cuadrada si cada lado mide la distancia recorrida en 5 segundos a 3 m/s
// Problema: ¿Cuál es el área de la plaza?
let velocidad = 3, tiempo = 5;
console.log("Área de la plaza:", Math.pow(velocidad * tiempo, 2));

// Ejemplo aplicado: Calcular la longitud de la diagonal de una pantalla cuadrada de 81 cm²
// Problema: ¿Cuánto mide la diagonal?
console.log("Diagonal de pantalla cuadrada (cm):", Math.sqrt(81));

// Ejemplo aplicado: Saber el crecimiento logarítmico de una población de 20 bacterias
// Problema: ¿Cuál es el logaritmo natural de 20?
console.log("Logaritmo natural de 20:", Math.log(20));

// Ejemplo aplicado: Calcular la altura de una ola en el mar en un instante específico
// Problema: ¿Cuál es la altura cuando el tiempo es PI/6 segundos?
console.log("Altura de ola en PI/6:", Math.sin(Math.PI / 6));

// Ejemplo aplicado: Calcular la componente horizontal de una fuerza aplicada en 45°
// Problema: ¿Cuál es el valor del coseno de 45°?
console.log("Coseno de 45°:", Math.cos(45 * Math.PI / 180));

// Ejemplo aplicado: Calcular la pendiente de una rampa inclinada a 45°
// Problema: ¿Cuál es la tangente de 45°?
console.log("Tangente de 45°:", Math.tan(45 * Math.PI / 180));

// Ejemplo aplicado: Saber cuántos ceros hay en el número 10000 en base 10
// Problema: ¿Cuál es el logaritmo base 10 de 10000?
console.log("Logaritmo base 10 de 10000:", Math.log10(10000));

// Ejemplo aplicado: Saber cuántos bits se necesitan para representar el número 1024 en binario
// Problema: ¿Cuál es el logaritmo base 2 de 1024?
console.log("Logaritmo base 2 de 1024:", Math.log2(1024));

// Ejemplo aplicado: Determinar si una deuda es positiva, negativa o nula
// Problema: ¿Cuál es el signo de una deuda de $200?
let deuda = 200;
console.log("Signo de la deuda:", Math.sign(deuda));

// Ejemplo aplicado: Obtener la parte entera de una temperatura registrada (-7.89°C)
// Problema: ¿Cuál es la parte entera?
console.log("Parte entera de -7.89°C:", Math.trunc(-7.89));

// Ejemplo aplicado: Calcular la longitud de la escalera necesaria para subir a una ventana a 6m de altura y 8m de distancia
// Problema: ¿Cuál es la hipotenusa?
console.log("Longitud de escalera (hipotenusa):", Math.hypot(6,8));

// Ejemplo aplicado: Multiplicar grandes cantidades de productos en una fábrica sin perder precisión
// Problema: ¿Cuánto es 2^30 por 3?
console.log("Multiplicación precisa de 2^30 y 3:", Math.imul(Math.pow(2,30), 3));

// Ejemplo aplicado: Saber cuántos ceros hay a la izquierda en la representación binaria de 256
// Problema: ¿Cuántos ceros hay?
console.log("Ceros a la izquierda en 256:", Math.clz32(256));

// Ejemplo aplicado: Convertir un número decimal a precisión de 32 bits para cálculos científicos
// Problema: ¿Cómo queda 7.123456789?
console.log("7.123456789 en 32 bits:", Math.fround(7.123456789));

// Ejemplo aplicado: Calcular el volumen de un cubo con lado 3 cm
// Problema: ¿Cuál es la raíz cúbica de 27?
console.log("Raíz cúbica de 27:", Math.cbrt(27));

// Ejemplo aplicado: Calcular el crecimiento porcentual de una inversión del 5% usando logaritmo natural
// Problema: ¿Cuál es log(1 + 0.05)?
console.log("Logaritmo natural de (1 + 0.05):", Math.log1p(0.05));

// Ejemplo aplicado: Calcular el incremento porcentual de una inversión del 5% usando exponencial
// Problema: ¿Cuál es e^0.05 - 1?
console.log("e^0.05 - 1:", Math.expm1(0.05));

// Ejemplo aplicado: Calcular el ángulo en radianes cuyo seno es 1 (ejemplo de física de ondas)
// Problema: ¿Cuál es el ángulo?
console.log("Ángulo para seno 1:", Math.asin(1));

// Ejemplo aplicado: Calcular el ángulo en radianes cuyo coseno es 0 (ejemplo de física de ondas)
// Problema: ¿Cuál es el ángulo?
console.log("Ángulo para coseno 0:", Math.acos(0));

// Ejemplo aplicado: Calcular el ángulo en radianes cuya tangente es 0.5 (ejemplo de trigonometría)
// Problema: ¿Cuál es el ángulo?
console.log("Ángulo para tangente 0.5:", Math.atan(0.5));

// Ejemplo aplicado: Calcular el ángulo entre el eje X y un punto en el plano cartesiano (3,4)
// Problema: ¿Cuál es el ángulo?
console.log("Ángulo entre eje X y punto (3,4):", Math.atan2(4, 3));

// Ejemplo aplicado: Calcular el seno hiperbólico de 1 para una función matemática avanzada
// Problema: ¿Cuál es el seno hiperbólico de 1?
console.log("Seno hiperbólico de 1:", Math.sinh(1));

// Ejemplo aplicado: Calcular el coseno hiperbólico de 1 para una función matemática avanzada
// Problema: ¿Cuál es el coseno hiperbólico de 1?
console.log("Coseno hiperbólico de 1:", Math.cosh(1));

// Ejemplo aplicado: Calcular la tangente hiperbólica de 1 para una función matemática avanzada
// Problema: ¿Cuál es la tangente hiperbólica de 1?
console.log("Tangente hiperbólica de 1:", Math.tanh(1));