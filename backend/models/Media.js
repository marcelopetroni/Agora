import { Sequelize } from 'sequelize';

export default class Media extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                type: { type: Sequelize.STRING, allowNull: false },
                url: { type: Sequelize.STRING, allowNull: false },
                post_id: { type: Sequelize.INTEGER, allowNull: true },
                user_id: { type: Sequelize.INTEGER, allowNull: false }
            },
            {
                sequelize,
                modelName: 'Media',
                tableName: 'medias',
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                paranoid: true,
                deletedAt: 'deleted_at'
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' });
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}
