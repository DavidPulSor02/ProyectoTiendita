const pool = require('../config/config');

class categoria {

    static async getAll() {
        const result = await pool.query('SELECT * FROM categorias');
        return result.rows;
    }


    static async findById(id) {
        const query = 'SELECT * FROM CATEGORIAS WHERE Id_Categoria = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async create(nombre) {
        const query = 'INSERT INTO CATEGORIAS (Nom_Categoria) VALUES ($1) RETURNING *';
        const result = await pool.query(query, [nombre]);
        return result.rows[0];
    }

    static async update(id, nombre) {
        const query = 'UPDATE CATEGORIAS SET Nom_Categoria = $1 , update_at = CURRENT_TIMESTAMP, delete_at = NULL WHERE Id = $2 RETURNING *';
        const result = await pool.query(query, [nombre, id]);
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query(' UPDATE CATEGORIAS SET delete_at = NOW() WHERE Id = $1 AND delete_at IS NULL RETURNING *', [id]);
        return result.rows[0];
    }
}
module.exports = categoria;
