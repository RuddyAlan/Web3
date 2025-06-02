const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const paisRoutes = require('./routes/paisRoutes');
const ciudadRoutes = require('./routes/ciudadRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Examen Vue. Usa /api/paises o /api/ciudades para operaciones CRUD.' });
});

app.use('/api/paises', paisRoutes);
app.use('/api/ciudades', ciudadRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}).catch(err => {
  console.error('No se pudo conectar a la base de datos:', err);
});