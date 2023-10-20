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








/*const formDatas = {
    // Obtén los datos del formulario, por ejemplo:
    nombre: document.getElementById('validationCustom01').value,
    apellido: document.getElementById('validationCustom02').value,
    telefono: document.getElementById('validationCustom03').value,
    direccion: document.getElementById('validationCustom04').value,
    ciudad: document.getElementById('validationCustom05').value,
    email: document.getElementById('validationCustom06').value,
    metodoDePago: document.getElementById('validationCustom07').value,
    franquicia: document.getElementById('validationCustom08').value,
    nombreTarjeta: document.getElementById('validationCustom09').value,
    NumeroTarjeta: document.getElementById('validationCustom10').value,
    /*  cvc: document.getElementById('validationCustom012').value, */
//}; 




