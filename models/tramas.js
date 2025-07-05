const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Trama = sequelize.define('Trama', {
    id_trama: {
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
    imagen: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'tramas',
    timestamps: false
});

module.exports = Trama;