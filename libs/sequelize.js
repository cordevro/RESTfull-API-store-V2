// Importación de Sequelize
const { Sequelize } = require('sequelize');

// Importación de la configuración de la base de datos
const { config } = require('../config/config');

// Importación del módulo de modelos de la base de datos
const setupModels = require('./../db/models');

// Codificación de las credenciales de la base de datos
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// Construcción de la URI de conexión a la base de datos
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Creación de una nueva instancia de Sequelize
const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true
});

// Configuración de los modelos en Sequelize
setupModels(sequelize);

// Exportación de la instancia de Sequelize
module.exports = sequelize;