const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Usuarios = sequelize.define('Usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM('Femenino', 'Masculino', 'No binario', 'Trangénero', 'Transexual', 'Queer'),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    experiencia: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuarios;