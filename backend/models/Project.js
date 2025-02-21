import { Sequelize } from 'sequelize';

export default class Project extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                title: DataTypes.STRING,
                type: DataTypes.STRING,
                startDate: DataTypes.DATEONLY,
                endDate: DataTypes.DATEONLY,
                fundingGoal: DataTypes.DECIMAL(10, 2),
                description: DataTypes.TEXT,
                imageUrl: DataTypes.STRING
            },
            {
                timestamps: false,
                paranoid: true,
                sequelize,
                modelName: 'Project',
                tableName: 'projects',
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: 'deleted_at'
            }
        );
    }
}
