// models/productModel.js
const pool = require('../config/config');

class productModel {
    static async getAllProducts() {
        const result = await pool.query('SELECT * FROM productos');
        return result.rows;
    };

    // Obtener un producto por ID
    static async getProductById(id) {
        const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
        return result.rows[0];
    };

    // Crear un nuevo producto
    static async createProduct(product) {
        const { nombre, precio, stock_min, stock_max, existencias, sku } = product;
        const result = await pool.query(
            'INSERT INTO productos (nombre, precio, stock_min, stock_max, existencias, sku) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [nombre, precio, stock_min, stock_max, existencias, sku]
        );
        return result.rows[0];
    };

    // Actualizar un producto
    static async updateProduct(id, product) {
        const { nombre, precio, stock_min, stock_max, existencias, sku } = product;
        const result = await pool.query(
            'UPDATE productos SET nombre = $1, precio = $2, stock_min = $3, stock_max = $4, existencias = $5, sku = $6 WHERE id = $7 RETURNING *',
            [nombre, precio, stock_min, stock_max, existencias, sku, id]
        );
        return result.rows[0];
    };

    // Eliminar un producto
    static async deleteProduct(id) {
        const result = await pool.query('DELETE FROM PRODUCTOS WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    };

    // Buscar productos por cualquier campo
    static async searchProducts(query) {
        const result = await pool.query(
            `SELECT * FROM PRODUCTOS 
         WHERE nombre ILIKE $1 
         OR CAST(precio AS TEXT) ILIKE $1
         OR CAST(stock_min AS TEXT) ILIKE $1
         OR CAST(stock_max AS TEXT) ILIKE $1
         OR CAST(existencias AS TEXT) ILIKE $1
         OR sku ILIKE $1`,
            [`%${query}%`]
        );
        return result.rows;

    };
}

module.exports = productModel;
