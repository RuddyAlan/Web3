const Pais = require('../models/Pais');

exports.getAllPaises = async (req, res) => {
  try {
    const paises = await Pais.findAll();
    res.json(paises);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener países' });
  }
};

exports.getPaisById = async (req, res) => {
  try {
    const pais = await Pais.findByPk(req.params.id);
    if (pais) {
      res.json(pais);
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el país' });
  }
};

exports.createPais = async (req, res) => {
  try {
    const pais = await Pais.create(req.body);
    res.status(201).json(pais);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el país' });
  }
};

exports.updatePais = async (req, res) => {
  try {
    const pais = await Pais.findByPk(req.params.id);
    if (pais) {
      await pais.update(req.body);
      res.json(pais);
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el país' });
  }
};

exports.deletePais = async (req, res) => {
  try {
    const pais = await Pais.findByPk(req.params.id);
    if (pais) {
      await pais.destroy();
      res.json({ message: 'País eliminado' });
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el país' });
  }
};