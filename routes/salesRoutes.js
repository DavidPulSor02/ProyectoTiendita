const express = require('express');
const salesController = require('../controllers/salesController');
const router = express.Router();

router.get('/ventas', salesController.getAllSales);
router.get('/ventas/:id', salesController.getSale);
router.post('/ventas', salesController.createSale);
router.put('/ventas/:id', salesController.update);
router.delete('/ventas/:id', salesController.deletedSale);

router.get('/detalleventas', salesController.getAllSales);
router.get('/detalleventas/:id', salesController.getSale);
router.post('/detalleventas', salesController.createSale);
router.put('/detalleventas/:id', salesController.update);
router.delete('/detalleventas/:id', salesController.deletedSale);



module.exports = router;    
