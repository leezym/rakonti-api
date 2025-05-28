const express = require('express');
const router = express.Router();
const controller = require('../controllers/estructuras_narrativas');

router.get('/', controller.getAllEstructuras);
router.get('/:id', controller.getEstructuraById);
router.post('/', controller.createEstructura);
router.put('/:id', controller.updateEstructura);
router.delete('/:id', controller.deleteEstructura);

module.exports = router;