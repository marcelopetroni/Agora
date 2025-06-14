import MediaService from '../services/media.js';

class MediaController {
    constructor() {
        this.mediaService = new MediaService();
        this.create = this.create.bind(this);
        this.findAllByUser = this.findAllByUser.bind(this);
        this.destroy = this.destroy.bind(this);
        this.findOne = this.findOne.bind(this);
    }

    async create(req, res) {
        try {
            const userId = req.user.id; 
            const { url, type } = req.body;

            const media = await this.mediaService.create({ url, type, userId });

            res.status(201).json({
                success: true,
                data: media,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado ao criar a mídia.',
            });
        }
    }

    async findAllByUser(req, res) {
        try {
            const { page, size } = req.query;
            const { userId } = req.params; 

            const result = await this.mediaService.findAllByUser({ userId, page, size });
            
            res.status(200).json({
                success: true,
                data: result,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado ao buscar as mídias.',
            });
        }
    }

    async findOne(req, res) {
    try {
        const { id } = req.params;
        const media = await this.mediaService.findOne(parseInt(id, 10));

        res.status(200).json({
            success: true,
            data: media,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message || 'Erro inesperado ao buscar a mídia.',
        });
    }
}

    async destroy(req, res) {
        try {
            const { id } = req.params; 
            const userId = req.user.id; 

            await this.mediaService.destroy(parseInt(id, 10), userId);

            res.status(200).json({
                success: true,
                message: 'Mídia deletada com sucesso.',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado ao deletar a mídia.',
            });
        }
    }
}

export default MediaController;