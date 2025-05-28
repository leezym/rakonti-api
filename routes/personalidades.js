const express = require('express');
const router = express.Router();
const controller = require('../controllers/personalidades');

router.get('/', controller.getAllPersonalidades);
router.get('/:id', controller.getPersonalidadById);
router.post('/', controller.createPersonalidad);
router.put('/:id', controller.updatePersonalidad);
router.delete('/:id', controller.deletePersonalidad);

module.exports = router;