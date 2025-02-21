import { db } from '../models/index.js';
const { Project } = db;

class ProjectService {
    async create(data) {
        const transaction = await Project.sequelize.transaction();

        try {
            const projectCreated = await Project.create(data, { transaction });
            const project = projectCreated.toJSON();

            await transaction.commit();
            return project;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async getAllProjects() {
        const projects = await Project.findAll();
        return projects;
    }

    async update({ filter, changes }) {
        const project = await Project.findOne({
            where: {
                id: filter.id
            },
            attributes: ['id']
        });

        if (!project) {
            throw new Error('Projeto não encontrado');
        }

        const transaction = await Project.sequelize.transaction();

        try {
            const promises = [
                Project.update(changes, {
                    where: {
                        id: filter.id
                    },
                    transaction
                })
            ];

            await Promise.all(promises);
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }

        return { ...project, ...changes };
    }
}

export default ProjectService;
