const pool = require('../config/config'); // Conexión a la base de datos

class Empleado {
    static async findAll() {
        const result = await pool.query('SELECT * FROM EMPLEADOS');
        return result.rows;
    }

    static async create({ nombre, nss, telefono, fecha_nac, id, apellidop, apellidom }) {
        const result = await pool.query(
            'INSERT INTO EMPLEADOS (nombre, nss, telefono, fecha_nac, id, apellidom, apellidop) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [nombre, nss, telefono, fecha_nac, id, apellidop, apellidom]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM EMPLEADOS WHERE idEmpleado = $1', [id]);
        return result.rows[0];
    }

    static async update(id_empleado, data) {
        const { nombre, nss, telefono, fecha_nac, id, apellidop, apellidom } = data;
        const result = await pool.query(
            'UPDATE EMPLEADOS SET nombre= $1, nss = $2, telefono = $3, fecha_nac = $4,id = $5, apellidom =$6, apellidop = $7, update_at = CURRENT_TIMESTAMP, delete_at = NULL  WHERE id_empleado = $8  RETURNING *',
            [nombre, nss, telefono, fecha_nac, id, apellidop, apellidom, id_empleado]
        );
        return result.rows[0];
    }

    static async delete(id_empleado) {
        const result = await pool.query(' UPDATE EMPLEADOS SET delete_at = NOW() WHERE id = $1 AND delete_at IS NULL RETURNING *', [id_empleado]);
        return result.rows[0];
    }
}

module.exports = Empleado;
