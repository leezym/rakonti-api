const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Logros = sequelize.define('Logros', {
    id_logro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'logros',
    timestamps: false
});

module.exports = Logros;