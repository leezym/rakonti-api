const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Usuarios = require('./usuarios');
const Generos = require('./generos');

const UsuarioGenero = sequelize.define('UsuarioGenero', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Usuarios,
            key: 'id_usuario'
        }
    },
    id_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Generos,
            key: 'id_genero'
        }
    }
}, {
    tableName: 'usuario_generos',
    timestamps: false
});

Usuarios.belongsToMany(Generos, { through: UsuarioGenero, foreignKey: 'id_usuario' });
Generos.belongsToMany(Usuarios, { through: UsuarioGenero, foreignKey: 'id_genero' });

module.exports = UsuarioGenero;