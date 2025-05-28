'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
	const transaction = await queryInterface.sequelize.transaction();
	try {

	await queryInterface.dropTable('users', { transaction, cascade: true });

	// --- Criação da tabela 'users' ---
	await queryInterface.createTable('users', {
		id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
		},
		type: { 
		type: Sequelize.STRING, 
		allowNull: true 
		},
		name: {
		type: Sequelize.STRING,
		allowNull: true
		},
		email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true 
		},
		password: {
		type: Sequelize.STRING,
		allowNull: false
		},
		born: { 
		type: Sequelize.DATEONLY,
		allowNull: true
		},
		country: {
		type: Sequelize.STRING,
		allowNull: true
		},
		contact_cellphone: { 
		type: Sequelize.STRING,
		allowNull: true
		},
		isPhoneWhatsapp: { 
		type: Sequelize.BOOLEAN,
		allowNull: true,
		defaultValue: false
		},
		languages: { 
		type: Sequelize.JSON,
		allowNull: true
		},
		profile_picture: { 
		type: Sequelize.STRING, 
		allowNull: true
		},
		description: { 
		type: Sequelize.TEXT,
		allowNull: true
		},
		created_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		deleted_at: { 
		type: Sequelize.DATE,
		allowNull: true
		}
	}, { transaction });

	// --- Criação da tabela 'artist' ---
	await queryInterface.createTable('artist', {
		id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
		},
		user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: 'users',
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
		},
		artistic_field: {
		type: Sequelize.STRING,
		allowNull: true
		},
		created_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, { transaction });
	await queryInterface.addIndex('artist', ['user_id'], { transaction });


	// --- Criação da tabela 'hirer' ---
	await queryInterface.createTable('hirer', {
		id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
		},
		user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: 'users',
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
		},
		work_area: {
		type: Sequelize.STRING,
		allowNull: true
		},
		company: {
		type: Sequelize.STRING,
		allowNull: true
		},
		created_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, { transaction });
	await queryInterface.addIndex('hirer', ['user_id'], { transaction });

	// --- Criação da tabela 'post' ---
	await queryInterface.createTable('post', {
		id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
		},
		user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: 'users',
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
		},
		text: {
		type: Sequelize.TEXT,
		allowNull: true
		},
		created_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, { transaction });
	await queryInterface.addIndex('post', ['user_id'], { transaction });

	// --- Criação da tabela 'medias' ---
	await queryInterface.createTable('medias', {
		id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
		},
		type: {
		type: Sequelize.STRING,
		allowNull: false
		},
		url: {
		type: Sequelize.STRING,
		allowNull: false
		},
		post_id: {
		type: Sequelize.INTEGER,
		allowNull: true,
		references: {
			model: 'post',
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL'
		},
		user_id: {
		type: Sequelize.INTEGER,
		allowNull: true,
		references: {
			model: 'users',
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
		},
		created_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
		allowNull: false,
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, { transaction });
	await queryInterface.addIndex('medias', ['post_id'], { transaction });
	await queryInterface.addIndex('medias', ['user_id'], { transaction });

	await transaction.commit();
	} catch (err) {
	await transaction.rollback();
	throw err;
	}
},

async down (queryInterface, Sequelize) {
	const transaction = await queryInterface.sequelize.transaction();
	try {

	await queryInterface.dropTable('medias', { transaction });
	await queryInterface.dropTable('post', { transaction });
	await queryInterface.dropTable('hirer', { transaction });
	await queryInterface.dropTable('artist', { transaction });
	await queryInterface.dropTable('users', { transaction });

	await transaction.commit();
	} catch (err) {
	await transaction.rollback();
	throw err;
	}
}
};
