const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Rol = sequelize.define('Rol', {
    id_rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'roles',
    timestamps: false
});

module.exports = Rol;