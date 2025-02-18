import dotenv from 'dotenv';
dotenv.config();

export default {
	development: {
		url: process.env.DATABASE_URL,
		dialect: 'postgres',
	},
	test: {
		username: 'postgres',
		password: '123',
		database: 'Agora',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	production: {
		url: process.env.DATABASE_URL,
		dialect: 'postgres',
	}
};
