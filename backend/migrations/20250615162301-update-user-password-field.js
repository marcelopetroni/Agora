'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.changeColumn('users', 'password', {
			type: Sequelize.STRING,
			allowNull: true
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.changeColumn('users', 'password', {
			type: Sequelize.STRING,
			allowNull: false
		});
	}
};

