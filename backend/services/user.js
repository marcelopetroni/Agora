import { db } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import lodash from 'lodash';

const { omit } = lodash;

const { User, Artist, Hirer } = db;

class UserService {
	async create(data) {
		const isGoogleLogin = data.password ? false : true;

		const transaction = await User.sequelize.transaction();

		try {
			if (!isGoogleLogin){
				const isRegistered = await this.countUserByEmail(data.email);

				if (isRegistered) {
					throw new Error('Já existe uma conta criada com esse e-mail');
				}

				data.password = await this.hashPassword(data.password);
			}

			const promises = [];

			const user = await User.create(data, { transaction });

			if (data.type === 'artist') {
				promises.push(
					Artist.create(
					{
						user_id: user.id,
						artistic_field: data?.artistic_field

					}, { transaction })
				);
			}

			if (data.type === 'hirer') {
				promises.push(
					Hirer.create(
					{
						user_id: user.id,
						work_area: data?.work_area,
						company: data?.company
					},
					{ transaction })
				);
			}

			await Promise.all(promises);

			await transaction.commit();

			return omit(user, ['password']);

		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	}

	async hashPassword(password) {
		const salt = await bcrypt.genSalt(10);

		return bcrypt.hash(password, salt);
	};

	async getAllUsers() {
		const users = await User.findAll({
			attributes: { exclude: ['password'] }
		});
		return users;
	}

	async getUserByEmail(email) {
		const user = await User.findOne({ where: { email } });
		return user;
	}

	async countUserByEmail(email) {
		const count = await User.count({ where: { email } });
		return count;
	}

	async getUserById(id) {
		const user = await User.findOne({ where: { id } });
		return user;
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

	async loginGoogle(data) {
		let user = await this.getUserByEmail(data.email);

		if (!user) {
			user = await this.create(data);
		}

		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: '24h' }
		);

		return {
			user: user,
			token,
		};
	}

	async update({ filter, changes }) {
		const user = await this.getUserById(filter.id);

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
