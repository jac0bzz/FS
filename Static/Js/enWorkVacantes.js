const vacancies = [
    {
        id: 1,
        title: "Administrative Assistant",
        requirements: [
            "Technician or technologist in administration or related areas.",
            "Basic knowledge of Excel and Word.",
            "Good writing and spelling skills.",
            "Organization and attention to detail.",
            "Immediate availability."
        ]
    },
    {
        id: 2,
        title: "HSEQ Engineer",
        requirements: [
            "Professional in Occupational Health and Safety.",
            "Minimum 2 years of experience.",
            "Knowledge of ISO standards.",
            "Leadership skills.",
            "Availability to travel."
        ]
    },
    {
        id: 3,
        title: "Maintenance Technician",
        requirements: [
            "Industrial maintenance technician.",
            "Experience in heavy machinery.",
            "Teamwork skills.",
            "Responsibility and commitment.",
            "Valid driver's license."
        ]
    },
    {
        id: 4,
        title: "HSEQ Engineer",
        requirements: [
            "Professional in Occupational Health and Safety.",
            "Minimum 2 years of experience.",
            "Knowledge of ISO standards.",
            "Leadership skills.",
            "Availability to travel."
        ]
    },
    {
        id: 5,
        title: "Maintenance Technician",
        requirements: [
            "Industrial maintenance technician.",
            "Experience in heavy machinery.",
            "Teamwork skills.",
            "Responsibility and commitment.",
            "Valid driver's license."
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
// RENDER VACANCIES AND PAGINATION
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
            // 1. Remove active class from other items
            document.querySelectorAll(".vacancy-item").forEach(el => el.classList.remove("active"));
            li.classList.add("active");

            // 2. Update Details panel
            vacancyTitle.textContent = v.title;
            vacancyRequirements.innerHTML = "";

            v.requirements.forEach(req => {
                const item = document.createElement("li");
                item.textContent = req;
                vacancyRequirements.appendChild(item);
            });

            // 3. Dynamically update WhatsApp visual input in the 3rd column
            const waInput = document.getElementById("waInputMessage");
            if (waInput) {
                waInput.value = `I want to apply for: ${v.title}`;
            }
        });

        vacancyList.appendChild(li);
    });

    const totalPages = Math.ceil(vacancies.length / perPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

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

// Initialize list
renderVacancies();

// ==========================================
// WHATSAPP SEND FUNCTION
// ==========================================
function abrirWhatsAppRRHH() {
    // Get the selected vacancy title
    const vacanteTitulo = document.getElementById('vacancyTitle').innerText;
    
    // Security validation to prevent empty messages
    if (vacanteTitulo === "Select a vacancy") {
        alert("Please select a vacancy from the left list first.");
        return;
    }
    
    // HR Phone Number
    const numeroRRHH = "573148210883"; 
    
    // Create the pre-filled message for the chat
    const mensaje = `Hello, I am interested in applying for the *${vacanteTitulo}* position. I have attached my Resume in PDF format.`;
    
    // Generate URL and open in a new tab
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroRRHH}&text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}