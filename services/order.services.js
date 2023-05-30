const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class orderServices {
    constructor() { }

    async create(data) {
        const newOrder = await models.Order.create(data);
        return newOrder;
    }

    async addItem(data) {
        const newItem = await models.OrderProduct.create(data);
        return newItem;
      }


    find() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.orders);
            }, 3000)
        })
    }

    async findOne(id) {
        const order = await models.Order.findByPk(id, {
            include: [
                {
                    association: 'customer',
                    include: ['user']
                },
                'items'
            ]
        });
        return order;
    }

    

    update(id, changes) {
        const index = this.orders.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('order not found');
        }

        const order = this.orders[index];
        this.orders[index] = {
            ...order,
            ...changes
        }

        return this.orders[index];
    }

    delete(id) {
        const index = this.orders.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('order not found');
        }
        this.orders.splice(index, 1);
        return { id };
    }

}

module.exports = orderServices;