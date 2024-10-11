const marcaModel = require('../models/marcaModel');


class marcaController {
    static async getAllMarca(req, res) {
        try {
            const marca = await marcaModel.findAll();
            res.json(marca);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createMarcaadd(req, res) {
        try {
            const { nombre_marca, contacto, correo } = req.body;
            const marca = await marcaModel.create({ nombre_marca, contacto, correo });
            res.status(201).json({ data: marca, message: 'marca actualizada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getMarcaById(req, res) {
        try {
            const marca = await marcaModel.findById(req.params.id);
            if (!marca) {
                return res.status(404).json({ message: "Marca no encontrado" });
            }
            return res.json({ message: 'Marca actualizada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateMarca(req, res) {
        try {
            const marca = await marcaModel.update(req.params.id, req.body);
            if (!marca) {
                return res.status(404).json({ data: marca, message: 'Marca no encontrada' });
            }
            res.json({ message: 'Marca actualizada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteMarca(req, res) {
        try {
            const result = await marcaModel.delete(req.params.id);
            res.json({ message: 'Marca elimina correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = marcaController;

