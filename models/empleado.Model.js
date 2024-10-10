const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Conexión a la base de datos

const Empleado = sequelize.define('Empleado', {
    Id_Empleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    ApellidoP: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    ApellidoM: {
        type: DataTypes.STRING(20),
    },
    Fecha_nac: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    Telefono: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    Nss: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
    },
    Id_Usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuarios', // El nombre del modelo de usuarios
            key: 'Id_Usuario',
        },
    },
}, {
    timestamps: false, // Si no quieres usar timestamps (createdAt, updatedAt)
    tableName: 'EMPLEADOS',
});

module.exports = Empleado;
