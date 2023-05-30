// Importación del modelo y el esquema de usuario
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

/**
 * Configura los modelos en Sequelize.
 * @param {Object} sequelize - Instancia de Sequelize.
 */
function setupModels(sequelize) {
    // Inicialización del modelo User con el UserSchema y la configuración de Sequelize
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
    Product.associate(sequelize.models);
    Category.associate(sequelize.models);
    Order.associate(sequelize.models);
}

// Exportación de la función setupModels
module.exports = setupModels;
