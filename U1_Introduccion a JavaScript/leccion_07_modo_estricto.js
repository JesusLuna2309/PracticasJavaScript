/**
 * * Modo estricto en JavaScript
 * * El modo estricto es una forma de ejecutar JavaScript que ayuda a detectar errores comunes y mejorar la seguridad del código.
 * * Se activa agregando la directiva "use strict" al inicio de un archivo o función.
 * * Al activar el modo estricto, se aplican restricciones adicionales al código, 
 * * lo que puede ayudar a evitar errores silenciosos y comportamientos inesperados.  
 * * * Algunas de las restricciones incluyen:
 * * - No se permite el uso de variables no declaradas.
 * * - No se permite la eliminación de variables o funciones.
 * * - No se permite la asignación a propiedades de objetos no configurables. 
 * * - No se permite el uso de palabras reservadas como nombres de variables.
 * * - No se permite el uso de "this" en funciones globales.
 * * * Ejemplo de uso del modo estricto:
 * * Si se coloca "use strict" al inicio de un archivo, todo el código en ese archivo se ejecutará en modo estricto.
 * * Si se coloca dentro de una función, solo el código dentro de esa función se ejecutará en modo estricto.
 * * Se recomienda usar el modo estricto en todo el código para evitar errores y mejorar la seguridad.
 * * Se introdujo en ECMAScript 5 (ES5) y es compatible con la mayoría de los navegadores modernos.
 * * Para activar el modo estricto, simplemente agrega "use strict"; al inicio de tu archivo JavaScript o dentro de una función.
 */

"use strict"; // Activa el modo estricto

//Previene asignación de variables sin declarar
variableSinNombre = 10; // Esto causaría un error en modo estricto, ya que x no está declarada

//Previene la reasignación de valores globales
NaN = 10; // Esto causaría un error en modo estricto, ya que NaN es una constante y no se puede reasignar

//Previene paramétros con el mismo nombre
function sum(x,x) {
    return x + x; // Esto causaría un error en modo estricto, ya que los parámetros no pueden tener el mismo nombre
}

//Previene la eliminación de variables o funciones
//delete variableSinNombre; // Esto causaría un error en modo estricto, ya que no se puede eliminar una variable declarada

//Previene el uso de palabras reservadas como nombres de variables
//let if = 5; // Esto causaría un error en modo estricto, ya que "if" es una palabra reservada en JavaScript



