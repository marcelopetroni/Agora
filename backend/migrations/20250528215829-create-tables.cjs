'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING(60),
				allowNull: false,
			},
			birth: {
				type: Sequelize.DATEONLY,
				allowNull: true,
			},
			country: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			languages: {
				type: Sequelize.JSON,
				allowNull: true,
			},
			field: {
				type: Sequelize.JSON,
				allowNull: true,
			},
			company: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			experience: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true,
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	}
};
