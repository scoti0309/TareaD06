// routes/especialidades.js
const express = require('express');
const router = express.Router();
const especialidadesController = require('../controllers/especialidadesController');
const authMiddleware = require('../../middlewares/authMiddleware'); // Middleware de autenticación JWT

// Obtener todas las especialidades
router.get('/', authMiddleware, especialidadesController.getEspecialidades);

module.exports = router;
