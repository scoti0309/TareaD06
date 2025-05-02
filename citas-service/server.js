// citas-service/server.js
require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const citasRoutes = require('./routes/citasRoutes');           // Rutas del servicio de citas
const especialidadesRoutes = require('./routes/especialidadesRoutes');  // Rutas de especialidades
const medicosRoutes = require('./routes/medicosRoutes');      // Rutas de médicos
const authMiddleware = require('../middlewares/authMiddleware');  // Middleware de autenticación JWT

const app = express();

// Middleware global
app.use(cors());              // Permitir solicitudes de diferentes orígenes (CORS)
app.use(express.json());      // Parsear las solicitudes con cuerpo JSON

// Rutas del microservicio de citas, especialidades y médicos, con protección de JWT
app.use('/api/citas', authMiddleware, citasRoutes);  // Rutas de citas (protegidas por JWT)
app.use('/api/especialidades', authMiddleware, especialidadesRoutes);  // Rutas de especialidades (protegidas por JWT)
app.use('/api/medicos', authMiddleware, medicosRoutes);  // Rutas de médicos (protegidas por JWT)

// Configuración del puerto
const PORT = process.env.PORT || 5002;  // Usa el puerto desde .env o 5002 por defecto
app.listen(PORT, () => {
  console.log(`Citas service corriendo en puerto ${PORT}`);
});
