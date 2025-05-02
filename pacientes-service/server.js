// pacientes-service/server.js
require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const pacientesRoutes = require('./routes/pacientesRoutes');  // Rutas del servicio de pacientes
const authMiddleware = require('../middlewares/authMiddleware');  // Middleware de autenticación JWT

const app = express();

// Middleware global
app.use(cors());              // Permitir solicitudes de diferentes orígenes (CORS)
app.use(express.json());      // Parsear las solicitudes con cuerpo JSON

// Rutas del microservicio de pacientes, con protección de JWT
app.use('/api/pacientes', authMiddleware, pacientesRoutes);  // Todas las rutas de /pacientes están protegidas por JWT

// Configuración del puerto
const PORT = process.env.PORT || 5003;  // Usa el puerto desde .env o 5003 por defecto
app.listen(PORT, () => {
  console.log(`Pacientes service corriendo en puerto ${PORT}`);
});
