'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.addColumn('artist', 'deleted_at', {
                type: Sequelize.DATE,
                allowNull: true,
            }, { transaction });

            await queryInterface.addColumn('hirer', 'deleted_at', {
                type: Sequelize.DATE,
                allowNull: true,
            }, { transaction });

            await queryInterface.addColumn('post', 'deleted_at', {
                type: Sequelize.DATE,
                allowNull: true,
            }, { transaction });

            await queryInterface.addColumn('medias', 'deleted_at', {
                type: Sequelize.DATE,
                allowNull: true,
            }, { transaction });

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    async down (queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.removeColumn('medias', 'deleted_at', { transaction });

            await queryInterface.removeColumn('post', 'deleted_at', { transaction });

            await queryInterface.removeColumn('hirer', 'deleted_at', { transaction });

            await queryInterface.removeColumn('artist', 'deleted_at', { transaction });

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
};
