const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Objetos_Deseo = sequelize.define('Objetos_Deseo', {
    id_objeto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
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

module.exports = Objetos_Deseo;