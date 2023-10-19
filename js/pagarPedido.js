const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Lee el valor del parámetro "datos"
const datosCodificados = urlParams.get('datos');

// Decodifica los datos
const datosDecodificados = decodeURIComponent(datosCodificados);

// Separa la lista de productos y el total
const [listaCarrito, total] = datosDecodificados.split('|');
