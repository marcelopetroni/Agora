import MediaService from '../services/media.js';

class MediaController {
    constructor() {
        this.mediaService = new MediaService();
        this.create = this.create.bind(this);
        this.getMediasByUser = this.getMediasByUser.bind(this);
        this.findOne = this.findOne.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    async create(req, res) {
        try {
            const newMedia = await this.mediaService.create(req.body);
            res.status(201).json({ success: true, data: newMedia });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async getMediasByUser(req, res) {
        try {
            const { page, size } = req.query;
            const { user_id } = req.params;
            const result = await this.mediaService.getMediasByUser({ user_id: parseInt(user_id, 10), page, size });
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
            const user_id = req.user?.id;
            const result = await this.mediaService.destroy({ id: parseInt(id, 10), user_id });
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(403).json({ success: false, error: error.message });
        }
    }
}

export default MediaController;