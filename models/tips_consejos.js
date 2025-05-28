const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const EstructurasNarrativas = require('./estructuras_narrativas');
const PasoEstructuraNarrativa = require('./pasos_estructura_narrativa');

const TipsConsejos = sequelize.define('TipsConsejos', {
    id_tip: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
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

module.exports = TipsConsejos;