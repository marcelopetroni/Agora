import MediaService from '../services/media.js';

class MediaController {
    constructor() {
        this.mediaService = new MediaService();
        this.create = this.create.bind(this);
        this.findAllByUser = this.findAllByUser.bind(this);
        this.findOne = this.findOne.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    async create(req, res) {
        try {
            const mediaData = req.body;
            const newMedia = await this.mediaService.create(mediaData);
            res.status(201).json({ success: true, data: newMedia });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async findAllByUser(req, res) {
        try {
            const { page, size } = req.query;
            const { userId } = req.params;
            const result = await this.mediaService.findAllByUser({ userId: parseInt(userId, 10), page, size });
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async findOne(req, res) {
        try {
            const { id } = req.params;
            const media = await this.mediaService.findOne(parseInt(id, 10));
            res.status(200).json({ success: true, data: media });
        } catch (error) {
            res.status(404).json({ success: false, error: error.message });
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const userId = req.user.id;
            const result = await this.mediaService.destroy(parseInt(id, 10), userId);
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(403).json({ success: false, error: error.message });
        }
    }
}

export default MediaController;