const express = require('express');
const router = express.Router();
const controller = require('../controllers/roles');

router.get('/', controller.getAllRoles);
router.get('/:id', controller.getRolById);
router.post('/', controller.createRol);
router.put('/:id', controller.updateRol);
router.delete('/:id', controller.deleteRol);

module.exports = router;