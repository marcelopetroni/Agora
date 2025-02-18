import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(, {
	dialect: 'postgres'
});

export { sequelize };
