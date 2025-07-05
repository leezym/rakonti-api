const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const ObjetoDeseo = sequelize.define('ObjetoDeseo', {
    id_objeto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'objetos_deseo',
    timestamps: false
});

module.exports = ObjetoDeseo;