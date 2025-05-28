const express = require('express');
const router = express.Router();
const controller = require('../controllers/personajes');

router.get('/', controller.getAllPersonajes);
router.get('/:id', controller.getPersonajeById);
router.post('/', controller.createPersonaje);
router.put('/:id', controller.updatePersonaje);
router.delete('/:id', controller.deletePersonaje);
router.get('/:id_historia', controller.getPersonajesByHistoria);

module.exports = router;