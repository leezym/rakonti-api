const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Estructuras_Narrativas = sequelize.define('Estructuras_Narrativas', {
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
    escritor: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    hitos_nombre:{
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
    },
    hitos_cantidad:{
        type: DataTypes.JSON,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'estructuras_narrativas',
    timestamps: false
});

module.exports = Estructuras_Narrativas;