const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const EstructurasNarrativas = sequelize.define('EstructurasNarrativas', {
    id_estructura: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    resumen: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    imagen_background: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'estructuras_narrativas',
    timestamps: false
});

module.exports = EstructurasNarrativas;