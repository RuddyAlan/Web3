const Ciudad = require('../models/Ciudad');
const Pais = require('../models/Pais');

exports.getAllCiudades = async (req, res) => {
  try {
    const ciudades = await Ciudad.findAll({ include: Pais });
    res.json(ciudades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ciudades' });
  }
};

exports.getCiudadById = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByPk(req.params.id, { include: Pais });
    if (ciudad) {
      res.json(ciudad);
    } else {
      res.status(404).json({ error: 'Ciudad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la ciudad' });
  }
};

exports.createCiudad = async (req, res) => {
  try {
    const ciudad = await Ciudad.create(req.body);
    res.status(201).json(ciudad);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la ciudad' });
  }
};

exports.updateCiudad = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByPk(req.params.id);
    if (ciudad) {
      await ciudad.update(req.body);
      res.json(ciudad);
    } else {
      res.status(404).json({ error: 'Ciudad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la ciudad' });
  }
};

exports.deleteCiudad = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByPk(req.params.id);
    if (ciudad) {
      await ciudad.destroy();
      res.json({ message: 'Ciudad eliminada' });
    } else {
      res.status(404).json({ error: 'Ciudad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la ciudad' });
  }
};