const Personalidades = require('../models/personalidades');

exports.getAllPersonalidades = async (req, res) => {
    try {
        const personalidades = await Personalidades.findAll();
        res.json(personalidades);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las personalidades', detalle: error.message });
    }
};

exports.getPersonalidadById = async (req, res) => {
    try {
        const personalidad = await Personalidades.findByPk(req.params.id);
        if (!personalidad) return res.status(404).json({ error: 'Personalidad no encontrada', detalle: error.message });
        res.json(personalidad);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la personalidad', detalle: error.message });
    }
};

exports.createPersonalidad = async (req, res) => {
    try {
        const nuevaPersonalidad = await Personalidades.create(req.body);
        res.status(201).json(nuevaPersonalidad);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la personalidad', detalle: error.message });
    }
};

exports.updatePersonalidad = async (req, res) => {
    try {
        const [updated] = await Personalidades.update(req.body, { where: { id_personalidad: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Personalidad no encontrada', detalle: error.message });
        const personalidadActualizada = await Personalidades.findByPk(req.params.id);
        res.json(personalidadActualizada);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la personalidad', detalle: error.message });
    }
};

exports.deletePersonalidad = async (req, res) => {
    try {
        const deleted = await Personalidades.destroy({ where: { id_personalidad: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Personalidad no encontrada', detalle: error.message });
        res.json({ message: 'Personalidad eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la personalidad', detalle: error.message });
    }
};

// pdte combinaciones de opciones para devolver la personalidad correspondiente (front o back?)