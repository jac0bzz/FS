document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("site-preloader");
    const progressBar = document.getElementById("loader-progress-bar");
    const percentageText = document.getElementById("loader-percentage");

    let progress = 0;

    // Simulación fluida de carga
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5; // Avance aleatorio

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            // Actualiza a 100% y oculta la pantalla con efecto suave
            if (progressBar) progressBar.style.width = "100%";
            if (percentageText) percentageText.textContent = "100%";

            setTimeout(() => {
                if (preloader) preloader.classList.add("preloader-hidden");
            }, 300); // Pequeña pausa al llegar a 100% para mejor sensación
        } else {
            if (progressBar) progressBar.style.width = progress + "%";
            if (percentageText) percentageText.textContent = progress + "%";
        }
    }, 60);

    // Asegurar que cuando la página cargue totalmente por red se oculte
    window.addEventListener("load", function () {
        progress = 100;
    });
});