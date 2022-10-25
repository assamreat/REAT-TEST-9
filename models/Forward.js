const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Forward = sequelize.define(
    'forward',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        processStatus: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        comments: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Forward;
