const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Payment = sequelize.define('payment', {
    order_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        // type: Sequelize.INTEGER(6).ZEROFILL,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    paymentMode: {
        type: Sequelize.STRING,
    },

    transactionDateAndTime: {
        type: Sequelize.STRING,
    },

    surepayTxnId: {
        type: Sequelize.STRING,
    },

    bankTxnNo: {
        type: Sequelize.STRING,
    },

    NSDLResponse: {
        type: Sequelize.TEXT,
    },
});

module.exports = Payment;
