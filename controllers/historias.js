const Historia = require('../models/historias');
const { Op } = require('sequelize');

exports.getAllHistorias = async (req, res) => {
    try {
        const historias = await Historia.findAll();
        res.json(historias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las historias', detalle: error.message });
    }
};

exports.getHistoriaById = async (req, res) => {
    try {
        const historia = await Historia.findByPk(req.params.id);
        if (!historia) return res.status(404).json({ error: 'Historia no encontrada', detalle: error.message });
        res.json(historia);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la historia', detalle: error.message });
    }
};

exports.createHistoria = async (req, res) => {
  try {
    const { titulo } = req.body;

    const historiaExistente = await Historia.findOne({
        where: {
            titulo: {
                [Op.iLike]: titulo.trim()
            }
        }
    });

    if (historiaExistente) {
        return res.status(409).json({ error: 'Ya existe una historia con ese título' });
    }

    const nuevaHistoria = await Historia.create(req.body);
    res.status(201).json(nuevaHistoria);

  } catch (error) {
    res.status(400).json({ error: 'Error al crear la historia', detalle: error.message });
  }
};

exports.updateHistoria = async (req, res) => {
    try {
        const { titulo } = req.body;
        const { id } = req.params;

        const historiaExistente = await Historia.findOne({
            where: {
                titulo: { [Op.iLike]: titulo },
                id_historia: { [Op.ne]: id }
            }
        });

        if (historiaExistente) {
            return res.status(409).json({ error: 'Ya existe una historia con ese título.' });
        }

        const [updated] = await Historia.update(req.body, { where: { id_historia: id } });

        if (!updated) {
            return res.status(404).json({ error: 'Historia no encontrada' });
        }

        const updatedHistoria = await Historia.findByPk(id);
        res.status(200).json(updatedHistoria);

    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la historia', detalle: error.message });
    }
};

exports.deleteHistoria = async (req, res) => {
    try {
        const deleted = await Historia.destroy({ where: { id_historia: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Historia no encontrada', detalle: error.message });
        res.json({ message: 'Historia eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la historia', detalle: error.message });
    }
};

exports.getHistoriasByUsuario = async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const historias = await Historia.findAll({
            where: {
                id_usuario
            }
        });

        res.status(200).json(historias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las historias', detalle: error.message });
    }
};