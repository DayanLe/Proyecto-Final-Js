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

   // Registra la actividad del usuario en localStorage
   registrarActividadEnLocalStorage(producto);

  Toastify({
    text: `Producto "${producto.tipo}" agregado con éxito.`,
    duration: 3000,  // Duración de la notificación en milisegundos
    position: "left",
    close: true,
    backgroundColor: 'llinear-gradient(to left, b2b2ff, blue)', // Color de fondo
  }).showToast();
}

// Registra la actividad del usuario en localStorage
function registrarActividadEnLocalStorage(producto) {
  // Recupera el historial de actividad del usuario (si existe)
  let actividadAnterior = JSON.parse(localStorage.getItem('historialActividad')) || [];

  // Registra la actividad actual del usuario
  const nuevaActividad = {
    producto: producto.tipo,
    fecha: new Date().toLocaleString(),
  };

  // Agrega la nueva actividad al historial
  actividadAnterior.push(nuevaActividad);

  // Almacena el historial de actividad actualizado en localStorage
  localStorage.setItem('historialActividad', JSON.stringify(actividadAnterior));
}

// Obtener y mostrar el historial de actividad del usuario
function mostrarHistorialActividad() {
  const historialActividad = JSON.parse(localStorage.getItem('historialActividad'));
  if (historialActividad && historialActividad.length > 0) {
    historialActividad.forEach((actividad, index) => {
      console.log(`Actividad #${index + 1}:`);
      console.log(`Producto: ${actividad.producto}`);
      console.log(`Fecha: ${actividad.fecha}`);
      console.log("------");
      // Puedes mostrar esta información en tu página web como desees
    });
  } else {
    console.log("No hay actividad registrada en el historial.");
  }
}

// Llama a esta función cuando quieras mostrar el historial de actividad
mostrarHistorialActividad();


// Actualiza la lista de productos en el aside
function actualizarCarrito() {
  const tablaCarrito = document.getElementById("tabla-carrito");
  const totalCarrito = document.getElementById("total");
  tablaCarrito.innerHTML = ""; // Borra las filas previas

  let total = 0;

  // Recorre los productos en el carrito y crea filas de tabla para cada uno
  carrito.forEach((producto, index) => {
    const fila = tablaCarrito.insertRow(); // Crea una nueva fila

    // Crea celdas para el número de producto, tipo y precio
    const celdaNumero = fila.insertCell(0);
    const celdaTipo = fila.insertCell(1);
    const celdaPrecio = fila.insertCell(2);
    const celdaEliminar = fila.insertCell(3);

    celdaNumero.textContent = index + 1; // Número de producto
    celdaTipo.textContent = producto.tipo; // Tipo de producto
    celdaPrecio.textContent = `$${producto.precio}`; // Precio del producto

    // Crea el botón de eliminar y agrega un evento para eliminar el producto
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "btn btn-danger"; // Puedes personalizar las clases según tu estilo
    botonEliminar.addEventListener("click", () => {
      eliminarProductoDelCarrito(index);
      
        Toastify({
          text: `Producto "${producto.tipo}" eliminado.`,
          duration: 3000,  // Duración de la notificación en milisegundos
          position: "left",
          close: true,
          backgroundColor: 'llinear-gradient(to left, b2b2ff, blue)', // Color de fondo
        }).showToast();
      
    });

    celdaEliminar.appendChild(botonEliminar);

    total += producto.precio;
  });

  // Actualiza el total del carrito
  totalCarrito.textContent = total;
}

// Función para eliminar un producto del carrito
function eliminarProductoDelCarrito(index) {
  const productoEliminado = carrito[index];
  carrito.splice(index, 1); // Elimina el producto del carrito

  // Actualiza la lista de productos en el aside
  actualizarCarrito();

   // Elimina el producto del historial de actividad en localStorage
   eliminarActividadDelLocalStorage(productoEliminado);
}

// Elimina el producto del historial de actividad en localStorage
function eliminarActividadDelLocalStorage(producto) {
  // Recupera el historial de actividad del usuario (si existe)
  let actividadAnterior = JSON.parse(localStorage.getItem('historialActividad')) || [];

  // Encuentra y elimina la actividad relacionada con el producto eliminado
  actividadAnterior = actividadAnterior.filter((actividad) => actividad.producto !== producto.tipo);

  // Almacena el historial de actividad actualizado en localStorage
  localStorage.setItem('historialActividad', JSON.stringify(actividadAnterior));
}


// boton eliminar Todo
function eliminarTodo() {
  if (carrito.length > 0) {
    carrito.length = 0;

    actualizarCarrito();

    Toastify({
      text: "Productos eliminados",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      style: {
        background: "linear-gradient(to left, b2b2ff, blue)",
      },
      onClick: function () { }
    }).showToast();
  }
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
  asideBar.style.width = '100%';
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

//* Boton Agendar

function redirect() {
  window.location.href = "https://calendly.com/dayanlenisc/polesport";
}


const lista = document.getElementById("clima")

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


  const options = {method: 'GET'};

  fetch('https://api.weatherapi.com/v1/current.json?key=299f4b051c4a4840bb513716230311&q=Colombia&aqi=no', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
