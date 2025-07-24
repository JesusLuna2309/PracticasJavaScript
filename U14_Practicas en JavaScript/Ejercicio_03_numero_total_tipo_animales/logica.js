const animales = [
    {
      nombre: 'León',
      tipo: 'Mamífero',
      habitat: 'Sabana',
      edad: 8
    },
    {
      nombre: 'Tigre',
      tipo: 'Mamífero',
      habitat: 'Selva',
      edad: 6
    },
    {
      nombre: 'Elefante',
      tipo: 'Mamífero',
      habitat: 'Bosque',
      edad: 15
    },
    {
      nombre: 'Jirafa',
      tipo: 'Mamífero',
      habitat: 'Savannah',
      edad: 10
    },
    {
      nombre: 'Panda',
      tipo: 'Mamífero',
      habitat: 'Bosque de bambú',
      edad: 5
    },
    {
      nombre: 'Águila Calva',
      tipo: 'Ave',
      habitat: 'Montañas',
      edad: 12
    },
    {
      nombre: 'Tortuga Marina',
      tipo: 'Reptil',
      habitat: 'Océanos',
      edad: 40
    },
    {
      nombre: 'Delfín',
      tipo: 'Mamífero',
      habitat: 'Océanos',
      edad: 20
    },
    {
      nombre: 'Cocodrilo del Nilo',
      tipo: 'Reptil',
      habitat: 'Ríos',
      edad: 30
    },
    {
      nombre: 'Lobo Gris',
      tipo: 'Mamífero',
      habitat: 'Bosques y Praderas',
      edad: 7
    },
    {
      nombre: 'Puma',
      tipo: 'Mamífero',
      habitat: 'Bosques',
      edad: 9
    },
    {
      nombre: 'Pingüino Emperador',
      tipo: 'Ave',
      habitat: 'Antártida',
      edad: 20
    },
    {
      nombre: 'Cebra',
      tipo: 'Mamífero',
      habitat: 'Sabana',
      edad: 12
    },
    {
      nombre: 'Canguro Rojo',
      tipo: 'Mamífero',
      habitat: 'Australia',
      edad: 8
    },
    {
      nombre: 'Anaconda Verde',
      tipo: 'Reptil',
      habitat: 'Selva Tropical',
      edad: 15
    },
    {
      nombre: 'Pez Payaso',
      tipo: 'Pez',
      habitat: 'Arrecifes de Coral',
      edad: 3
    },
    {
      nombre: 'Leopardo de las Nieves',
      tipo: 'Mamífero',
      habitat: 'Montañas de Asia Central',
      edad: 10
    },
    {
      nombre: 'Cocodrilo del Orinoco',
      tipo: 'Reptil',
      habitat: 'Ríos de América del Sur',
      edad: 25
    },
    {
      nombre: 'Koala',
      tipo: 'Mamífero',
      habitat: 'Eucaliptus',
      edad: 5
    },
    {
      nombre: 'Halcón Peregrino',
      tipo: 'Ave',
      habitat: 'Mundial',
      edad: 15
    }
  ];

function mostrarAnimalesPorTipo(animales, tipo) {
  const totalTipo = animales.reduce((acumulador, animal) => {
    const tipo = animal.tipo;
    if (!acumulador[animal.tipo]) {
      acumulador[animal.tipo] = 0;
    }
    acumulador[animal.tipo]++;
    return acumulador;
  }, {});
}
//Mostramos en pantalla el número total de animales por tipo
function mostrarTotalPorTipo() {
  const totalPorTipo = mostrarAnimalesPorTipo(animales);
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  for (const tipo in totalPorTipo) {
    const parrafo = document.createElement('p');
    parrafo.textContent = `Total de ${tipo}: ${totalPorTipo[tipo]}`;
    resultado.appendChild(parrafo);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('mostrarTotal');
  boton.addEventListener('click', mostrarTotalPorTipo);
});