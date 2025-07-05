const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const TiempoEspacio = sequelize.define('TiempoEspacio', {
    id_tiempo_espacio: {
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
    tableName: 'tiempo_espacio',
    timestamps: false
});

module.exports = TiempoEspacio;