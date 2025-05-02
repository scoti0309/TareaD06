require('dotenv').config(); 
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const cors = require('cors');
const authRoutes = require('./auth-service/routes/authRoutes');  // Rutas de autenticación
const citasRoutes = require('./citas-service/routes/citasRoutes');      // Rutas de citas
const especialidadesRoutes = require('./citas-service/routes/especialidadesRoutes');
const medicosRoutes = require('./citas-service/routes/medicosRoutes'); 
const pacientesRoutes = require('./pacientes-service/routes/pacientesRoutes');  // Rutas de pacientes
const app = express();
const port = 5000;
const jwt     = require('jsonwebtoken');
// Cargar el archivo de configuración de Swagger
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));


app.use(cors());
app.use(express.json());

// Rutas de microservicios
app.use('/api/auth', authRoutes);  // Rutas de autenticación
app.use('/api/citas', citasRoutes);  // Rutas de citas (protegidas por JWT)
app.use('/api/pacientes', pacientesRoutes);  
app.use('/api/especialidades', especialidadesRoutes);
app.use('/api/medicos', medicosRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

