const express = require('express');
const router = express.Router();
const controller = require('../controllers/logros_usuarios');

router.get('/', controller.getAllLogrosUsuarios);
router.get('/:id_usuario/:id_logro', controller.getLogroUsuarioById);
router.post('/', controller.createLogroUsuario);
router.put('/:id_usuario/:id_logro', controller.updateLogroUsuario);
router.delete('/:id_usuario/:id_logro', controller.deleteLogroUsuario);

module.exports = router;