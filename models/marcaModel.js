const pool = require('../config/config');

class marcaModel {
    static async findAll() {
        const result = await pool.query('SELECT * FROM MARCAS');
        return result.rows;
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM MARCAS WHERE id= $1', [id]);
        return result.rows[0];
    }

    static async create(data) {
        const { nombre_marca, contacto, correo } = data;
        const result = await pool.query(
            'INSERT INTO MARCAS (nombre_marca,contacto,correo) VALUES ($1, $2, $3) RETURNING *',
            [nombre_marca, contacto, correo]
        );
        return result.rows[0];
    }

    static async update(id_marca, data) {
        const { nombre_marca, contacto, correo } = data;
        const result = await pool.query(
            'UPDATE MARCAS SET nombre_marca = $1,contacto= $2 ,correo =$3, update_at = CURRENT_TIMESTAMP, delete_at = NULL WHERE id = $4 RETURNING *',
            [nombre_marca, contacto, correo, id_marca]
        );
        return result.rows[0];
    }


    static async delete(id) {
        const result = await pool.query(' UPDATE MARCAS SET delete_at = NOW() WHERE id = $1 AND delete_at IS NULL RETURNING *', [id]);
        return result.rows[0];
    }
}
module.exports = marcaModel;
