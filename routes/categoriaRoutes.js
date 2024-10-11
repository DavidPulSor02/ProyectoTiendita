
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/categoria', categoriaController.getAllCategoria);
router.get('/categoria/:id', categoriaController.getById);
router.post('/categoria', categoriaController.create);
router.put('/categoria/:id', categoriaController.update);
router.delete('/categoria/:id', categoriaController.delete);

module.exports = router;
