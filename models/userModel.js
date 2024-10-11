const pool = require('../config/config');

class User {
  static async findAll() {
    const result = await pool.query('SELECT * FROM USUARIOS');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM USUARIOS WHERE id= $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const { nom_usuario, correo, password } = data;
    const result = await pool.query(
      'INSERT INTO USUARIOS (nom_usuario, correo, password) VALUES ($1, $2, $3) RETURNING *',
      [nom_usuario, correo, password]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const { nom_usuario, correo, password } = data;
    const result = await pool.query(
      'UPDATE USUARIOS SET nom_usuario = $1, correo = $2, password = $3, update_at = CURRENT_TIMESTAMP, delete_at = NULL WHERE id = $4 RETURNING *',
      [nom_usuario, correo, password, id]
    );
    return result.rows[0];
  }


  static async delete(id) {
    const result = await pool.query(' UPDATE USUARIOS SET delete_at = NOW() WHERE id = $1 AND delete_at IS NULL RETURNING *', [id]);
    return result.rows[0];
  }
}
module.exports = User;
