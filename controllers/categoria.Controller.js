const Categoria = require('../models/categoriaModel');

const categoriaController = {
    getAll: async (req, res) => {
        try {
            const categorias = await Categoria.getAll();
            res.status(200).json(categorias);
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener las categorías' });
        }
    },

    getById: async (req, res) => {
        try {
            const categoria = await Categoria.getById(req.params.id);
            if (!categoria) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.status(200).json(categoria);
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener la categoría' });
        }
    },

    create: async (req, res) => {
        try {
            const { Nom_Categoria } = req.body;
            const nuevaCategoria = await Categoria.create(Nom_Categoria);
            res.status(201).json(nuevaCategoria);
        } catch (err) {
            res.status(500).json({ error: 'Error al crear la categoría' });
        }
    },

    update: async (req, res) => {
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
    },

    delete: async (req, res) => {
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
