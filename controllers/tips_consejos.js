const Tips_Consejos = require('../models/tips_consejos');

exports.getAllTips = async (req, res) => {
    try {
        const tips = await Tips_Consejos.findAll();
        res.json(tips);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los tips/consejos', detalle: error.message });
    }
};

exports.getTipById = async (req, res) => {
    try {
        const tip = await Tips_Consejos.findByPk(req.params.id);
        if (!tip) return res.status(404).json({ error: 'Tip/Consejo no encontrado', detalle: error.message });
        res.json(tip);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el tip/consejo', detalle: error.message });
    }
};

exports.createTip = async (req, res) => {
    try {
        const nuevoTip = await Tips_Consejos.create(req.body);
        res.status(201).json(nuevoTip);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el tip/consejo', detalle: error.message });
    }
};

exports.updateTip = async (req, res) => {
    try {
        const [updated] = await Tips_Consejos.update(req.body, { where: { id_tip: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Tip/Consejo no encontrado', detalle: error.message });
        const tipActualizado = await Tips_Consejos.findByPk(req.params.id);
        res.json(tipActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el tip/consejo', detalle: error.message });
    }
};

exports.deleteTip = async (req, res) => {
    try {
        const deleted = await Tips_Consejos.destroy({ where: { id_tip: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Tip/Consejo no encontrado', detalle: error.message });
        res.json({ message: 'Tip/Consejo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el tip/consejo', detalle: error.message });
    }
};

exports.getTipsByEstructuraYPaso = async (req, res) => {
    const { id_estructura, id_paso_estructura } = req.params;

    try {
        const tips = await Tips_Consejos.findAll({
            where: {
                id_estructura,
                id_paso_estructura
            }
        });

        res.status(200).json(tips);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los tips', detalle: error.message });
    }
};