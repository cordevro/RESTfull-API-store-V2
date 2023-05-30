const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');

const boom = require('@hapi/boom');

/**
 * Clase que representa los servicios relacionados con los productos.
 */
class ProductServices {
    constructor() { }



    async create(data) {
        const newProduct = await models.Product.create(data);
        return newProduct;
    }


    /**
     * Obtiene la lista de productos.
     * @returns {Promise<Array>} Una promesa que se resuelve con la lista de productos.
     */

      async find(query) {
        const options = {
          include: ['category'],
          where: {}
        }
        const { limit, offset } = query;
        if (limit && offset) {
          options.limit =  limit;
          options.offset =  offset;
        }
    
        const { price } = query;
        if (price) {
          options.where.price = price;
        }
    
        const { price_min, price_max } = query;
        if (price_min && price_max) {
          options.where.price = {
            [Op.gte]: price_min,
            [Op.lte]: price_max,
          };
        }
        const products = await models.Product.findAll(options);
        return products;
      }

      

    async findOne(id) {
        const product = await models.Product.findByPk(id);
        return product;

    }

    

    async update(id, changes) {
        const model = await this.findOne(id);
        const rta = await model.update(changes);
        return rta;
    }

    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return {rta: true};
    }
}

module.exports = ProductServices;
