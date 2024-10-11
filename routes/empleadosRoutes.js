const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

// Obtener todos los empleados
router.get('/empleados', empleadoController.getAllEmpleados);

// Obtener un empleado por ID
router.get('/empleados/:id', empleadoController.getEmpleadoById);

// Crear un nuevo empleado
router.post('/empleados', empleadoController.createEmpleado);

// Actualizar empleado
router.put('/empleados/:id', empleadoController.updateEmpleado);

// Eliminar empleado
router.delete('/empleados/:id', empleadoController.deleteEmpleado);

module.exports = router;
