import { Sequelize } from 'sequelize';

export default class User extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		super.init(
			{
				type: DataTypes.STRING,
				name: DataTypes.STRING,
				email: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				},
				password: {
					type: DataTypes.STRING(60),
					allowNull: true
				},
				born: DataTypes.DATEONLY,
				country: DataTypes.STRING,
				contact_cellphone: DataTypes.STRING,
				isPhoneWhatsapp: {
					type: DataTypes.BOOLEAN,
					defaultValue: false
				},
				languages: DataTypes.JSON,
				profile_picture: DataTypes.STRING,
				description: DataTypes.TEXT
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
	static associate(models) {
		this.hasOne(models.Artist, {
			foreignKey: 'user_id',
			as: 'artist'
		});
		this.hasOne(models.Hirer, {
			foreignKey: 'user_id',
			as: 'hirer'
		});
	}
}
