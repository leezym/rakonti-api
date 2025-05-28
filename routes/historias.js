const express = require('express');
const router = express.Router();
const controller = require('../controllers/historias');

router.get('/', controller.getAllHistorias);
router.get('/:id', controller.getHistoriaById);
router.post('/', controller.createHistoria);
router.put('/:id', controller.updateHistoria);
router.delete('/:id', controller.deleteHistoria);
router.get('/:id_usuario', controller.getHistoriasByUsuario)

module.exports = router;