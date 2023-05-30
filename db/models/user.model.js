// Importación de Sequelize y sus elementos necesarios
const { Model, DataTypes, Sequelize } = require('sequelize');

// Nombre de la tabla de usuarios
const USER_TABLE = 'users';

// Esquema del modelo de usuario
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  //Nueva columna
  dni: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
};

// Definición del modelo de usuario
class User extends Model {
  /**
   * Define las asociaciones del modelo de usuario.
   */
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }

  /**
   * Configura el modelo de usuario en Sequelize.
   * @param {Object} sequelize - Instancia de Sequelize.
   * @returns {Object} - Configuración del modelo.
   */
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    };
  }
}

// Exportación de los elementos del módulo
module.exports = { USER_TABLE, UserSchema, User };
