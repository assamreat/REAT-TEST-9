const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Checklist = sequelize.define(
    'checklist',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        appeal_num: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        complaint_num: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        appellant: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        respondent: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        section_num: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        is_appeal_competent: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

        is_name_address_correct: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        is_ordercopy_attached: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        date_of_order: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        date_of_communication: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        date_of_application: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        date_on_copy_ready: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        date_of_receipt: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        date_of_filing: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        date_of_submission_hardcopy: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        is_delay_on_submission: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        amount_of_delay_on_submission: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        is_appeal_filed_within_limitation: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        is_delay_in_filing: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        amount_of_delay_in_filing: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        is_condonation_of_delay_filed: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        objection_for_condonation: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        is_fees_paid: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

        date_of_payment: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },

        is_pagination_correct: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

        legible_docs: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        is_appeal_memo_annexed: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        is_served_by_post: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        is_auth_stamped: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        is_email_phone_on_record: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Checklist;
