'use strict';

// Importación del esquema de usuario y el nombre de la tabla de usuarios
const { UserSchema, USER_TABLE } = require('./../models/user.model');

// Exportación del objeto que define las operaciones de migración
module.exports = {
  /**
   * Realiza las operaciones de migración para crear la tabla de usuarios.
   * @param {Object} queryInterface - Interfaz de consulta de la base de datos.
   */
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  /**
   * Realiza las operaciones de migración para eliminar la tabla de usuarios.
   * @param {Object} queryInterface - Interfaz de consulta de la base de datos.
   */
  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
  }
};
