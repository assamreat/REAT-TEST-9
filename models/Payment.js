const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Payment = sequelize.define('payment', {
    order_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});

module.exports = Payment;
