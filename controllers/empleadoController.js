const Empleados = require('../models/empleadoModel');

class EmpleadosController {
    static async getAllEmpleados(req, res) {
        try {
            const empleados = await Empleados.findAll();
            res.json(empleados);
        } catch (error) {
            console.error('Error al obtener empleados:', error);
            res.status(500).json({ error: error.message });
        }
    }

    static async createEmpleado(req, res) {
        try {
            const { nombre, apellidop, apellidom, fecha_nac, telefono, nss, id } = req.body;
            const empleado = await Empleados.create({ nombre, apellidop, apellidom, fecha_nac, telefono, nss, id });
            res.status(201).json({ data: empleado, message: 'Empleado creado correctamente' });
        } catch (error) {
            console.error('Error al crear empleado:', error);
            res.status(500).json({ error: error.message });
        }
    }

    static async getEmpleadoById(req, res) {
        try {
            const empleado = await Empleado.findById(req.params.id);
            if (!empleado) {
                return res.status(404).json({ message: "Empleado no encontrado" });
            }
            return res.json(empleado);
        } catch (error) {
            console.error('Error al obtener empleado por ID:', error);
            res.status(500).json({ error: error.message });
        }
    }

    static async updateEmpleado(req, res) {
        try {
            const empleado = await Empleados.update(req.params.id, req.body);
            if (!empleado) {
                return res.status(404).json({ data: empleado, message: 'Empleado no encontrado' });
            }
            res.json({ data: empleado, message: 'empleado actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar empleado:', error);
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteEmpleado(req, res) {
        try {
            const result = await Empleados.delete(req.params.id);
            res.json(result);
        } catch (error) {
            console.error('Error al eliminar empleado:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = EmpleadosController;
