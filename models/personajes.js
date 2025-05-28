const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Historias = require('./historias');
const Personalidades = require('./personalidades');

const Personaje = sequelize.define('Personaje', {
    id_personaje: {
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
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
        allowNull: false
    },
    plan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    decision: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_personalidad: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: Personalidades,
            key: 'id_personalidad'
        }
    },
    apariencia: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    intereses: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    creencias_religiosas: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ocupacion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estatus_social: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    antecedentes: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'personajes',
    timestamps: false
});

module.exports = Personaje;