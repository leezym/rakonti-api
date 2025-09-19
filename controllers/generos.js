const Generos = require('../models/generos');

exports.getAllGeneros = async (req, res) => {
    try {
        const generos = await Generos.findAll();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los géneros', detalle: error.message });
    }
};

exports.getGeneroById = async (req, res) => {
    try {
        const genero = await Generos.findByPk(req.params.id);
        if (!genero) return res.status(404).json({ error: 'Género no encontrado', detalle: error.message });
        res.json(genero);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el género', detalle: error.message });
    }
};

exports.createGenero = async (req, res) => {
    try {
        const nuevoGenero = await Generos.create(req.body);
        res.status(201).json({ message: 'Género creado correctamente', data: nuevoGenero });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el género', detalle: error.message });
    }
};

exports.updateGenero = async (req, res) => {
    try {
        const [updated] = await Generos.update(req.body, { where: { id_genero: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Género no encontrado', detalle: error.message });
        const updatedGenero = await Generos.findByPk(req.params.id);
        res.status(200).json({ message: 'Género actualizado correctamente', data: updatedGenero });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el género', detalle: error.message });
    }
};

exports.deleteGenero = async (req, res) => {
    try {
        const deleted = await Generos.destroy({ where: { id_genero: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Género no encontrado', detalle: error.message });
        res.json({ message: 'Género eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el género', detalle: error.message });
    }
};