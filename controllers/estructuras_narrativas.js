const Estructuras_Narrativas = require('../models/estructuras_narrativas');

exports.getAllEstructuras = async (req, res) => {
    try {
        const estructuras = await Estructuras_Narrativas.findAll();
        res.json(estructuras);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las estructuras narrativas', detalle: error.message });
    }
};

exports.getEstructuraById = async (req, res) => {
    try {
        const estructura = await Estructuras_Narrativas.findByPk(req.params.id);
        if (!estructura) return res.status(404).json({ error: 'Estructura narrativa no encontrada', detalle: error.message });
        res.json(estructura);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la estructura narrativa', detalle: error.message });
    }
};

exports.createEstructura = async (req, res) => {
    try {
        const nuevaEstructura = await Estructuras_Narrativas.create(req.body);
        res.status(201).json({ message: 'Estructura narrativa creada correctamente', data: nuevaEstructura });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la estructura narrativa', detalle: error.message });
    }
};

exports.updateEstructura = async (req, res) => {
    try {
        const [updated] = await Estructuras_Narrativas.update(req.body, { where: { id_estructura: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Estructura narrativa no encontrada', detalle: error.message });
        const updateEstructura = await Estructuras_Narrativas.findByPk(req.params.id);
        res.status(200).json({ message: 'Estructura narrativa actualizada correctamente', data: updateEstructura });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la estructura narrativa', detalle: error.message });
    }
};

exports.deleteEstructura = async (req, res) => {
    try {
        const deleted = await Estructuras_Narrativas.destroy({ where: { id_estructura: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Estructura narrativa no encontrada', detalle: error.message });
        res.json({ message: 'Estructura narrativa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la estructura narrativa', detalle: error.message });
    }
};