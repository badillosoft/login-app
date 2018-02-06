const http = require("http");
const express = require("express"); // npm install express

// Creamos una instancia de servidor
const app = express();

// Definimos una ruta (el recurso /)
app.get("/", (req, res) => {
    // req - Request mantiene la información de la petición
    // res - Response configura la respuesta al cliente
    res.send("Hola mundo");
});

// Montar el servidor con http en el puerto 3000
http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});