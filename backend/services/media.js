import { db } from '../models/index.js';
import UserService from './user.js';

const getPagination = (page, size) => {
    const limit = size ? +size : 12;
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
};

class MediaService {
    constructor() {
        this.Media = db.Media;
        this.userService = new UserService();
    }

    async create(filter) {
        const isRegistered = await this.userService.countUserById(filter.user_id);

        if (!isRegistered) {
            throw new Error('Usuário não encontrado');
        }

        const media = await this.Media.create(filter);

        return media;
    }

    async getMediasByUser({ user_id, page, size }) {
        const { limit, offset } = getPagination(page, size);

        const result = await this.Media.findAndCountAll({
            where: {
                user_id: user_id
            },
            raw: true,
            limit,
            offset,
            order: [['created_at', 'DESC']]
        });
        const currentPage = page ? + page : 1;
        const totalPages = Math.ceil(result.count / limit);

        return {
            totalItems: result.count,
            totalPages,
            currentPage,
            data: result.rows
        };
    }

    async findOne(id) {
        const media = await this.Media.findByPk(id);

        if (!media) {
            throw new Error('Mídia não encontrada');
        }

        return media;
    }

    async destroy({ id, user_id }) {
        const media = await this.Media.findByPk(id);

        if (!media) {
            throw new Error('Mídia não encontrada.');
        }

        if (media.user_id !== user_id) {
            throw new Error('Ação não autorizada. Você não é o proprietário desta mídia.');
        }

        await media.destroy();
        return {
            message: 'Mídia apagada com sucesso'
        };
    }
}

export default MediaService;
