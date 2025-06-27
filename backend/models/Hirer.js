import { Sequelize } from 'sequelize';

export default class Hirer extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		super.init(
			{
				user_id: {
					type: DataTypes.INTEGER,
					allowNull: false
				},
				work_area: {
					type: DataTypes.JSON,
					allowNull: true,
					defaultValue: null
				},
				company: {
					type: DataTypes.STRING,
					allowNull: true,
					defaultValue: null
				}
			},
			{
				sequelize,
				modelName: 'Hirer',
				tableName: 'hirer',
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
