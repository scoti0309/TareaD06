// auth-service/server.js
require('dotenv').config();  // Cargar variables de entorno
const express = require('express');

const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  // Rutas para la autenticación
const app = express();

// Middleware global
app.use(cors());              // Permitir solicitudes de diferentes orígenes (CORS)
app.use(express.json());      // Parsear las solicitudes con cuerpo JSON

// Rutas
app.use('/api/auth', authRoutes);  // Rutas de autenticación bajo el prefijo '/api/auth'
console.log(process.env.JWT_SECRET);
// Configuración del puerto
const PORT = process.env.PORT || 5001;  // Usa el puerto desde .env o 5001 por defecto
app.listen(PORT, () => {
  console.log(`Auth service corriendo en puerto ${PORT}`);
});
