import express from 'express';
import { sequelize } from './config/db.js';
import { UserRoutes, ProjectRoutes } from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
	origin: ['https://agora-liart.vercel.app', 'http://localhost:5173'],
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	credentials: true
}));

const userRoute = new UserRoutes();
const projectRoute = new ProjectRoutes();

app.use('/users', userRoute.setup());
app.use('/projects', projectRoute.setup());

sequelize.authenticate()
.then(() => {
	console.log('Banco de dados conectado com sucesso!');
})
.catch((err) => {
	console.error('Erro ao conectar ao banco de dados:', err);
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
