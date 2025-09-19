const Usuario_Generos = require('../models/usuario_generos');
const Usuarios = require('../models/usuarios');
const Generos = require('../models/generos');

exports.getAllUsuarioGeneros = async (req, res) => {
    try {
        const relaciones = await Usuario_Generos.findAll();
        res.json(relaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las relaciones usuario-género', detalle: error.message });
    }
};

exports.getUsuarioGeneroById = async (req, res) => {
    try {
        const relacion = await Usuario_Generos.findOne({
            where: {
                id_usuario: req.params.id_usuario,
                id_genero: req.params.id_genero
            }
        });
        if (!relacion) {
            return res.status(404).json({ error: 'Relación usuario-género no encontrada', detalle: error.message });
        }
        res.json(relacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la relación usuario-género', detalle: error.message });
    }
};

exports.getAllGenerosByUser = async (req, res) => {
    try {
        const user = await Usuarios.findByPk(req.params.id_usuario, {
            include: {
                model: Generos,
                attributes: ['id_genero', 'nombre']
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado', detalle: error.message });
        }

        res.json(user.Generos);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar los géneros del usuario', detalle: error.message });
    }
};

exports.createUsuarioGenero = async (req, res) => {
    try {
        const nuevaRelacion = await Usuario_Generos.create(req.body);
        res.status(201).json({ message: 'Relación usuario-género creada correctamente', data: nuevaRelacion });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la relación usuario-género', detalle: error.message });
    }
};

exports.updateUsuarioGenero = async (req, res) => {
    try {
        const [updated] = await Usuario_Generos.update(req.body, {
            where: {
                id_usuario: req.params.id_usuario,
                id_genero: req.params.id_genero
            }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Relación usuario-género no encontrada', detalle: error.message });
        }
        const updatedRelacion = await Usuario_Generos.findOne({
            where: {
                id_usuario: req.params.id_usuario,
                id_genero: req.params.id_genero
            }
        });
        res.status(200).json({ message: 'Relación usuario-género actualizada correctamente', data: updatedRelacion });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la relación usuario-género', detalle: error.message });
    }
};

exports.deleteUsuarioGenero = async (req, res) => {
    try {
        const deleted = await Usuario_Generos.destroy({
            where: {
                id_usuario: req.params.id_usuario,
                id_genero: req.params.id_genero
            }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Relación usuario-género no encontrada', detalle: error.message });
        }
        res.json({ message: 'Relación usuario-género eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la relación usuario-género', detalle: error.message });
    }
};