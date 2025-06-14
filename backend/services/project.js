import db from '../models/index.js';

class ProjectService {
    constructor() {
        this.Project = db.Project;
    }

    async create(data) {
        const transaction = await this.Project.sequelize.transaction();
        try {
            const projectCreated = await this.Project.create(data, { transaction });
            const project = projectCreated.toJSON();
            await transaction.commit();
            return project;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async getAllProjects() {
        const projects = await this.Project.findAll();
        return projects;
    }

    async update({ filter, changes }) {
        const project = await this.Project.findOne({
            where: { id: filter.id },
            attributes: ['id']
        });
        if (!project) {
            throw new Error('Projeto não encontrado');
        }
        const transaction = await this.Project.sequelize.transaction();
        try {
            await this.Project.update(changes, {
                where: { id: filter.id },
                transaction
            });
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
        return { ...project, ...changes };
    }
}

export default ProjectService;