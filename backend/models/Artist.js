import { Sequelize } from 'sequelize';

export default class Artist extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		super.init(
			{
				user_id: {
					type: DataTypes.INTEGER,
					allowNull: false
				},
				artistic_field: {
					type: DataTypes.STRING,
					allowNull: true,
					defaultValue: null
				}
			},
			{
				sequelize,
				modelName: 'Artist',
				tableName: 'artist',
				createdAt: 'created_at',
				updatedAt: 'updated_at'
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.User, {
			foreignKey: 'user_id',
			as: 'user',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
	}
}
