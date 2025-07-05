const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Usuarios = require('./usuarios');
const Generos = require('./generos');
const Tramas = require('./tramas');
const ObjetosDeseo = require('./objetos_deseo');
const TiempoEspacio = require('./tiempo_espacio');
const EstructurasNarrativas = require('./estructuras_narrativas');

const Historia = sequelize.define('Historia', {
    id_historia: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuarios,
            key: 'id_usuario'
        }
    },
    titulo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Generos,
            key: 'id_genero'
        }
    },
    id_trama: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tramas,
            key: 'id_trama'
        }
    },
    id_objeto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ObjetosDeseo,
            key: 'id_objeto'
        }
    },
    id_tiempo_espacio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TiempoEspacio,
            key: 'id_tiempo_espacio'
        }
    },
    id_estructura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: EstructurasNarrativas,
            key: 'id_estructura'
        }
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_edicion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    paso_actual: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'historias',
    timestamps: false
});

module.exports = Historia;