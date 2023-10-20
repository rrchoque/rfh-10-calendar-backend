const express = require('express');

// Crear el servidor de express
const app = express();

// Directorio Público
app.use( express.static('public') );

// Rutas

// TODO: CRUD: Eventos

// Escuchar peticiones
const port = 4000;
app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
});
