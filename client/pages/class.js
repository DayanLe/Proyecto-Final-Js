// Clase constructora
class planInfo {
    constructor(info) {
        this.nombre = info.nombre;
    }
    assemble() {
        console.log(this.nombre)
        return ` <h3 class="py-3">Datos del envío</h3>
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">${this.nombre}</h4>
                </div>
                <div class="card-body">
                    <form id="form1">
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="col-auto">
                                    <label for="validationCustom09" class="form-label">Nombre en la tarjeta</label>
                                    <input type="text" class="form-control" id="validationCustom09" placeholder="Pepito Perez" required>
                                    <div class="invalid-feedback">
                                    Por favor ingrese nombre del titular de la tarjeta.
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <label for="validationCustom10" class="form-label">Número de tarjeta</label>
                                <input type="text" class="form-control" id="validationCustom10" >
                            </div>
                            <div class="row">
                                <div class="col mb-3">
                                    <label for="validationCustom11" class="form-label">Fecha de vencimiento</label>
                                    <input type="text" class="form-control" id="validationCustom11">
                                </div>
                                <div class="col mb-3">
                                <label for="validationCustom12" class="form-label">CVC</label>
                                <input type="text" class="form-control" id="validationCustom12">
                            </div>
                            
                    <button nombre="button" class="w-100 btn btn-lg btn-success" onclick="compraFinal()">Pagar</button>
                </div>`;
    }
}
