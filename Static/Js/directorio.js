// Base de datos del personal
const personal = [
    {
        id: 1,
        nombre: "Victor Delgado",
        cargo: "Gerente General",
        foto: "", 
        link: "../Cards/vdelgado.html" 
    },
    {
        id: 2,
        nombre: "Emily Solarte",
        cargo: "Director de Proyectos",
        foto: "../Static/Images/Fotos Corporativas/4.jpg",
        link: "../Cards/esolarte.html"
    },
    {
        id: 3,
        nombre: "Aracelly Delgado",
        cargo: "Director de Recursos Humanos",
        foto: "../Static/Images/Fotos Corporativas/3.jpg",
        link: "../Cards/adelgado.html"
    },
    {
        id: 4,
        nombre: "Fabian Delgado",
        cargo: "Director de Operaciones",
        foto: "",
        link: "../Cards/fdelgado.html"
    },
    {
        id: 5,
        nombre: "Luis Delgado",
        cargo: "Coordinador de Transporte",
        foto: "../Static/Images/Fotos Corporativas/20.jpg",
        link: "../Cards/ldelgado.html"
    },
    {
        id: 6,
        nombre: "Edwin Hernandez",
        cargo: "Coordinador de Operaciones",
        foto: "../Static/Images/Fotos Corporativas/11.jpg",
        link: "../Cards/ehernandez.html"
    },
    {
        id: 7,
        nombre: "Maria Jimenez",
        cargo: "Comercial",
        foto: "",
        link: "../Cards/mjimenez.html"
    }
];

const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');

// Función para renderizar las tarjetas en el HTML
function renderCards(data) {
    cardsGrid.innerHTML = ''; // Limpiar el grid

    if (data.length === 0) {
        cardsGrid.innerHTML = '<div class="no-results">No se encontró personal con ese criterio.</div>';
        return;
    }

    data.forEach(persona => {
        const card = document.createElement('div');
        card.className = 'person-card';

        // LÓGICA CONDICIONAL: Si hay texto en 'foto', muestra la imagen. Si está vacío, muestra el ícono.
        const avatarHTML = persona.foto 
            ? `<img src="${persona.foto}" alt="Foto de ${persona.nombre}">` 
            : `<i class="fa-solid fa-user-gear"></i>`;

        // Estructura interna de la tarjeta
        card.innerHTML = `
            <div class="card-avatar">
                ${avatarHTML}
            </div>
            <h2 class="card-name">${persona.nombre}</h2>
            <p class="card-role">${persona.cargo}</p>
            
            <a href="${persona.link}" class="btn-bio">
                <i class="fa-regular fa-id-badge"></i> Ver Tarjeta Digital
            </a>
        `;

        cardsGrid.appendChild(card);
    });
}

// Inicializar mostrando a todo el personal
renderCards(personal);

// Evento para el buscador en tiempo real
searchInput.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();

    // Filtrar por nombre o por cargo
    const resultadosFiltrados = personal.filter(persona => {
        return persona.nombre.toLowerCase().includes(terminoBusqueda) || 
        persona.cargo.toLowerCase().includes(terminoBusqueda);
    });

    renderCards(resultadosFiltrados);
});