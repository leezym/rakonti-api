const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Usuarios = require('./usuarios');
const Estructuras_Narrativas = require('./estructuras_narrativas');
const Generos = require('./generos');
const Tramas = require('./tramas');
const Objetos_Deseo = require('./objetos_deseo');
const Tiempo_Espacio = require('./tiempo_espacio');
const Personajes = require('./personajes');

const Historias = sequelize.define('Historias', {
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
            model: Objetos_Deseo,
            key: 'id_objeto'
        }
    },
    id_tiempo_espacio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tiempo_Espacio,
            key: 'id_tiempo_espacio'
        }
    },
    id_estructura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Estructuras_Narrativas,
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

//Historias.hasMany(require('./personajes'), { foreignKey: 'id_historia', as: 'personajes' });
Historias.hasMany(Personajes, { foreignKey: 'id_historia', as: 'personajes' });

Historias.belongsTo(Usuarios, { foreignKey: 'id_usuario', as: 'usuario' });
Historias.belongsTo(Generos, { foreignKey: 'id_genero', as: 'generos' });
Historias.belongsTo(Tramas, { foreignKey: 'id_trama', as: 'tramas' });
Historias.belongsTo(Objetos_Deseo, { foreignKey: 'id_objeto', as: 'objetos_deseo' });
Historias.belongsTo(Tiempo_Espacio, { foreignKey: 'id_tiempo_espacio', as: 'tiempo_espacio' });
Historias.belongsTo(Estructuras_Narrativas, { foreignKey: 'id_estructura', as: 'estructuras_narrativas' });

module.exports = Historias;