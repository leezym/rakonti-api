const Tramas = require('../models/tramas');

exports.getAllTramas = async (req, res) => {
    try {
        const tramas = await Tramas.findAll();
        res.json(tramas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tramas', detalle: error.message });
    }
};

exports.getTramaById = async (req, res) => {
    try {
        const trama = await Tramas.findByPk(req.params.id);
        if (!trama) return res.status(404).json({ error: 'Tramas no encontrada', detalle: error.message });
        res.json(trama);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la trama', detalle: error.message });
    }
};

exports.createTrama = async (req, res) => {
    try {
        const nuevaTrama = await Tramas.create(req.body);
        res.status(201).json({ message: 'Trama creada correctamente', data: nuevaTrama });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la trama', detalle: error.message });
    }
};

exports.updateTrama = async (req, res) => {
    try {
        const trama = await Tramas.findByPk(req.params.id);
        if (!trama) return res.status(404).json({ error: 'Tramas no encontrada', detalle: error.message });

        await trama.update(req.body);
        res.status(200).json({ message: 'Trama actualizada correctamente', data: trama });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la trama', detalle: error.message });
    }
};

exports.deleteTrama = async (req, res) => {
    try {
        const trama = await Tramas.findByPk(req.params.id);
        if (!trama) return res.status(404).json({ error: 'Tramas no encontrada', detalle: error.message });

        await trama.destroy();
        res.json({ message: 'Tramas eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la trama', detalle: error.message });
    }
};