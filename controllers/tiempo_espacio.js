const Tiempo_Espacio = require('../models/tiempo_espacio');

exports.getAllTiempos = async (req, res) => {
    try {
        const tiempos = await Tiempo_Espacio.findAll();
        res.json(tiempos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los tiempos y espacios', detalle: error.message });
    }
};

exports.getTiempoById = async (req, res) => {
    try {
        const tiempo = await Tiempo_Espacio.findByPk(req.params.id);
        if (!tiempo) return res.status(404).json({ error: 'Tiempo o espacio no encontrado', detalle: error.message });
        res.json(tiempo);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el tiempo o espacio', detalle: error.message });
    }
};

exports.createTiempo = async (req, res) => {
    try {
        const nuevoTiempo = await Tiempo_Espacio.create(req.body);
        res.status(201).json(nuevoTiempo);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el tiempo o espacio', detalle: error.message });
    }
};

exports.updateTiempo = async (req, res) => {
    try {
        const [updated] = await Tiempo_Espacio.update(req.body, { where: { id_tiempo: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Tiempo o espacio no encontrado', detalle: error.message });
        const tiempoActualizado = await Tiempo_Espacio.findByPk(req.params.id);
        res.json(tiempoActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el tiempo o espacio', detalle: error.message });
    }
};

exports.deleteTiempo = async (req, res) => {
    try {
        const deleted = await Tiempo_Espacio.destroy({ where: { id_tiempo: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Tiempo o espacio no encontrado', detalle: error.message });
        res.json({ message: 'Tiempo o espacio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el tiempo o espacio', detalle: error.message });
    }
};