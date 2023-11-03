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

/* Asincronia y promesas */

const formulario = document.getElementById('form1');
const btn_Pagar = document.getElementById('btn_Pagar');

function getUserAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (true && formulario.checkValidity()) {
                resolve([
                    setTimeout(function () {
                        Swal.fire({
                            icon: 'info',
                            title: 'Procesando pago',
                            text: 'Por favor espera...',
                            showConfirmButton: false,
                        })

                        setTimeout(function () {
                            Swal.fire({
                                icon: 'success',
                                title: 'Pago Exitoso',
                                text: '¡Gracias por tu compra!',
                                timer: 4000
                            });
                        }, 4000)
                    }, 0)
                ])
                btn_Pagar.disabled = true;
            } else {
                Swal.fire(
                    'Error',
                    'Por favor llena todos los campos requeridos.',
                    'error'
                );
                reject('Error procesando el pago')
            }
        });
    })
}

btn_Pagar.onclick = () => {
    getUserAsync()
}


/* function pagar() {
    const formulario = document.getElementById('form1');
    const btn_Pagar = document.getElementById('btn_Pagar');
     
    setTimeout(function () {
        if (formulario.checkValidity()) {
            setTimeout(function () {
                Swal.fire(
                    'Procesando pago',
                    'Por favor espera...',
                    'info'
                );
                setTimeout(function() {
                    Swal.fire(
                        'Pago Exitoso',
                        '¡Gracias por tu compra!',
                        'success'
                    );
                }, 4000)
            }, 0)
            btn_Pagar.disabled = true;
        } else {
            Swal.fire(
                'Error',
                'Por favor llena todos los campos requeridos.',
                'error'
            );
        }
        
    });
}  */















