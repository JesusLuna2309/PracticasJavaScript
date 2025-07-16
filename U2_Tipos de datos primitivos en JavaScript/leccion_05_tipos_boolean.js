let tienePermiso = true; // Un valor booleano que indica si tiene permiso
let estaLogueado = false; // Otro valor booleano que indica si está logueado

console.log("Ejemplo de Boolean:", tienePermiso); //Salida: true
console.log("Ejemplo de Boolean:", estaLogueado); //Salida: false

// Verificación de igualdad usando el operador ===
console.log("¿Tiene permiso?", tienePermiso === true); //Salida: ¿Tiene permiso? true
console.log("¿Está logueado?", estaLogueado === false); //Salida: ¿Está logueado? true  

// Operaciones lógicas con booleanos
console.log("Permiso y logueado:", tienePermiso && estaLogueado); //Salida: Permiso y logueado: false (AND lógico)
console.log("Permiso o logueado:", tienePermiso || estaLogueado); //Salida: Permiso o logueado: true