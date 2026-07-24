document.addEventListener("DOMContentLoaded", function() {
        const glassBtns = document.querySelectorAll(".glass-btn");
        const mapIframes = document.querySelectorAll(".map-iframe");

        glassBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                glassBtns.forEach(b => b.classList.remove("active"));
                mapIframes.forEach(m => m.classList.remove("active"));

                this.classList.add("active");
                
                const targetMap = this.getAttribute("data-map");
                document.getElementById(targetMap).classList.add("active");
            });
        });
    });