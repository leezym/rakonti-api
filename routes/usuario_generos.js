const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario_generos');

router.get('/', controller.getAllUsuarioGeneros);
router.get('/:id_usuario/:id_genero', controller.getUsuarioGeneroById);
router.post('/', controller.createUsuarioGenero);
router.put('/:id_usuario/:id_genero', controller.updateUsuarioGenero);
router.delete('/:id_usuario/:id_genero', controller.deleteUsuarioGenero);

module.exports = router;