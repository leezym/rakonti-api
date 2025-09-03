const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const EstructurasNarrativas = require('./estructuras_narrativas');
const PasoEstructuraNarrativa = require('./pasos_estructura_narrativa');

const Tips_Consejos = sequelize.define('Tips_Consejos', {
    id_tip: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_estructura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: EstructurasNarrativas,
            key: 'id_estructura'
        }
    },
    id_paso_estructura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PasoEstructuraNarrativa,
            key: 'id_paso_estructura'
        }
    }
}, {
    tableName: 'tips_consejos',
    timestamps: false
});

module.exports = Tips_Consejos;