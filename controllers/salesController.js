const saleModel = require('../models/saleModel');
const saleDetailsModel = require('../models/saleDetailsModel');

class sales {
    static async getAllSales(req, res) {
        try {
            const sales = await saleModel.getfindAll();
            res.status(200).json(sales);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener ventas' });
        }
    };

    // Obtener una venta por ID
    static async getSale(req, res) {
        try {
            const sale = await saleModel.getSaleById(req.params.id);
            if (!sale) {
                return res.status(404).json({ error: 'Venta no encontrada' });
            }
            res.status(200).json(sale);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener la venta' });
        }
    };

    // Crear una nueva venta
    static async createSale(req, res) {
        try {
            const { date, nombre_producto, cantidad, precio } = req.body;
            const sale = await saleModel.createSale({ date, nombre_producto, cantidad, precio });
            res.status(201).json({ data: sale, message: 'venta creada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar una venta
    static async update(req, res) {
        try {
            const sale = await saleModel.updateSales(req.params.id, req.body);
            if (!sale) {
                return res.status(404).json({ data: user, message: 'venta no encontrado' });
            }
            res.json({ message: 'venta actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Eliminar una venta
    static async deletedSale(req, res) {
        try {
            // Intentar eliminar la venta
            const deletedSale = await saleModel.delete(req.params.id);

            // Verificar si la venta fue encontrada y eliminada
            if (!deletedSale) {
                // Enviar respuesta 404 si no se encuentra la venta
                return res.status(404).json({ error: 'Venta no encontrada' });
            }

            // Si la venta fue eliminada correctamente, enviar respuesta 204 (No Content)
            return res.status(204).send();  // Enviar solo una respuesta y detener el flujo
        } catch (error) {
            // Enviar solo una respuesta de error
            return res.status(500).json({ error: 'Error al eliminar la venta' });
        }
    }


}
module.exports = sales;
