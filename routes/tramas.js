const express = require('express');
const router = express.Router();
const controller = require('../controllers/tramas');

router.get('/', controller.getAllTramas);
router.get('/:id', controller.getTramaById);
router.post('/', controller.createTrama);
router.put('/:id', controller.updateTrama);
router.delete('/:id', controller.deleteTrama);

module.exports = router;
