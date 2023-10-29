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



let form1 = document.getElementById("form1");
let allPlans = document.getElementById("allPlans");

form1.addEventListener("submit",confirmar);


let infoList;
let stotageList;



infoList = JSON.parse(localStorage.getItem("infoList")) || [];





const compraFinal = (nombre)=>{
    Swal.fire({
        icon: 'success',
        title: 'Compra realizada con exito!',
        showConfirmButton: false,
        timer: 3000
      })
}



const mostrarPago = ()=>{
    let stotaged = infoList;
    stotageList = [];
    allPlans.innerHTML = "";

    for(const objeto of stotaged){
        console.log(objeto);
        stotageList.push(new planInfo(objeto));
    }
    console.log(stotageList);

    for(info of stotageList){
        let firstDiv = document.createElement("div");
        firstDiv.className="col";
        let secondDiv = document.createElement("div");
        secondDiv.className ="card mb-4 rounded-3 shadow-sm";
 
        secondDiv.innerHTML = info.assemble();
        firstDiv.append(secondDiv);
        allPlans.append(firstDiv)
    }
  
}


const newPlan = (info) =>{

   infoList.push(info);
 
   localStorage.setItem("infoList", JSON.stringify(infoList));
   mostrarPago();
}


function confirmar(e){
   // Inputs
    let validationCustom01 = document.getElementById("validationCustom01").value;
    let validationCustom02 = document.getElementById("validationCustom02").value;
    let validationCustom03 = document.getElementById("validationCustom03").value;
    let validationCustom04 = document.getElementById("validationCustom04").value;

    e.preventDefault();

    let info = {
        nombre: validationCustom01,
        telefono: validationCustom03,
        dir: validationCustom04,
        correo: validationCustom02
    }

    newPlan(info);

}

mostrarPago();












