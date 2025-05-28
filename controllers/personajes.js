const Personajes = require('../models/personajes');

exports.getAllPersonajes = async (req, res) => {
    try {
        const personajes = await Personajes.findAll();
        res.json(personajes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los personajes', detalle: error.message });
    }
};

exports.getPersonajeById = async (req, res) => {
    try {
        const personaje = await Personajes.findByPk(req.params.id);
        if (!personaje) return res.status(404).json({ error: 'Personaje no encontrado', detalle: error.message });
        res.json(personaje);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el personaje', detalle: error.message });
    }
};

exports.createPersonaje = async (req, res) => {
    try {
        const nuevoPersonaje = await Personajes.create(req.body);
        res.status(201).json(nuevoPersonaje);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el personaje', detalle: error.message });
    }
};

exports.updatePersonaje = async (req, res) => {
    try {
        const [updated] = await Personajes.update(req.body, { where: { id_personaje: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Personaje no encontrado', detalle: error.message });
        const personajeActualizado = await Personajes.findByPk(req.params.id);
        res.json(personajeActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el personaje', detalle: error.message });
    }
};

exports.deletePersonaje = async (req, res) => {
    try {
        const deleted = await Personajes.destroy({ where: { id_personaje: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Personaje no encontrado', detalle: error.message });
        res.json({ message: 'Personaje eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el personaje', detalle: error.message });
    }
};

exports.getPersonajesByHistoria = async (req, res) => {
    const { id_historia } = req.params;

    try {
        const personajes = await Personajes.findAll({
            where: {
                id_historia
            }
        });

        res.status(200).json(personajes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los personajes', detalle: error.message });
    }
};
