const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Personalidades = sequelize.define('Personalidades', {
    id_personalidad: {
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
    }
}, {
    tableName: 'personalidades',
    timestamps: false
});

module.exports = Personalidades;