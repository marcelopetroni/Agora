import { ProjectService } from '../services/index.js';

class ProjectController {
    constructor() {
        this.projectService = new ProjectService();
        this.create = this.create.bind(this);
        this.getAllProjects = this.getAllProjects.bind(this);
        this.update = this.update.bind(this);
    }

    async create(req, res) {
        const { title, type, startDate, endDate, fundingGoal, description, imageUrl } = req.body;

        try {
            const project = await this.projectService.create({
                title,
                type,
                startDate,
                endDate,
                fundingGoal,
                description,
                imageUrl
            });

            res.status(201).json({
                success: true,
                data: project,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    }

    async getAllProjects(req, res) {
        try {
            const projects = await this.projectService.getAllProjects();
            res.status(200).json({
                success: true,
                data: projects,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    }

    async update(req, res) {
        const { id } = req.query;

        try {
            const options = {
                filter: { id: id },
                changes: req.body,
            };

            const response = await this.projectService.update(options);

            res.status(200).json({
                success: true,
                data: response,
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    }
}

export default ProjectController;
