const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Ruta para recibir datos del formulario
app.post('/guardar-datos', (req, res) => {
    //Primero, podemos acceder a los datos del formulario desde el objeto req.body
    const nombre = req.body.validationCustom01; 
    const apellido = req.body.validationCustom02;
    const telefono = req.body.validationCustom03;
    const direccion = req.body.validationCustom04;
    const ciudad = req.body.validationCustom05;
    const email = req.body.validationCustom06;
    const nombreTarjeta = req.body.validationCustom09;
    const numeroTarjeta = req.body.validationCustom10;
    const fechaVencimiento = req.body.validationCustom11;
    const cvc = req.body.validationCustom12;
  

  // Respuesta de ejemplo
  res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor intermedio en funcionamiento en http://localhost:${port}`);
});




console.log('Iniciando el servidor en el puerto ' + port);


