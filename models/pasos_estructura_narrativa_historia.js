const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Historias = require('./historias');
const PasosEstructuraNarrativa = require('./pasos_estructura_narrativa');

const PasosEstructuraNarrativaHistoria = sequelize.define('PasosEstructuraNarrativaHistoria', {
    id_paso_historia: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_historia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Historias,
            key: 'id_historia'
        }
    },
    id_paso_estructura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PasosEstructuraNarrativa,
            key: 'id_paso_estructura'
        }
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'pasos_estructura_narrativa_historia',
    timestamps: false
});

module.exports = PasosEstructuraNarrativaHistoria;