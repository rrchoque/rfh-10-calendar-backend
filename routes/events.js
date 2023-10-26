/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();


// Obtener eventos 
router.get('/', getEventos );

// Crear un nuevo evento
router.post('/', crearEvento );

// Actualizar Evento
router.put('/:id', actualizarEvento );

// Borrar evento
router.delete('/:id', eliminarEvento );

module.exports = router;