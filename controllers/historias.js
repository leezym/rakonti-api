const Historias = require('../models/historias');
const Estructuras_Narrativas = require('../models/estructuras_narrativas');
const Generos = require('../models/generos');
const Tramas = require('../models/tramas');
const Objetos_Deseo = require('../models/objetos_deseo');
const Tiempo_Espacio = require('../models/tiempo_espacio');
const Personajes = require('../models/personajes');
const Personalidades = require('../models/personalidades');
const Roles = require('../models/roles');
const { Op } = require('sequelize');

exports.getAllHistorias = async (req, res) => {
    try {
        const historias = await Historias.findAll();
        res.json(historias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las historias', detalle: error.message });
    }
};

exports.getHistoriaById = async (req, res) => {
    try {
        const historia = await Historias.findByPk(req.params.id);
        if (!historia) return res.status(404).json({ error: 'Historias no encontrada', detalle: error.message });
        res.json(historia);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la historia', detalle: error.message });
    }
};

exports.createHistoria = async (req, res) => {
  try {
    const { titulo, id_usuario } = req.body;

    const historiaExistente = await Historias.findOne({
        where: {
            titulo: { [Op.iLike]: titulo.trim() },
            id_usuario
        }
    });

    if (historiaExistente) {
        return res.status(409).json({ error: 'Ya tienes una historia con ese título' });
    }

    const nuevaHistoria = await Historias.create(req.body);
    res.status(201).json(nuevaHistoria);

  } catch (error) {
    res.status(400).json({ error: 'Error al crear la historia', detalle: error.message });
  }
};

exports.updateHistoria = async (req, res) => {
    try {
        const { titulo } = req.body;
        const { id } = req.params;

        const historiaExistente = await Historias.findOne({
            where: {
                titulo: { [Op.iLike]: titulo },
                id_historia: { [Op.ne]: id }
            }
        });

        if (historiaExistente) {
            return res.status(409).json({ error: 'Ya existe una historia con ese título.' });
        }

        const [updated] = await Historias.update(req.body, { where: { id_historia: id } });

        if (!updated) {
            return res.status(404).json({ error: 'Historias no encontrada' });
        }

        const updatedHistoria = await Historias.findByPk(id);
        res.status(200).json(updatedHistoria);

    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la historia', detalle: error.message });
    }
};

exports.deleteHistoria = async (req, res) => {
    try {
        const deleted = await Historias.destroy({ where: { id_historia: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Historias no encontrada', detalle: error.message });
        res.json({ message: 'Historias eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la historia', detalle: error.message });
    }
};

exports.getHistoriasByUsuario = async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const historias = await Historias.findAll({
            where: { id_usuario },
            include: [
                { model: Estructuras_Narrativas, as: 'estructuras_narrativas' },
                { model: Generos, as: 'generos' },
                { model: Tramas, as: 'tramas' },
                { model: Objetos_Deseo, as:'objetos_deseo' },
                { model: Tiempo_Espacio, as: 'tiempo_espacio' },
                {
                    model: Personajes,
                    as: 'personajes',
                    include: [
                        { model: Personalidades, as:'personalidades' },
                        { model: Roles, as:'roles', attributes: ['id_rol', 'nombre'] }
                    ]
                }
            ]
        });

        res.status(200).json(historias);
    } catch (error) {
        console.error('Error en getHistoriasByUsuario:', error); // <--- Agregar este log
        res.status(500).json({ 
            error: 'Error al obtener las historias', 
            detalle: error.message,
            stack: error.stack // opcional para desarrollo
        });
    }
};