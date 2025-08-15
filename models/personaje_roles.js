const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Personajes = require('./personajes');
const Roles = require('./roles');

const PersonajeRol = sequelize.define('PersonajeRol', {
    id_personaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Personajes,
            key: 'id_personaje'
        }
    },
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Roles,
            key: 'id_rol'
        }
    }
}, {
    tableName: 'personaje_roles',
    timestamps: false
});

Personajes.belongsToMany(Roles, { through: PersonajeRol, as: 'roles', foreignKey: 'id_personaje' });
Roles.belongsToMany(Personajes, { through: PersonajeRol, as: 'personajes', foreignKey: 'id_rol' });

module.exports = PersonajeRol;