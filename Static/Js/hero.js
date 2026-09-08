document.addEventListener("DOMContentLoaded", () => {
  const text = "FULL SERVICES";
  const typingEl = document.querySelector(".typing");
  if (!typingEl) return; // Validación de seguridad
  
  typingEl.textContent = "";

  let i = 0;
  let isTyping = true;

  function typeEffect() {
    if (isTyping) {
      if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 180); // Velocidad de escritura suave
      } else {
        isTyping = false;
        setTimeout(typeEffect, 4000); // Pausa antes de borrar
      }
    } else {
      if (i > 0) {
        typingEl.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(typeEffect, 80); // Borrado más rápido para fluidez
      } else {
        isTyping = true;
        setTimeout(typeEffect, 1000); // Pausa antes de volver a escribir
      }
    }
  }

  typeEffect();
});