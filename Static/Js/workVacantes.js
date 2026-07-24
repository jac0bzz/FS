const vacancies = [
    {
        id: 1,
        title: "Auxiliar Administrativo",
        requirements: [
            "Técnico o tecnólogo en administración o áreas afines.",
            "Manejo básico de Excel y Word.",
            "Buena redacción y ortografía.",
            "Organización y atención al detalle.",
            "Disponibilidad inmediata."
        ]
    },
    {
        id: 2,
        title: "Ingeniero HSEQ",
        requirements: [
            "Profesional en Seguridad y Salud en el Trabajo.",
            "Experiencia mínima de 2 años.",
            "Conocimiento en normas ISO.",
            "Capacidad de liderazgo.",
            "Disponibilidad para viajar."
        ]
    },
    {
        id: 3,
        title: "Técnico en Mantenimiento",
        requirements: [
            "Técnico en mantenimiento industrial.",
            "Experiencia en maquinaria pesada.",
            "Trabajo en equipo.",
            "Responsabilidad y compromiso.",
            "Licencia de conducción vigente."
        ]
    },
    {
        id: 4,
        title: "Ingeniero HSEQ",
        requirements: [
            "Profesional en Seguridad y Salud en el Trabajo.",
            "Experiencia mínima de 2 años.",
            "Conocimiento en normas ISO.",
            "Capacidad de liderazgo.",
            "Disponibilidad para viajar."
        ]
    },
    {
        id: 5,
        title: "Técnico en Mantenimiento",
        requirements: [
            "Técnico en mantenimiento industrial.",
            "Experiencia en maquinaria pesada.",
            "Trabajo en equipo.",
            "Responsabilidad y compromiso.",
            "Licencia de conducción vigente."
        ]
    }
];

const perPage = 5;
let currentPage = 1;

const vacancyList = document.getElementById("vacancyList");
const vacancyTitle = document.getElementById("vacancyTitle");
const vacancyRequirements = document.getElementById("vacancyRequirements");

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

// ==========================================
// RENDERIZADO Y PAGINACIÓN DE VACANTES
// ==========================================
function renderVacancies() {
    vacancyList.innerHTML = "";

    const start = (currentPage - 1) * perPage;
    const pageItems = vacancies.slice(start, start + perPage);

    pageItems.forEach(v => {
        const li = document.createElement("li");
        li.classList.add("vacancy-item");
        li.innerHTML = `<h4>${v.title}</h4>`;

        li.addEventListener("click", () => {
            // 1. Quitar clase activa de los demás
            document.querySelectorAll(".vacancy-item").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            // 2. Actualizar panel central de Detalles
            vacancyTitle.textContent = v.title;
            vacancyRequirements.innerHTML = "";

            v.requirements.forEach(req => {
                const item = document.createElement("li");
                item.textContent = req;
                vacancyRequirements.appendChild(item);
            });

            // 3. Actualizar dinámicamente el input visual de WhatsApp en la 3ra columna
            const waInput = document.getElementById("waInputMessage");
            if (waInput) {
                waInput.value = `Quiero aplicar a: ${v.title}`;
            }
        });

        vacancyList.appendChild(li);
    });

    const totalPages = Math.ceil(vacancies.length / perPage);
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderVacancies();
    }
});

nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(vacancies.length / perPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderVacancies();
    }
});

// Inicializar lista
renderVacancies();

// ==========================================
// FUNCIÓN DE ENVÍO A WHATSAPP
// ==========================================
function abrirWhatsAppRRHH() {
    // Obtener el título de la vacante seleccionada
    const vacanteTitulo = document.getElementById('vacancyTitle').innerText;
    
    // Validación de seguridad para que no envíen mensajes vacíos
    if (vacanteTitulo === "Seleccione una vacante") {
        alert("Por favor, seleccione una vacante de la lista de la izquierda primero.");
        return;
    }
    
    // Número de teléfono de Recursos Humanos
    const numeroRRHH = "573102139362"; 
    
    // Crear el mensaje que se pre-llenará en el chat
    const mensaje = `Hola, estoy interesado en aplicar a la vacante de *${vacanteTitulo}*. Adjunto mi Hoja de Vida en PDF.`;
    
    // Generar la URL y abrir la pestaña
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroRRHH}&text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}