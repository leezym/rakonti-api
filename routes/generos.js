const express = require('express');
const router = express.Router();
const controller = require('../controllers/generos');

router.get('/', controller.getAllGeneros);
router.get('/:id', controller.getGeneroById);
router.post('/', controller.createGenero);
router.put('/:id', controller.updateGenero);
router.delete('/:id', controller.deleteGenero);

module.exports = router;