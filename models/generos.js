const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Generos = sequelize.define('Generos', {
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
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'generos',
    timestamps: false
});

module.exports = Generos;