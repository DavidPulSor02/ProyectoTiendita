const Categoria = require('../models/categoriasModel');

class categoriaController {
    static async getAllCategoria(req, res) {
        try {
            const categoria = await Categoria.getAll();
            res.json({ categoria });
        }
        catch (error) {
            res.status(500).json({ error: error.message });

        }
    }
    static async getById(req, res) {
        try {
            const categoria = await Categoria.findById(req.params.id);
            if (!categoria) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.status(200).json(categoria);
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener la categoría' });
        }
    }

    static async create(req, res) {
        try {
            const { Nom_Categoria } = req.body;
            const nuevaCategoria = await Categoria.create(Nom_Categoria);
            res.status(201).json(nuevaCategoria);
        } catch (err) {
            res.status(500).json({ error: 'Error al crear la categoría' });
        }
    }

    static async update(req, res) {
        try {
            const { Nom_Categoria } = req.body;
            const categoriaActualizada = await Categoria.update(req.params.id, Nom_Categoria);
            if (!categoriaActualizada) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.status(200).json(categoriaActualizada);
        } catch (err) {
            res.status(500).json({ error: 'Error al actualizar la categoría' });
        }
    }

    static async delete(req, res) {
        try {
            const categoriaEliminada = await Categoria.delete(req.params.id);
            if (!categoriaEliminada) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.status(200).json({ message: 'Categoría eliminada con éxito' });
        } catch (err) {
            res.status(500).json({ error: 'Error al eliminar la categoría' });
        }
    }
};

module.exports = categoriaController;
