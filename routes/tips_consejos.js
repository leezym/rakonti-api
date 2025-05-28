const express = require('express');
const router = express.Router();
const controller = require('../controllers/tips_consejos');

router.get('/', controller.getAllTips);
router.get('/:id', controller.getTipById);
router.post('/', controller.createTip);
router.put('/:id', controller.updateTip);
router.delete('/:id', controller.deleteTip);
router.get('/:id_estructura/:id_paso_estructura', controller.getTipsByEstructuraYPaso);

module.exports = router;