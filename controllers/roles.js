const Roles = require('../models/roles');

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Roles.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los roles', detalle: error.message });
    }
};

exports.getRolById = async (req, res) => {
    try {
        const rol = await Roles.findByPk(req.params.id);
        if (!rol) return res.status(404).json({ error: 'Roles no encontrado', detalle: error.message });
        res.json(rol);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el rol', detalle: error.message });
    }
};

exports.createRol = async (req, res) => {
    try {
        const nuevoRol = await Roles.create(req.body);
        res.status(201).json(nuevoRol);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el rol', detalle: error.message });
    }
};

exports.updateRol = async (req, res) => {
    try {
        const [updated] = await Roles.update(req.body, { where: { id_genero: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Roles no encontrado', detalle: error.message });
        const updatedRol = await Roles.findByPk(req.params.id);
        res.json(updatedRol);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el rol', detalle: error.message });
    }
};

exports.deleteRol = async (req, res) => {
    try {
        const deleted = await Roles.destroy({ where: { id_genero: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Roles no encontrado', detalle: error.message });
        res.json({ message: 'Roles eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el rol', detalle: error.message });
    }
};