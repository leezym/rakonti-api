const Personaje_Roles = require('../models/personaje_roles');
const Personajes = require('../models/personajes');
const Roles = require('../models/roles');

exports.getAllPersonajeRoles = async (req, res) => {
    try {
        const relaciones = await Personaje_Roles.findAll();
        res.json(relaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las relaciones personaje-rol', detalle: error.message });
    }
};

exports.getPersonajeRolById = async (req, res) => {
    try {
        const relacion = await Personaje_Roles.findOne({
            where: {
                id_personaje: req.params.id_personaje,
                id_rol: req.params.id_rol
            }
        });
        if (!relacion) {
            return res.status(404).json({ error: 'Relación personaje-rol no encontrada', detalle: error.message });
        }
        res.json(relacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la relación personaje-rol', detalle: error.message });
    }
};

exports.getAllRolesByPersonaje = async (req, res) => {
    try {
        const personaje = await Personajes.findByPk(req.params.id_personaje, {
            include: {
                model: Roles,
                as: 'roles',
                attributes: ['id_rol', 'nombre']
            }
        });

        if (!personaje) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
        }
        
        res.json(personaje.roles);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar los roles del personaje', detalle: error.message });
    }
};

exports.createPersonajeRol = async (req, res) => {
    try {
        const nuevaRelacion = await Personaje_Roles.create(req.body);
        res.status(201).json(nuevaRelacion);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la relación personaje-rol', detalle: error.message });
    }
};

exports.updatePersonajeRol = async (req, res) => {
    try {
        const [updated] = await Personaje_Roles.update(req.body, {
            where: {
                id_personaje: req.params.id_personaje,
                id_rol: req.params.id_rol
            }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Relación personaje-rol no encontrada', detalle: error.message });
        }
        const updatedRelacion = await Personaje_Roles.findOne({
            where: {
                id_personaje: req.params.id_personaje,
                id_rol: req.params.id_rol
            }
        });
        res.json(updatedRelacion);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la relación personaje-rol' });
    }
};

exports.deletePersonajeRol = async (req, res) => {
    try {
        const deleted = await Personaje_Roles.destroy({
            where: {
                id_personaje: req.params.id_personaje,
                id_rol: req.params.id_rol
            }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Relación personaje-rol no encontrada', detalle: error.message });
        }
        res.json({ message: 'Relación personaje-rol eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la relación personaje-rol', detalle: error.message });
    }
};