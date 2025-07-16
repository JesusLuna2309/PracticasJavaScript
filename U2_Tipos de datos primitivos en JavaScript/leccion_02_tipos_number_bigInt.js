//Valor numero int:

const numeroInt = 42; // Se declara una constante de tipo Number con un valor entero
console.log("Número entero:", numeroInt); // Imprime el valor entero en consola

//Valor numero BigInt:
// En JavaScript, para declarar un BigInt se debe agregar una 'n' al final del número.
// Si no se pone la 'n', el número se interpreta como un Number normal y puede perder precisión con valores grandes.
const numeroBigInt = 123456789012345678901234567890n; // Se declara una constante de tipo BigInt para valores enteros muy grandes
console.log("Número BigInt:", numeroBigInt); // Imprime el valor BigInt en consola