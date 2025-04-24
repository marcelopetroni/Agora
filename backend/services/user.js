import { db } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { User } = db;

class UserService {
	async create(data) {
		const transaction = await User.sequelize.transaction();

		try {
			const salt = await bcrypt.genSalt(10);
			data.password = await bcrypt.hash(data.password, salt);

			const userCreated = await User.create(data, { transaction });
			const user = userCreated.toJSON();
			delete user.password;

			await transaction.commit();
			return user;

		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	}

	async getAllUsers() {
		const users = await User.findAll({
			attributes: { exclude: ['password'] }
		});
		return users;
	}

	async login({ email, password }) {
		const user = await User.findOne({ where: { email } });

		if (!user || !(await bcrypt.compare(password, user.password))) {
			throw new Error('Invalid email or password');
		}

		if (!process.env.JWT_SECRET) {
			throw new Error('JWT_SECRET is not defined in environment variables');
		}

		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: '24h' }
		);

		const userData = user.toJSON();
		delete userData.password;

		return {
			user: userData,
			token
		};
	}

	async update({ filter, changes }) {
		const user = await User.findOne({
			where: { id: filter.id },
			attributes: ['id']
		});

		if (!user) {
			throw new Error('User not found');
		}

		const transaction = await User.sequelize.transaction();

		try {
			if (changes.password) {
				const salt = await bcrypt.genSalt(10);
				changes.password = await bcrypt.hash(changes.password, salt);
			}

			await User.update(changes, {
				where: { id: filter.id },
				transaction
			});

			await transaction.commit();

			const updatedUser = await User.findOne({
				where: { id: filter.id },
				attributes: { exclude: ['password'] }
			});

			return updatedUser.toJSON();

		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	}
}

export default UserService;
