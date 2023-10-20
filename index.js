const express = require('express');
require('dotenv').config();

// Crear el servidor de express
const app = express();

// Directorio Público
app.use( express.static('public') );


// Rutas
app.use('/api/auth', require('./routes/auth') );

// Escuchar peticiones
const port = 4000;
app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
});
