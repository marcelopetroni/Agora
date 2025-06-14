import { Sequelize } from 'sequelize';

export default class Project extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                title: DataTypes.STRING,
                type: DataTypes.STRING,
                start: DataTypes.DATEONLY,
                end: DataTypes.DATEONLY,
                goal: DataTypes.DECIMAL(10, 2),
                description: DataTypes.TEXT,
                image: DataTypes.STRING
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
