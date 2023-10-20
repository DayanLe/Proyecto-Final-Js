


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
    backgroundColor: 'llinear-gradient(to left, b2b2ff, blue)', // Color de fondo
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
  Toastify({
    text: "Productos eliminados",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to left, b2b2ff, blue)",
      borderRadius: "15px",

    },
    onClick: function () { } // Callback after click
  }).showToast();
}

// btn Eliminar anterior
function eliminarAnterior() {
  carrito.pop();

  actualizarCarrito();
  Toastify({
    text: "Producto eliminado del carrito",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to left, b2b2ff, blue)",
      borderRadius: "15px",

    },
    onClick: function () { } // Callback after click
  }).showToast();
}


const pagar = document.getElementById('pagar');

pagar.addEventListener('click', function () {
  window.location.href = '../pagarPedido.html'
});



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
 
}


//?Boton Agendar

function redirect() {
  window.location.href = "https://calendly.com/dayanlenisc/polesport";
}


const lista = document.querySelector('lista-carrito')

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
      data.forEach((producto) => {
        const li = document.createElement('li')
        li.innerHTML = `
          <h4>${producto.nombre}</h4>
          <p>${producto.precio}</p>
        `
        lista.append(li)
      })
  })




