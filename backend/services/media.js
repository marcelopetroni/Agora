import { db } from '../models/index.js';
const { Project } = db;

const getPagination = (page, size) => {
    const limit = size ? +size : 12;
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
};

class MediaService {
    constructor() {
        this.Media = db.Media;
    }

    async create({ url, type, userId, postId = null }) {
        const media = await this.Media.create({ url, type, user_id: userId, post_id: postId });
        return media;
    }

    async findAllByUser({ userId, page, size }) {
        const { limit, offset } = getPagination(page, size);
        const result = await this.Media.findAndCountAll({
            where: { user_id: userId },
            limit,
            offset,
            order: [['created_at', 'DESC']]
        });
        const currentPage = page ? +page : 1;
        const totalPages = Math.ceil(result.count / limit);
        return { totalItems: result.count, totalPages, currentPage, data: result.rows };
    }

    async findOne(id) {
        const media = await this.Media.findByPk(id);
        if (!media) { throw new Error('Mídia não encontrada'); }
        return media;
    }

    async destroy(mediaId, userId) {
        const media = await this.Media.findByPk(mediaId);
        if (!media) { throw new Error('Mídia não encontrada.'); }
        if (media.user_id !== userId) { throw new Error('Ação não autorizada. Você não é o proprietário desta mídia.'); }
        
        await media.destroy(); 
        return { message: 'Mídia desativada com sucesso (soft delete).' };
    }
}

export default MediaService;