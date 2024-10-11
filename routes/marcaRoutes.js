const express = require('express');
const MarcaController = require('../controllers/marcaController'); // Importa el controlador
const router = express.Router();

router.get('/marcas', MarcaController.getAllMarca);
router.get('/marcas/:id', MarcaController.getMarcaById);
router.post('/marcas', MarcaController.createMarcaadd);
router.put('/marcas/:id', MarcaController.updateMarca);
router.delete('/marcas/:id', MarcaController.deleteMarca);

module.exports = router;