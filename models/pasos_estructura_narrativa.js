const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const EstructurasNarrativas = require('./estructuras_narrativas');

const PasoEstructuraNarrativa = sequelize.define('PasoEstructuraNarrativa', {
    id_paso_estructura: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_estructura: {
        type: DataTypes.INTEGER,
        references: {
            model: EstructurasNarrativas,
            key: 'id_estructura'
        }
    },
    nombre_paso: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
    ,
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    tableName: 'pasos_estructura_narrativa',
    timestamps: false
});

module.exports = PasoEstructuraNarrativa;