const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Genero = sequelize.define('Genero', {
    id_genero: {
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
    },
    imagen: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    }
}, {
    tableName: 'generos',
    timestamps: false
});

module.exports = Genero;