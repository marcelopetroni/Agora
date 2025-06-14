import ProjectController from '../controllers/project.js';
import { ProjectSchema } from '../schemas/index.js';
import { SchemaValidator } from '../middlewares/index.js';
import { Router } from 'express';

export default class ProjectRoutes {
    constructor() {
        this.router = new Router();
        this.ProjectController = new ProjectController();
        this.SchemaValidator = SchemaValidator;
    }

    setup() {
        this.router.get('/', this.ProjectController.getAllProjects);
        this.router.post('/create-project', this.SchemaValidator.validate(ProjectSchema.create), this.ProjectController.create);
        this.router.put('/update-project', this.SchemaValidator.validate(ProjectSchema.update), this.ProjectController.update);

        return this.router;
    }
}
