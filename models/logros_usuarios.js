const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Usuarios = require('./usuarios');
const Logros = require('./logros');

const Logros_Usuarios = sequelize.define('Logros_Usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Usuarios,
            key: 'id_usuario'
        }
    },
    id_logro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Logros,
            key: 'id_logro'
        }
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'logros_usuarios',
    timestamps: false
});

module.exports = Logros_Usuarios;