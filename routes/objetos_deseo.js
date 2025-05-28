const express = require('express');
const router = express.Router();
const controller = require('../controllers/objetos_deseo');

router.get('/', controller.getAllObjetos);
router.get('/:id', controller.getObjetoById);
router.post('/', controller.createObjeto);
router.put('/:id', controller.updateObjeto);
router.delete('/:id', controller.deleteObjeto);

module.exports = router;