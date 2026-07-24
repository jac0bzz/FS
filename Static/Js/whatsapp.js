function sendToWhatsApp() {
    const input = document.getElementById('wa-user-message');
    const message = input.value.trim();
        
    // Si el usuario no escribió nada, no hacemos nada
    if (message === '') return;

    // Tu número de WhatsApp (con el código de país 57, sin el "+")
    const phoneNumber = '573148210883'; 
        
    // Codificamos el mensaje para que los espacios y tildes funcionen en la URL
    const encodedMessage = encodeURIComponent(message);
        
    // Creamos el link oficial de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrimos WhatsApp en una pestaña nueva
    window.open(whatsappUrl, '_blank');
        
    // Vaciamos el input después de enviar
    input.value = ''; 
    }

    // Permitir que el usuario envíe el mensaje presionando "Enter"
    function handleWaKeyPress(event) {
        if (event.key === 'Enter') {
            sendToWhatsApp();
        }
    }
