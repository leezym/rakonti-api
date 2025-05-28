const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarios');
//const { verificarToken } = require('../middleware/auth');

router.get('/', controller.getAllUsuarios);
router.get('/:id', controller.getUsuarioById);
router.post('/', controller.createUsuario);
router.put('/:id', controller.updateUsuario);
router.delete('/:id', controller.deleteUsuario);
router.post('/registro', controller.registrarUsuario);
router.post('/login', controller.iniciarSesion);
/*router.put('/actualizar-contrasena', verificarToken, controller.actualizarContraseña);
router.post('/recuperar-contrasena', controller.enviarEnlaceRecuperacion);
router.post('/restablecer-contrasena', controller.restablecerContraseña);*/

module.exports = router;