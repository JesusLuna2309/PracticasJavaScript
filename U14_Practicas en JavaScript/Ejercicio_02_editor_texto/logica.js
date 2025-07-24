const poem = `Mientras por competir con tu cabello
oro bruñido el sol relumbra en vano,
mientras con menosprecio en medio el llano
mira tu blanca frente el lilio bello;

mientras a cada labio, por cogello,
siguen más ojos que al clavel temprano;
y mientras triunfa con desdén lozano
del luciente cristal tu gentil cuello:

goza cuello, cabello, labio y frente,
antes que lo que fue en tu edad dorada
oro, lilio, clavel, cristal luciente,

no solo en plata o víüla troncada
se vuelva, mas tú y ello juntamente
en tierra, en humo, en polvo, en sombra, en nada.`;

function sustituirPoema(poema){
    // 1. Crear un contenedor para el poema
    const contenedorPoema = document.createElement("div");
    contenedorPoema.className = "contenedor-poema";
    
    // 2. Crear y añadir el título
    const titulo = document.createElement("h3");
    titulo.innerText = "Poema de Luis de Góngora y Argote";
    contenedorPoema.appendChild(titulo);
    
    // 3. Dividir el poema en líneas y crear párrafos
    const lineas = poema.split("\n");
    const reger = new RegExp(" ", 'gi');
    for (const linea of lineas) {
        const lineaModificada = linea.replace(reger, " & ");
        const parrafo = document.createElement("p");
        parrafo.innerText = lineaModificada.trim(); // Eliminar espacios al inicio y final
        contenedorPoema.appendChild(parrafo);
    }
    
    // 4. Devolver el elemento contenedor para que sea añadido donde se desee
    return contenedorPoema;
}

// --- Lógica para ejecutar la función y añadirla al DOM ---
document.addEventListener('DOMContentLoaded', () => {
    const poemaContainer = document.getElementById('poema-container');
    if (poemaContainer) {
        // Borra el mensaje "Cargando poema..."
        poemaContainer.innerHTML = ''; 
        
        // Llama a la función y añade el elemento generado
        const elementoPoema = sustituirPoema(poem);
        poemaContainer.appendChild(elementoPoema);
    } else {
        console.error("No se encontró el contenedor con ID 'poema-container'.");
    }
});