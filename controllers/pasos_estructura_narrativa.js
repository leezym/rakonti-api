const Pasos_Estructura_Narrativa = require('../models/pasos_estructura_narrativa');

exports.getAllPasos = async (req, res) => {
    try {
        const pasos = await Pasos_Estructura_Narrativa.findAll();
        res.json(pasos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pasos de la estructura narrativa', detalle: error.message });
    }
};

exports.getPasoById = async (req, res) => {
    try {
        const paso = await Pasos_Estructura_Narrativa.findByPk(req.params.id);
        if (!paso) return res.status(404).json({ error: 'Paso no encontrado', detalle: error.message });
        res.json(paso);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el paso', detalle: error.message });
    }
};

exports.createPaso = async (req, res) => {
    try {
        const nuevoPaso = await Pasos_Estructura_Narrativa.create(req.body);
        res.status(201).json(nuevoPaso);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el paso', detalle: error.message });
    }
};

exports.updatePaso = async (req, res) => {
    try {
        const [updated] = await Pasos_Estructura_Narrativa.update(req.body, {
            where: { id_paso_estructura: req.params.id }
        });
        if (!updated) return res.status(404).json({ error: 'Paso no encontrado', detalle: error.message });
        const pasoActualizado = await Pasos_Estructura_Narrativa.findByPk(req.params.id);
        res.json(pasoActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el paso', detalle: error.message });
    }
};

exports.deletePaso = async (req, res) => {
    try {
        const deleted = await Pasos_Estructura_Narrativa.destroy({
            where: { id_paso_estructura: req.params.id }
        });
        if (!deleted) return res.status(404).json({ error: 'Paso no encontrado', detalle: error.message });
        res.json({ message: 'Paso eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el paso', detalle: error.message });
    }
};

exports.getPasosByEstructura = async (req, res) => {
    const { id_estructura } = req.params;
    console.log(id_estructura)

    try {
        const pasos = await Pasos_Estructura_Narrativa.findAll({
            where: {
                id_estructura
            }
        });

        res.status(200).json(pasos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pasos de la estructura narrativa', detalle: error.message });
    }
};