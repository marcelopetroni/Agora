import { Sequelize } from 'sequelize';

export default class Post extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                text: {
                    type: DataTypes.TEXT,
                    allowNull: true
                }
            },
            {
                sequelize,
                modelName: 'Post',
                tableName: 'post',
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });

        this.hasMany(models.Media, {
            foreignKey: 'post_id',
            as: 'medias'
        });
    }
}