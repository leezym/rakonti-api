const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Historias = require('./historias');
const Personalidades = require('./personalidades');
const Roles = require('./roles');
const Personaje_Roles = require('./personaje_roles'); 

const Personajes = sequelize.define('Personajes', {
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
        type: DataTypes.ENUM('Femenino', 'Masculino', 'No binario', 'Trangénero', 'Transexual', 'Queer'),
        allowNull: false
    },
    plan: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    decision: {
        type: DataTypes.TEXT,
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
        allowNull: true
    },
    intereses: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    creencias: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ocupacion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    estatus_social: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    antecedentes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'personajes',
    timestamps: false
});

Personajes.belongsTo(Personalidades, { foreignKey: 'id_personalidad', as: 'personalidades' });
Personajes.belongsToMany(Roles, { 
  through: 'Personaje_Roles', 
  as: 'roles', 
  foreignKey: 'id_personaje',
  otherKey: 'id_rol'
});

module.exports = Personajes;