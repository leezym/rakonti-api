const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Personaje_Roles = sequelize.define('Personaje_Roles', {
    id_personaje: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'personaje_roles',
    timestamps: false
});

module.exports = Personaje_Roles;