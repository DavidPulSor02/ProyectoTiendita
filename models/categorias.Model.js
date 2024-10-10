const pool = require('../config/config');

const Categoria = {
    getAll: async () => {
        const query = 'SELECT * FROM CATEGORIAS';
        const result = await pool.query(query);
        return result.rows;
    },

    getById: async (id) => {
        const query = 'SELECT * FROM CATEGORIAS WHERE Id_Categoria = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    create: async (nombre) => {
        const query = 'INSERT INTO CATEGORIAS (Nom_Categoria) VALUES ($1) RETURNING *';
        const result = await pool.query(query, [nombre]);
        return result.rows[0];
    },

    update: async (id, nombre) => {
        const query = 'UPDATE CATEGORIAS SET Nom_Categoria = $1 WHERE Id_Categoria = $2 RETURNING *';
        const result = await pool.query(query, [nombre, id]);
        return result.rows[0];
    },

    delete: async (id) => {
        const query = 'DELETE FROM CATEGORIAS WHERE Id_Categoria = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
};

module.exports = Categoria;
