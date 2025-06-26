'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.removeColumn('hirer', 'work_area');

		await queryInterface.removeColumn('artist', 'artistic_field');
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.addColumn('hirer', 'work_area', {
		type: Sequelize.JSON,
		allowNull: true,
		});

		await queryInterface.addColumn('artist', 'artistic_field', {
		type: Sequelize.JSON,
		allowNull: true,
		});
	}
};
