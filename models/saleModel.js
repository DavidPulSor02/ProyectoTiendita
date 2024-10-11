const pool = require('../config/config');

class SaleModel {


    // Obtener los detalles de una venta por el ID de la venta
    static async getSaleDetailsBySaleId(saleId) {
        const { rows } = await pool.query('SELECT * FROM sales WHERE sale_id = $1', [saleId]);
        return rows;
    };
    //consultar todo 
    static async getfindAll() {
        const { rows } = await pool.query('SELECT * FROM sales');
        return rows;
    };

    // Crear un nuevo detalle de venta
    static async createSale(data) {
        const { date, nombre_producto, cantidad, precio } = data;
        const result = await pool.query(
            'INSERT INTO sales (date, nombre_producto, cantidad, precio) VALUES ($1, $2, $3, $4) RETURNING *',
            [date, nombre_producto, cantidad, precio]
        );
        return result.rows[0];
    };

    static async updateSales(id, data) {
        const { date, nombre_producto, cantidad, precio } = data;
        const result = await pool.query(
            'UPDATE sales SET date = $1, nombre_producto = $2, cantidad = $3,precio = $4 , update_at = CURRENT_TIMESTAMP, delete_at = NULL WHERE id = $5 RETURNING *',
            [date, nombre_producto, cantidad, precio, id]
        );
        return result.rows[0];
    };



    // Consultar todas las ventas
    static async getSales() {
        const { rows } = await pool.query('SELECT * FROM sales');
        return rows;
    };

    // Obtener una venta por ID
    static async getSaleById(id) {
        const { rows } = await pool.query('SELECT * FROM sales WHERE id = $1', [id]);
        return rows[0];
    };


    // Actualizar una venta




    // Eliminar una venta
    static async delete(id) {
        const result = await pool.query(' UPDATE sales SET delete_at = NOW() WHERE id = $1 AND delete_at IS NULL RETURNING *', [id]);
        return result.rows[0];
    }
}
module.exports = SaleModel;