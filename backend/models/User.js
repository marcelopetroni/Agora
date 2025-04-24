import { Sequelize } from 'sequelize';

export default class User extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		super.init(
			{
			name: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			birth: DataTypes.DATEONLY,
			country: DataTypes.STRING,
			languages: DataTypes.JSON,
			field: DataTypes.JSON,
			company: DataTypes.STRING,
			experience: DataTypes.STRING,
			},
			{
			timestamps: false,
			paranoid: true,
			sequelize,
			modelName: 'User',
			tableName: 'users',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at'
			}
		);
	}
}
