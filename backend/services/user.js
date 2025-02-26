import { db } from '../models/index.js';
const { User } = db;

class UserService {
	async create(data) {
		const transaction = await User.sequelize.transaction();

		try {
			const userCreated = await User.create(data, { transaction });
			const user = userCreated.toJSON();

			await transaction.commit();
			return user;

		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	}

	async getAllUsers() {
		const users = await User.findAll();
		return users;
	}

	async login({ email, password }) {
		const user = await User.findOne({
			where: {
				email: email,
				password: password
			}
		});

		if (!user || user.password !== password) {
		  return null;
		}

		return user;
	}

	async update({ filter, changes }) {
		const user = await User.findOne({
			where: {
				id: filter.id
			},
			attributes: ['id']
		});

			if (!user) {
				throw new Error('Usuário não encontrado');
			}

		const transaction = await User.sequelize.transaction();

		try {
		const promises = [
			User.update(changes, {
				changes,
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

		return { ...user, ...changes };
	}
}

export default UserService;
