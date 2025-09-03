const Logros_Usuarios = require('../models/logros_usuarios');

exports.getAllLogrosUsuarios = async (req, res) => {
    try {
        const logrosUsuarios = await Logros_Usuarios.findAll();
        res.json(logrosUsuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los logros de usuarios', detalle: error.message });
    }
};

exports.getLogroUsuarioById = async (req, res) => {
    try {
        const logroUsuario = await Logros_Usuarios.findOne({
            where: {
                id_usuario: req.params.id_usuario,
                id_logro: req.params.id_logro
            }
        });
        if (!logroUsuario) {
            return res.status(404).json({ error: 'Relación usuario-logro no encontrada', detalle: error.message });
        }
        res.json(logroUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la relación usuario-logro', detalle: error.message });
    }
};

exports.createLogroUsuario = async (req, res) => {
    try {
        const nuevoLogroUsuario = await Logros_Usuarios.create(req.body);
        res.status(201).json(nuevoLogroUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la relación usuario-logro', detalle: error.message });
    }
};

exports.updateLogroUsuario = async (req, res) => {
    try {
        const [updated] = await Logros_Usuarios.update(req.body, {
            where: {
                id_usuario: req.params.id_usuario,
                id_logro: req.params.id_logro
            }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Relación usuario-logro no encontrada', detalle: error.message });
        }
        const updatedRel = await Logros_Usuarios.findOne({
            where: {
                id_usuario: req.params.id_usuario,
                id_logro: req.params.id_logro
            }
        });
        res.json(updatedRel);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la relación usuario-logro', detalle: error.message });
    }
};

exports.deleteLogroUsuario = async (req, res) => {
    try {
        const deleted = await Logros_Usuarios.destroy({
            where: {
                id_usuario: req.params.id_usuario,
                id_logro: req.params.id_logro
            }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Relación usuario-logro no encontrada', detalle: error.message });
        }
        res.json({ message: 'Relación usuario-logro eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la relación usuario-logro', detalle: error.message });
    }
};