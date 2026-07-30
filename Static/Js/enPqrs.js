// 1. INITIALIZE EMAILJS
emailjs.init("8hNx1Q5w5Cs7-3lDK"); 

document.getElementById('pqrsForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const btn = document.getElementById('btnSubmit');
    const btnText = document.getElementById('btnText');
    const statusMsg = document.getElementById('formStatus');

    // Change status to "Sending..."
    btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    statusMsg.className = 'form-status';

    // Generate random PQR ticket number and set it in the hidden input
    const numeroPQR = 'PQR-' + Math.floor(Math.random() * 1000000);
    document.getElementById('ticketNum').value = numeroPQR;

    // 2. YOUR EMAILJS IDs
    const SERVICE_ID = 'service_fk3z6em'; 
    const TEMPLATE_ID = 'template_n5idoco'; 

    // 3. SEND FORM
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target)
        .then(function() {
            // Success
            btnText.innerHTML = '<i class="fas fa-check"></i> Sent!';
            
            // Display the ticket number to the user on screen
            statusMsg.textContent = `Submitted successfully! Your ticket number is: ${numeroPQR}`;
            statusMsg.classList.add('success');
            
            document.getElementById('pqrsForm').reset();

            // Restore button after 6 seconds
            setTimeout(() => {
                btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Request';
                btn.disabled = false;
                statusMsg.textContent = ''; 
                statusMsg.classList.remove('success');
            }, 6000);

        }, function(error) {
            // Error
            console.error('EmailJS sending error:', error);
            btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Retry';
            btn.disabled = false;
            
            statusMsg.textContent = 'There was an error submitting your request. Please try again.';
            statusMsg.classList.add('error');
        });
});