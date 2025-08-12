const express = require('express');
const router = express.Router();
const controller = require('../controllers/pasos_estructura_narrativa_historia');

router.get('/', controller.getAllPasos);
router.get('/:id', controller.getPasoById);
router.post('/', controller.createPaso);
router.put('/:id', controller.updatePaso);
router.delete('/:id', controller.deletePaso);
router.get('/historia/:id_historia', controller.getPasosByHistoria);

module.exports = router;