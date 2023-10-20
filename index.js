const express = require('express');

// Crear el servidor de express
const app = express();

// Rutas
app.use('/', (req, res) => {
    console.log('se requiere el /')
    res.json({
        ok: true
    })
});
// TODO: CRUD: Eventos

// Escuchar peticiones
const port = 4000;
app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
});
