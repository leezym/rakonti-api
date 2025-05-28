const express = require('express');
const router = express.Router();
const controller = require('../controllers/tiempo_espacio');

router.get('/', controller.getAllTiempos);
router.get('/:id', controller.getTiempoById);
router.post('/', controller.createTiempo);
router.put('/:id', controller.updateTiempo);
router.delete('/:id', controller.deleteTiempo);

module.exports = router;