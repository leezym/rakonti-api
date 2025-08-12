const express = require('express');
const router = express.Router();
const controller = require('../controllers/personaje_roles');

router.get('/', controller.getAllPersonajeRoles);
router.get('/:id_personaje/:id_genero', controller.getPersonajeRolById);
router.get('/:id_personaje', controller.getAllRolesByPersonaje);
router.post('/', controller.createPersonajeRol);
router.put('/:id_personaje/:id_rol', controller.updatePersonajeRol);
router.delete('/:id_personaje/:id_rol', controller.deletePersonajeRol);

module.exports = router;