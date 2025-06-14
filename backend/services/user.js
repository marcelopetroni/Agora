import db from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import lodash from 'lodash';

const { omit } = lodash;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
};

class UserService {
    constructor() {
        this.User = db.User;
        this.Artist = db.Artist;
        this.Hirer = db.Hirer;
    }

    async create(data) {
        const transaction = await this.User.sequelize.transaction();
        try {
            data.password = await this.hashPassword(data.password);
            const user = await this.User.create(data, { transaction });
            if (data.type === 'artist') {
                await this.Artist.create({ user_id: user.id, artistic_field: data?.artistic_field }, { transaction });
            }
            if (data.type === 'hirer') {
                await this.Hirer.create({ user_id: user.id, work_area: data?.work_area, company: data?.company }, { transaction });
            }
            await transaction.commit();
            return omit(user.toJSON(), ['password']);
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async getAllUsers({ page, size }) {
        const { limit, offset } = getPagination(page, size);
        const result = await this.User.findAndCountAll({
            limit,
            offset,
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']]
        });
        const currentPage = page ? +page : 1;
        const totalPages = Math.ceil(result.count / limit);
        return { totalItems: result.count, totalPages, currentPage, data: result.rows };
    }

    async findOne(id) {
        const user = await this.User.findByPk(id, {
            attributes: { exclude: ['password'] },
            include: [
                { model: this.Artist, as: 'artist' },
                { model: this.Hirer, as: 'hirer' }
            ]
        });

        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    }

    async login({ email, password }) {
        const user = await this.User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid email or password');
        }
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in environment variables');
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
        const userData = user.toJSON();
        delete userData.password;
        return { user: userData, token };
    }

    async update({ filter, changes }, authenticatedUserId) {
        if (filter.id !== authenticatedUserId) {
            throw new Error('Ação não autorizada');
        }

        const user = await this.User.findByPk(filter.id);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const transaction = await this.User.sequelize.transaction();
        try {
            if (changes.password) {
                changes.password = await this.hashPassword(changes.password);
            }

            await this.User.update(changes, { where: { id: filter.id }, transaction });
            
            if (user.type === 'artist' && changes.artistic_field) {
                await this.Artist.update(
                    { artistic_field: changes.artistic_field },
                    { where: { user_id: filter.id }, transaction }
                );
            }

            if (user.type === 'hirer') {
                const hirerChanges = {};
                if (changes.work_area) hirerChanges.work_area = changes.work_area;
                if (changes.company) hirerChanges.company = changes.company;
                
                if (Object.keys(hirerChanges).length > 0) {
                    await this.Hirer.update(
                        hirerChanges,
                        { where: { user_id: filter.id }, transaction }
                    );
                }
            }

            await transaction.commit();
            
            const updatedUser = await this.findOne(filter.id);
            return updatedUser;

        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async destroy(userIdToDelete, authenticatedUserId) {
        if (userIdToDelete !== authenticatedUserId) {
            throw new Error('Ação não autorizada');
        }

        const user = await this.User.findByPk(userIdToDelete);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        await user.destroy(); 
        
        return { message: 'Usuário desativado com sucesso (soft delete).' };
    }
}

export default UserService;
