const Logros = require('../models/logros');

exports.getAllLogros = async (req, res) => {
    try {
        const logros = await Logros.findAll();
        res.json(logros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los logros', detalle: error.message });
    }
};

exports.getLogroById = async (req, res) => {
    try {
        const logro = await Logros.findByPk(req.params.id);
        if (!logro) return res.status(404).json({ error: 'Logro no encontrado', detalle: error.message });
        res.json(logro);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el logro', detalle: error.message });
    }
};

exports.createLogro = async (req, res) => {
    try {
        const nuevoLogro = await Logros.create(req.body);
        res.status(201).json({ message: 'Logro creado correctamente', data: nuevoLogro });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el logro', detalle: error.message });
    }
};

exports.updateLogro = async (req, res) => {
    try {
        const [updated] = await Logros.update(req.body, { where: { id_logro: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Logro no encontrado', detalle: error.message });
        const updatedLogro = await Logros.findByPk(req.params.id);
        res.status(200).json({ message: 'Logro actualizado correctamente', data: updatedLogro });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el logro', detalle: error.message });
    }
};

exports.deleteLogro = async (req, res) => {
    try {
        const deleted = await Logros.destroy({ where: { id_logro: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Logro no encontrado', detalle: error.message });
        res.json({ message: 'Logro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el logro', detalle: error.message });
    }
};