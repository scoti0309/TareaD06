// routes/medicos.js
const express = require('express');
const router = express.Router();
const medicosController = require('../controllers/medicosController');
const authMiddleware = require('../../middlewares/authMiddleware'); // Middleware de autenticación JWT

// Obtener médicos por especialidad
router.get('/', authMiddleware, medicosController.getMedicosByEspecialidad);

module.exports = router;
