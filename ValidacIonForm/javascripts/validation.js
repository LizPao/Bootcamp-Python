document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const emailInput = form.querySelector('#email');
    const emailConfirmInput = form.querySelector('#email_confirm');
    const errorMessage = document.createElement('p');
    const emailConfirmLabel = form.querySelector('label[for="email_confirm"]');
    
    emailConfirmInput.addEventListener('input', function () {
        if (emailInput.value !== emailConfirmInput.value) {
            errorMessage.textContent = 'Email does not match';
            errorMessage.classList.add('alert_color');
            emailConfirmLabel.appendChild(errorMessage);
            emailConfirmInput.classList.add('alert_bg'); // Agrega la clase para el fondo rojo
        } else {
            errorMessage.textContent = '';
            errorMessage.classList.remove('alert_color');
            emailConfirmLabel.removeChild(errorMessage);
            emailConfirmInput.classList.remove('alert_bg'); // Remueve la clase para el fondo rojo
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        if (emailInput.value !== emailConfirmInput.value) {
            form.appendChild(errorMessage);
            setTimeout(function () {
                form.removeChild(errorMessage);
            }, 3000);
        } else {
            form.submit();
        }
    });
});
