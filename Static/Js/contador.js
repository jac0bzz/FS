document.addEventListener('DOMContentLoaded', () => {
    // 1. Apuntamos a los span dentro de .glass-val (donde está el data-target)
    const statNumbers = document.querySelectorAll('.glass-val span[data-target]');
    // 2. Apuntamos a la sección contenedora real
    const statsSection = document.querySelector('.presence-section-elite');

    if (!statsSection || statNumbers.length === 0) return;

    // Usamos IntersectionObserver para detectar el scroll de forma profesional
    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Iniciar animación en cada número
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'), 10);
                    const duration = 2000; // 2 segundos
                    const frameDuration = 1000 / 60; // ~16.6ms por frame
                    const totalFrames = Math.round(duration / frameDuration);
                    const increment = target / totalFrames;
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target; // Asegura el valor final exacto
                        }
                    };

                    updateCounter();
                });

                // Dejar de observar para que se ejecute solo una vez
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% de la sección es visible
    });

    observer.observe(statsSection);
});