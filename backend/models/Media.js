import { Sequelize } from 'sequelize';

export default class Media extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                type: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                url: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                post_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true 
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false 
                }
            },
            {
                sequelize,
                modelName: 'Media',
                tableName: 'medias',
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Post, {
            foreignKey: 'post_id',
            as: 'post'
        });

        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }
}