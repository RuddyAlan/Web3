const validatePais = (req, res, next) => {
  const { nombre, capital } = req.body;
  const nameRegex = /^[A-Za-zÀ-ÿ\s]{2,100}$/;
  
  if (!nombre || !nameRegex.test(nombre)) {
    return res.status(400).json({ error: 'Nombre del país debe contener solo letras, espacios y acentos, entre 2 y 100 caracteres.' });
  }
  if (!capital || !nameRegex.test(capital)) {
    return res.status(400).json({ error: 'Capital debe contener solo letras, espacios y acentos, entre 2 y 100 caracteres.' });
  }
  next();
};

const validateCiudad = (req, res, next) => {
  const { nombre, region } = req.body;
  const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,100}$/;
  const regionRegex = /^[A-Za-zÀ-ÿ\s]{4,100}$/;
  
  if (!nombre || !nameRegex.test(nombre)) {
    return res.status(400).json({ error: 'Nombre de la ciudad debe contener solo letras, espacios y acentos, entre 3 y 100 caracteres.' });
  }
  if (!region || !regionRegex.test(region)) {
    return res.status(400).json({ error: 'Región debe contener solo letras, espacios y acentos, entre 4 y 100 caracteres.' });
  }
  next();
};

module.exports = { validatePais, validateCiudad };