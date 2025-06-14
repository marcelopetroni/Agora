import express from 'express';
import { sequelize } from './config/db.js';
import UserRoutes from './routes/user.js';
import ProjectRoutes from './routes/project.js';
import MediaRoutes from './routes/media.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const userRoute = new UserRoutes();
const projectRoute = new ProjectRoutes();
const mediaRoute = new MediaRoutes();

app.use('/users', userRoute.setup());
app.use('/projects', projectRoute.setup());
app.use('/medias', mediaRoute.setup());

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
