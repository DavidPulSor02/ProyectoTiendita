const Empleado = require('../models/empleado');

// Obtener todos los empleados
exports.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
};

// Obtener un empleado por ID
exports.getEmpleadoById = async (req, res) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findByPk(id);
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el empleado' });
    }
};

// Crear un nuevo empleado
exports.createEmpleado = async (req, res) => {
    const { Nombre, ApellidoP, ApellidoM, Fecha_nac, Telefono, Nss, Id_Usuario } = req.body;
    try {
        const nuevoEmpleado = await Empleado.create({
            Nombre,
            ApellidoP,
            ApellidoM,
            Fecha_nac,
            Telefono,
            Nss,
            Id_Usuario
        });
        res.status(201).json(nuevoEmpleado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el empleado' });
    }
};

// Actualizar empleado
exports.updateEmpleado = async (req, res) => {
    const { id } = req.params;
    const { Nombre, ApellidoP, ApellidoM, Fecha_nac, Telefono, Nss, Id_Usuario } = req.body;
    try {
        const empleado = await Empleado.findByPk(id);
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        empleado.Nombre = Nombre;
        empleado.ApellidoP = ApellidoP;
        empleado.ApellidoM = ApellidoM;
        empleado.Fecha_nac = Fecha_nac;
        empleado.Telefono = Telefono;
        empleado.Nss = Nss;
        empleado.Id_Usuario = Id_Usuario;

        await empleado.save();
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
};

// Eliminar empleado
exports.deleteEmpleado = async (req, res) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findByPk(id);
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        await empleado.destroy();
        res.status(200).json({ message: 'Empleado eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el empleado' });
    }
};
