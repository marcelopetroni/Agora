import { Router } from 'express';
import MediaController from '../controllers/media.js';
import { MediaSchema } from '../schemas/index.js';
import { SchemaValidator } from '../middlewares/index.js';

export default class MediaRoutes {
    constructor() {
        this.router = new Router();
        this.mediaController = new MediaController();
        this.SchemaValidator = SchemaValidator;
    }

    setup() {
        this.router.post('/', this.SchemaValidator.validate(MediaSchema.create), this.mediaController.create);
        this.router.get('/user/:userId', this.mediaController.findAllByUser);
        this.router.get('/:id', this.SchemaValidator.validate(MediaSchema.getOne), this.mediaController.findOne);
        this.router.delete('/:id', this.SchemaValidator.validate(MediaSchema.getOne), this.mediaController.destroy);
        return this.router;
    }
}