import db from '../models/index.js';
import { Op } from 'sequelize';

const { Post, User, Media } = db;

const getPagination = (page, size) => {
    const limit = size ? +size : 10; 
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
};

class PostService {
    /**
     * Cria um novo post e, opcionalmente, suas mídias associadas.
     * Tudo dentro de uma única transação para garantir a integridade dos dados.
     * @param {object} postData - Dados do post. Ex: { text, medias, userId }
     * @returns {Promise<object>} O post criado com suas associações.
     */
    async create({ text, medias, userId }) {
        const transaction = await Post.sequelize.transaction();

        try {
            const post = await Post.create(
                { text, user_id: userId }, 
                { transaction }
            );

            if (medias && medias.length > 0) {
                const mediaPromises = medias.map(media => 
                    Media.create({
                        ...media,
                        post_id: post.id,
                        user_id: userId 
                    }, { transaction })
                );
                await Promise.all(mediaPromises);
            }

            await transaction.commit();

            const result = await Post.findByPk(post.id, {
                include: [
                    {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'name', 'profile_picture']
                    },
                    {
                        model: Media,
                        as: 'medias'
                    }
                ]
            });

            return result;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    /**
     * Encontra todos os posts com paginação e filtros.
     * @param {object} filters - Filtros de busca. Ex: { page, size, user_id }
     * @returns {Promise<object>} Um objeto com a lista de posts e metadados de paginação.
     */
    async findAll({ page, size, user_id }) {
        const { limit, offset } = getPagination(page, size);

        const whereCondition = {};
        if (user_id) {
            whereCondition.user_id = user_id;
        }

        const result = await Post.findAndCountAll({
            where: whereCondition,
            limit,
            offset,
            order: [['created_at', 'DESC']],
            distinct: true, 
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'profile_picture']
                },
                {
                    model: Media,
                    as: 'medias',
                    attributes: ['id', 'type', 'url']
                }
            ]
        });

        const currentPage = page ? +page : 1;
        const totalPages = Math.ceil(result.count / limit);

        return {
            totalItems: result.count,
            totalPages,
            currentPage,
            data: result.rows,
        };
    }
    
    /**
     * Encontra um único post pelo seu ID.
     * @param {number} id - O ID do post.
     * @returns {Promise<object>} O post encontrado ou nulo.
     */
    async findOne(id) {
        const post = await Post.findByPk(id, {
            include: [
                { model: User, as: 'user', attributes: ['id', 'name', 'profile_picture'] },
                { model: Media, as: 'medias' }
            ]
        });
        if (!post) {
            throw new Error('Post não encontrado');
        }
        return post;
    }

    /**
     * Atualiza um post.
     * @param {number} postId - O ID do post a ser atualizado.
     * @param {object} changes - As alterações a serem aplicadas. Ex: { text }
     * @param {number} userId - O ID do usuário que está tentando atualizar (para autorização).
     * @returns {Promise<object>} O post atualizado.
     */
    async update(postId, changes, userId) {
        const post = await Post.findByPk(postId);
        if (!post) {
            throw new Error('Post não encontrado');
        }

        
        if (post.user_id !== userId) {
            throw new Error('Ação não autorizada');
        }

        await post.update(changes);
        return post;
    }

    /**
     * Deleta um post.
     * @param {number} postId - O ID do post a ser deletado.
     * @param {number} userId - O ID do usuário que está tentando deletar (para autorização).
     * @returns {Promise<void>}
     */
    async destroy(postId, userId) {
        const post = await Post.findByPk(postId);
        if (!post) {
            throw new Error('Post não encontrado');
        }

        if (post.user_id !== userId) {
            throw new Error('Ação não autorizada');
        }

        await post.destroy();
    }
}

export default PostService;