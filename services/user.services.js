const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class userServices {
    constructor() {}

    async find() {
        const rta = await models.User.findAll({
            include: ['customer']
        });
        return rta;
    }

    async findOne(id) {
        const user = await models.User.findByPk(id);
        if(!user){
            throw boom.notFound('user not found');
        }
        return user;
    }

    async create(data) {
        const newUser = await models.User.create(data);
        return newUser;
    }

    update(id, changes) {
        const index = this.users.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('user not found');
        }

        const user = this.users[index];
        this.users[index] = {
            ...user,
            ...changes
        }

        return this.users[index];
    }

    delete(id) {
        const index = this.users.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('user not found');
        }
        this.users.splice(index, 1);
        return { id };
    }

}

module.exports = userServices;