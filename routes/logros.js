const express = require('express');
const router = express.Router();
const controller = require('../controllers/logros');

router.get('/', controller.getAllLogros);
router.get('/:id', controller.getLogroById);
router.post('/', controller.createLogro);
router.put('/:id', controller.updateLogro);
router.delete('/:id', controller.deleteLogro);

module.exports = router;