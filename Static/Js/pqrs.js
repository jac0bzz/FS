// 1. INICIALIZA EMAILJS
emailjs.init("8hNx1Q5w5Cs7-3lDK"); 

document.getElementById('pqrsForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const btn = document.getElementById('btnSubmit');
    const btnText = document.getElementById('btnText');
    const statusMsg = document.getElementById('formStatus');

    // Cambiar estado a "Enviando..."
    btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;
    statusMsg.className = 'form-status';

    // Generar número de PQR aleatorio y meterlo en el input oculto
    const numeroPQR = 'PQR-' + Math.floor(Math.random() * 1000000);
    document.getElementById('ticketNum').value = numeroPQR;

    // 2. TUS IDs DE EMAILJS
    const SERVICE_ID = 'service_fk3z6em'; 
    const TEMPLATE_ID = 'template_n5idoco'; 

    // 3. ENVIAR FORMULARIO
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target)
        .then(function() {
            // Éxito
            btnText.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
            
            // Le mostramos el número de ticket al usuario en la pantalla
            statusMsg.textContent = `¡Enviado con éxito! Tu número de radicado es: ${numeroPQR}`;
            statusMsg.classList.add('success');
            
            document.getElementById('pqrsForm').reset();

            // Restaurar botón después de 6 segundos
            setTimeout(() => {
                btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar PQRS';
                btn.disabled = false;
                statusMsg.textContent = ''; 
                statusMsg.classList.remove('success');
            }, 6000);

        }, function(error) {
            // Error
            console.error('Error al enviar EmailJS:', error);
            btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Reintentar';
            btn.disabled = false;
            
            statusMsg.textContent = 'Hubo un error al enviar el formulario. Por favor intenta de nuevo.';
            statusMsg.classList.add('error');
        });
});