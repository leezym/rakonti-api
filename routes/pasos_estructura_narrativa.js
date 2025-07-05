const express = require('express');
const router = express.Router();
const controller = require('../controllers/pasos_estructura_narrativa');

router.get('/', controller.getAllPasos);
router.get('/:id', controller.getPasoById);
router.post('/', controller.createPaso);
router.put('/:id', controller.updatePaso);
router.delete('/:id', controller.deletePaso);
router.get('/estructura/:id_estructura', controller.getPasosByEstructura);

module.exports = router;