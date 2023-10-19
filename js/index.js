


const productos = [
    { id: "1", tipo: "Conjunto Anitta", precio: 80000 },
    { id: "2", tipo: "Conjunto Alicia", precio: 60000 },
    { id: "3", tipo: "Short Twerk", precio: 45000 },
    { id: "4", tipo: "Heels Beige", precio: 380000 },
    { id: "5", tipo: "Heels Basicos", precio: 150000 },
    { id: "6", tipo: "Heels Bota", precio: 560000 },
    { id: "7", tipo: "Kit Pole Dance", precio: 890000 },
    { id: "8", tipo: "Medias Nude", precio: 30000 },
    { id: "9", tipo: "Rodilleras", precio: 45000 }
];

const carrito = [];


function agregarAlCarrito(id) {
    // Encuentra el producto correspondiente en el array de productos
    const producto = productos[id];

    // Agrega el producto al carrito
    carrito.push(producto);

    // Actualiza la lista de productos en el aside
    actualizarCarrito();

    Toastify({
        text: `Producto "${producto.tipo}" agregado con éxito.`,
        duration: 3000,  // Duración de la notificación en milisegundos
        position: "left",
        close: true,
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)', // Color de fondo
    }).showToast();
}



// Actualiza la lista de productos en el aside
function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total");
    listaCarrito.innerHTML = ""; // Borra los elementos previos

    let total = 0;

    // Recorre los productos en el carrito y crea elementos de lista para cada uno
    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `${producto.tipo} - $${producto.precio}`;
        listaCarrito.appendChild(li);

        total += producto.precio;
    });

    // Actualiza el total del carrito
    totalCarrito.textContent = total;
}

// boton eliminar Todo
function eliminarTodo() {
    carrito.length = 0;
    actualizarCarrito();
}

// btn Eliminar anterior
function eliminarAnterior() {
    carrito.pop();
    actualizarCarrito();
}

//boton pagar
function pagar() {
    const listaCarrito = document.getElementById('lista-carrito').innerText;
    const total = document.getElementById('total').innerText;
    const datosCodificados = encodeURIComponent(listaCarrito + '|' + total);

    // Redirige al usuario a la página de destino con los datos en la URL
    window.location.href = "pagarPedido.html?datos=" + datosCodificados;
}




//Uso de liberias 




const iconoCarrito = document.getElementById("icono-carrito");
const contenedorCarrito = document.getElementById("carrito");
const asideBar = document.getElementById('aside-bar');
const cerrarAsideBtn = document.getElementById('cerrarAsideBtn');

// Función para abrir el aside bar
iconoCarrito.addEventListener('click', () => {
    asideBar.style.display = (asideBar.style.display === "block") ? "none" : "block";
    asideBar.style.width = '250px';
    asideBar.style.right = '0';
});

// Función para cerrar el aside bar
function cerrarAside() {
    asideBar.style.width = '0';
    asideBar.style.right = '-250px';
}

// Evento para cerrar el aside bar al hacer clic en el botón "Seguir Comprando"
function seguirComprando() {
    cerrarAside();
    // Aquí puedes realizar otras acciones cuando el usuario desea seguir comprando.
}


//?Boton Agendar

function redirect() {
    window.location.href = "https://calendly.com/dayanlenisc/polesport";
}

//?Efecto parallax 

let bailarina1 = document.getElementById("bailarina1");
let bailarina2 = document.getElementById("bailarina2");
let bailarina3 = document.getElementById("bailarina3");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    bailarina1.style.right = value * 0.5 + "px";
    bailarina2.style.right = value * 0.5 + 'px';
    bailarina3.style.right = value * 0.5 + 'px';

});

