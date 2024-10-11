const User = require('../models/marcaModel');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createUseradd(req, res) {
        try {
            const { nom_usuario, correo, password } = req.body;
            const user = await User.create({ nom_usuario, correo, password });
            res.status(201).json({ data: user, message: 'usuario actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            return res.json({ message: 'usuario actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateUser(req, res) {
        try {
            const user = await User.update(req.params.id, req.body);
            if (!user) {
                return res.status(404).json({ data: user, message: 'Usuario no encontrado' });
            }
            res.json({ message: 'usuario actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const result = await User.delete(req.params.id);
            res.json({ message: 'usuairo eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;

