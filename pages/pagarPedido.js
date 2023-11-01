//Validar formulario

(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

//*--------------------------------------------------------------






function pagar () {
    const formulario = document.getElementById('form1');

    if (formulario.checkValidity()) {
        Swal.fire(
            'Pago Exitoso',
            '¡Gracias por tu compra!',
            'success'
        );
    } else {
        Swal.fire(
            'Error',
            'Por favor llena todos los campos requeridos.',
            'error'
        );
    }
    
}












