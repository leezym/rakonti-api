const Objetos_Deseo = require('../models/objetos_deseo');

exports.getAllObjetos = async (req, res) => {
    try {
        const objetos = await Objetos_Deseo.findAll();
        res.json(objetos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los objetos de deseo', detalle: error.message });
    }
};

exports.getObjetoById = async (req, res) => {
    try {
        const objeto = await Objetos_Deseo.findByPk(req.params.id);
        if (!objeto) return res.status(404).json({ error: 'Objeto no encontrado', detalle: error.message });
        res.json(objeto);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el objeto de deseo', detalle: error.message });
    }
};

exports.createObjeto = async (req, res) => {
    try {
        const nuevoObjeto = await Objetos_Deseo.create(req.body);
        res.status(201).json({ message: 'Objeto de deseo creado correctamente', data: nuevoObjeto });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el objeto de deseo', detalle: error.message });
    }
};

exports.updateObjeto = async (req, res) => {
    try {
        const [updated] = await Objetos_Deseo.update(req.body, { where: { id_objeto: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Objeto no encontrado', detalle: error.message });
        const objetoActualizado = await Objetos_Deseo.findByPk(req.params.id);
        res.status(200).json({ message: 'Objeto de deseo actualizado correctamente', data: objetoActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el objeto de deseo', detalle: error.message });
    }
};

exports.deleteObjeto = async (req, res) => {
    try {
        const deleted = await Objetos_Deseo.destroy({ where: { id_objeto: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Objeto no encontrado', detalle: error.message });
        res.json({ message: 'Objeto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el objeto de deseo', detalle: error.message });
    }
};